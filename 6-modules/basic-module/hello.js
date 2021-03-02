// hello module
// public 
export function sayHi(user) {
  alert(`Hello, ${user}!`);
  log();
}

// private
function log() {
	console.log('logging call to sayHi');
}