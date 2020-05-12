/*
 * Async / Await
 */

// basic async treatment with promise
function request() {
	// traitement async
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}

// with a basic call we need to handle the promise "manually"
function basicCall() {
	// define a variable to store result
	let result = null;
	// lauch the request
	request().then( (data) => {
		result = data;
	});
}
basicCall();

// async keyword allow to use await to handle a promise synchronously
async function awaitAsyncCall() {
	//
	let result = await request();
	let result2 = await request();
	otherMethod(result, result2);
}
awaitAsyncCall();


