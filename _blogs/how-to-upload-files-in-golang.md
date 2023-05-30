---
title: "How to upload files in Golang ?"
date: "2023-05-30T17:44:47Z"
---

In this blog I will be using the **native Golang http package** to upload files, no third party packages. We will see how to upload single and multiple files.

## The HTML form

The form is simple and straight forward. The only thing to note is the `enctype="multipart/form-data"` attribute. This is required for uploading files.

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input name="name" type="text" placeholder="name" />
  <input name="ok" type="checkbox" placeholder="ok" value="aaaaa" /> aaaaa
  <input name="ok" type="checkbox" placeholder="ok" value="bbbbbb" /> bbbbbb
  <input type="file" name="file" id="file" />
  <button type="submit">SUBMIT!</button>
</form>
```

## Single file upload

```go
func uploadFile(w http.ResponseWriter, r *http.Request){
  file, header, _ := r.FormFile("file")
  defer file.Close()

  // create a destination file
  dst, _ := os.Create(filepath.Join("./", header.Filename))
  defer dst.Close()

  // upload the file to destination path
  nb_bytes, _ := io.Copy(dst, file)}

  fmt.Println("File uploaded successfully")
```

💡**Note:** All of the `_` underscore variables are errors, I just ignored them for the sake of simplicity. so don't do that in production.

As you noticed we get the uploaded file with the `r.FormFile("input_name_here")` function, it returns 3 variables, `file` which is the uploaded file itself, `header` which contains information about the file like the name, size, MIME type etc..., you can use these information to validate the file before uploading it, and finally `_` which is the error if any.

## Multiple files upload

First of all before you can select multiple files, you need to add the `multiple` attribute to the file input

```go
func uploadFile(w http.ResponseWriter, r *http.Request){
  // key = "file" in the form
  for key, files := range r.MultipartForm.File {
    for _, file := range files {
      dst, _ := os.Create(filepath.Join("./", file.Filename))
      f, _ := file.Open()
      io.Copy(dst, f)
    }
  }
}
```

Just FYI, the `r.MultipartForm.File` is a `map[string][]*multipart.FileHeader` where the key is the name of the input in the form. The `file` variable contains the same information as the `header` variable in the single file upload example, (size, name, MIME type etc...)

## The other fields

To get the other fields, there are two options, which at some point you will need to use both of them.

```go
// OPTION 1: returns a string which is the first value of the key
r.FormValue("name") // string

// OPTION 2: returns a slice of strings of all the values of the key
r.MultipartForm.Value["name"] // map[string][]string
```

You can use the first option when you want to get a single value, and the second option when you want to get multiple values, in our case the checkbox can have multiple values.

So `r.FormValue("name")` is like doing `r.MultipartForm.Value["name"][0]`.

---
That's it, I hope you enjoyed this tutorial, if you have any questions or suggestions, you can find all of this on GitHub.
