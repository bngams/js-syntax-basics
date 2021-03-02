// a callback is function called by another function
var myCallback = function() {
    console.log("Done!");
}
setTimeout(myCallback, 5000);

// call back as anonymous function
// if we dont want to create a function, we can write one directly
setTimeout(function() {
    console.log("Done!");
}, 5000);

// callback can receive an argument
var myCallback = function(arg) {
    console.log("Result is " + arg);
}
setTimeout(myCallback("Done!"), 5000);

// convention success / error
var myCallbackSuccess = function (arg) {
    console.log("Result is " + arg);
}
var myCallbackError = function (arg) {
    console.log("Result is " + arg);
}
setTimeout(() => {
    if(true) {
        myCallbackSuccess();
    } else {
        myCallbackError();
    }
}, 5000);

// Many callbacks can be difficult to manage
// http://callbackhell.com/
