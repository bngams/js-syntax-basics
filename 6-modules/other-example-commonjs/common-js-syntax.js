module.exports = {
    method: function() {},
    otherMethod: function() {},
};

// or

exports.method = function() {};
exports.otherMethod = function() {};

// require with one of 
const myModule = require('./myModule.js');
const method = myModule.method;
const otherMethod = myModule.otherMethod;
// OR:
const {method, otherMethod} = require('./myModule.js');

// you can see syntax like
var foo = require('module.js')(firstParam);