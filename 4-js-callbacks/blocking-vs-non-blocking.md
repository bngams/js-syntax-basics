## What is a Callback?

- Callback does not means Async
- A callback function is called at the completion of a given task.
- Can be passed to another function as a parameter to be called later.
- Node.js makes heavy use of callbacks.

## Blocking vs Non-blocking

### Blocking Code
Execution continues and the callback method will be invoked later when the data is ready
```
Read file from Filesystem, set equal to "contents"
Print contents
Do something else
```

### Non-blocking Code
Execution stops until reading complets
```
Read file from Filesystem
  whenever you’re complete, print the contents
Do Something else
```

## Challenges with asynchronous development

Using global variables can lead to bugs

```js
color = 'blue';
setTimeout(() => {
	console.log('The color is ' + color)
}, 1000)
color = 'red';
```

```bash
The color is red
```

Instead, pass the variable as a parameter for the function to handle it as a a local variable

```js
let color = 'blue';

setTimeout(function(c) {
    console.log('The color is ' + c);
}, 1000, color);

color = 'red';
```

```bash
The color is blue
```