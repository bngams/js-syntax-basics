/*
 * call back use case
 */

// function to call when we have a result
function displayResult(result) {
    console.log(result);  
} 

// AJAX Request
// use XMLHttpRequest Object from JS API
let xhr = new XMLHttpRequest();
// for now nothing happened
// request configuration
xhr.open("get", "https://jsonplaceholder.typicode.com/todos/1");
// configure listeners
xhr.onreadystatechange = function() {
    // if done and if status ok
    if (xhr.readyState === 4 && xhr.status === 200) {
        // do something
        console.log("request is done do something"); 
        displayResult(xhr.responseText);          
    } else if (xhr.readyState === 4) {
        // error
    }
}
// execute request
xhr.send(); // async treatment
console.log("request is sent"); 