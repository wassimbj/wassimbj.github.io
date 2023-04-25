---
title: 'Understanding goroutines and concurrency in Golang'
date: '2023-04-25T17:47:58Z'
---

*this article assume that you have read about Golang, and know the basics at least.*

So let me start with the definition of concurrency,
it's simply the execution of some code instructions at the same time. that's it.

### Goroutines
*A goroutine is a lightweight thread of execution.*

> A Thread, or thread of execution, is a software term for the basic ordered sequence of instructions that can be passed through or processed by a single CPU core. - [stackoverflow](https://stackoverflow.com/questions/5201852/what-is-a-thread-really).

so goroutine let us execute functions concurrently, how is that ?
a simple example:
```go
package main

import (
	"fmt"
	"time"
)

func createUser(name string) {
  fmt.Println(name + " has been created successfully")
}
func uploadUserImage() {
  fmt.Println("User image has been successfully uploaded to the cloud !!")
}

func main() {
  go createUser("wassim")
  go uploadUserImage()

  time.Sleep(time.Second)
}

```
Output
```bash
User image has been successfully uploaded to the cloud !!
wassim has been created successfully
```

so as you can see the output of this simple program is not as the function order, cause they are executed concurrently so the result can be unordered.

*But wait a minute, why you put that time sleep at the end there ? is it necessary why is it necessary ?*

so Go program is gonna finish executing when the main function ends, So, Our two function calls are running asynchronously in separate goroutines now. Wait for them to finish, but main function doesn't wait it doesn't know that the two functions are still running, so if we remove that sleep it won't print anything to the console. try it if you want.

now lets go to channels.

### Channels
*Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine.*

lets start with code directly, here is an example using channels.

```go
package main

import (
	"fmt"
)

func createUser(name string, done chan<- bool) {
	fmt.Println(name + " has been created successfully")
	done <- true
}
func uploadUserImage(done chan<- bool) {
	fmt.Println("User image has been successfully uploaded to the cloud !!")
	done <- true
}

func main() {

	done := make(chan bool)

	go uploadUserImage(done)
	fmt.Println("Image uploaded: ", <-done)

	go createUser("wassim", done)
	fmt.Println("User created: ", <-done)
}
```

So let me first tell you what is the difference between this `chan<-` , this `<-chan` and this `chan`.

"chan" => in the function parameter, means that we will read and write from that channel, its a data type.
"chan<-" => means that we will write only
"<-chan" => means that we will read only

the output of this progam:

```bash
User image has been successfully uploaded to the cloud !!
Image uploaded:  true
wassim has been created successfully
User created:  true
```


so in the main function we created a channel named done, we passed that channel as a parameter to our workers (createUser, and upload), and whenver a worker is done we notify the main function.
we put in the channel with `channelName <- VALUE`

and we consume the message from a channel like this `<-channelName`

if we don't consume the message, the goroutine function is not gonna print anything cause main will not wait for it, so by using `<-done` we are telling the main function to wait until we get a message from the worker.
so if we removed this line here 
```go
fmt.Println("User created: ", <-done)
```
we will get an output like this:

```bash
User image has been successfully uploaded to the cloud !!
Image uploaded:  true
```

so <-done is simply blocking the main function from exiting. and therefore ending the program from executing.

And this is what is called *Channel Synchronization*, its just a fancy word that means blocking until a goroutine finish executing.

But, When waiting for multiple goroutines to finish, you may prefer to use a WaitGroup.


### WaitGroup
*To wait for multiple goroutines to finish, we can use a wait group.*

Again, lets jump directly to code, and then i will explain how and why.
```go
package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func createUser(name string) {
	defer wg.Done()
	fmt.Println(name + " has been created successfully")
}

func uploadUserImage() {
	defer wg.Done()             // defer -> it will delay the execution of this func we upload the user image
	time.Sleep(time.Second * 3) // just to say that this is an expensive function (that took 3s)
	fmt.Println("User image has been successfully uploaded to the cloud !!")
}

func main() {

	go createUser("wassim")
	go uploadUserImage()

	wg.Add(2)
	wg.Wait()
}
```
well, to use WaitGroup, we need to import the sync package, then we declared a global variable wg.

now let me explain how the WaitGroup works. the `wg.Add(NUMBER_OF_GOROUTINES)` this function increment the number of the running goroutines, the `wg.Done()` will decrease the number of goroutines, so whenever a worker (function) is done working you fire the `wg.Done()` function the `defer` keyword just tells the function to delay until the main function ends its work **(by main function i mean its parent wich is the upload and create function)**, lastly the `wg.Wait()` this function blocks the program from exiting until the number of goroutines is 0. so `wg.Done()` will decrease until we reach the 0 then the `wg.Wait()` will fire, and the program exit/finish.

----
Thanks for reading, this is my first post, so if there is anything !good let me know :)

[More to learn about GO](https://gobyexample.com)
