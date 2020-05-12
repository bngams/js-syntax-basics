var myModule = require('myModule');
var User = require('User');
var options = require('options');

new User();

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'