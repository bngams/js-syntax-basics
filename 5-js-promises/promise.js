/**
 * Replace callback with promise
 */

function withCallback(callback) {
	// traitement async
	setTimeout(function() {
		// trigger callback when treatment is done
    	callback();
	}, 3000);
}

function withPromise() {
	// traitement async
	setTimeout(function() {
		return new Promise((resolve, reject) => {
			if(true)
				resolve({});
			else
				reject({});
		});
	}, 3000);
}

function doSomething() {
	console.log("do something");
}

// do treatment with callback
withCallback(doSomething());

// do treatment with promise
let myPromise = withPromise();

// get data when promise resolved
myPromise.then( (data) => {
	// ...
})

// get data on promise error
myPromise.catch( (data) => {
	// ...
})