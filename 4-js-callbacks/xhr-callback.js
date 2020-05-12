function displayResult(result) {
    document.querySelector('#results').innerHTML(result);
}

function displayError(err, other) {
    document.querySelector('#results').innerHTML(err.msg);
}

function xhr(method, url, success, error) {
    let xhr = new XMLHttpRequest();
    // nothing happened - request definition
    xhr.open(method, url);
    // configure listeners
    xhr.onreadystatechange = () => {
        // si terminée et si status ok
        if (xhr.readyState === 4 && xhr.status === 200) {
            // traitement
            console.log("bloc treatment");
            success(xhr.responseText);
        } else if (xhr.readyState === 4) {
            // error            
            error({ msg: xhr.responseText });
        }
    }
    // execute request
    xhr.send();
}

xhr("get", 
    "https://jsonplaceholder.typicode.com/todos/1", 
    displayResult, 
    displayError);

xhr("get", 
    "https://jsonplaceholder.typicode.com/todos", 
    () => { }, 
    () => { });