---
title: "Measure your code's performance on the fly"
date: "2025-03-13T13:00:22Z"
---

If you’ve heard about `console.time` before, you can just close the tab. :)

---

JavaScript `console.time` is a great built-in tool that gives you the duration of an operation.

## Usage

`console.time` starts the timer, and `console.timeEnd` stops it, so just wrap what you want to measure between these methods, and you should see the result in the console.

The output is in suitable time units. For example, if the elapsed time is 3869ms, `console.timeEnd` displays "3.869s".

And here’s a real example: as you can see, foo took 1ms to finish looping through an array of 10,000 empty values.

![Preview of console.time](/blog/console-time.png)
