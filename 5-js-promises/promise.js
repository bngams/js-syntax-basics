/**
 * Replace callback with promise
 */

function doSomething() {
	console.log("do something");
}
// let doSomething = function() {

// }

function withCallback(callback) {
	// traitement async
	setTimeout(function () {
		// trigger callback when treatment is done
		callback();
	}, 3000);
}

// with callback
withCallback(() => console.log('test'));

// do treatment with callback
withCallback(doSomething());

// what is a promise object
const myPromise = new Promise((resolve, reject) => {
	setTimeout(function () {
		if (true) {
			// trigger 
			resolve();
		} else {
			reject();
		}
	}, 3000);
});
// resolve
myPromise.then(() => {
	console.log("promise is resolved")
});
//reject
myPromise.catch(() => {

});

function withPromise(param1, param2) {
	// traitement async
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			if (true)
				resolve({});
			else
				reject({});
		}, 3000);
	});
}

// first syntax
const myPromiseObject = withPromise();
myPromiseObject.then();

// other syntax (programmation fonctionnelle)
withPromise()
	.then((res) => {
		withOtherPromise(res).
			.then()
	}).catch()



// do treatment with promise
let myPromise = withPromise();

// get data when promise resolved
myPromise.then((data) => {
	// ...
})

// get data on promise error
myPromise.catch((data) => {
	// ...
})