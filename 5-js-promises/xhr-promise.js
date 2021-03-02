function displayResult(result) {
    document.querySelector('#results').innerHTML(result);
}

function displayError(err, other) {
    document.querySelector('#results').innerHTML(err.msg);
}

function xhr(method, url) {
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // nothing happened - request definition
        xhr.open(method, url);
        // configure listeners
        xhr.onreadystatechange = () => {
            // si terminée et si status ok
            if (xhr.readyState === 4 && xhr.status === 200) {
                // traitement
                console.log("bloc treatment");
                resolve(xhr.responseText);
            } else if (xhr.readyState === 4) {
                // error            
                reject({ msg: xhr.responseText });
            }
        }
        // execute request
        xhr.send();
    });
}

let request = xhr("get", 
    "https://jsonplaceholder.typicode.com/todos/1");
request
    .then((result) => displayResult(result))
    .catch((err) => displayError(err));

xhr("get", 
    "https://jsonplaceholder.typicode.com/todos");