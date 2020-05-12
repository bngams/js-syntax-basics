function myModule() {
  this.hello = function() {
    return 'hello!';
  }

  this.goodbye = function() {
    return 'goodbye!';
  }
}

class User {

}

exports = User;

exports.options = ['value', 'etc']

module.exports = myModule;
// exports = myModule
// module.exports.myModuleName = myModule;