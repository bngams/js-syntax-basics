// ressource
// https://www.miximum.fr/blog/pour-enfin-comprendre-javascript/

// create on the fly
var user = {
    firstName: "",
    lastName: "",
    toString: function() {
        //....
    },
    children: [
        {},
        {}
    ]
};

// constructor pattern
var makeUser = function(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        toString: function() {
            return this.firstName + ' ' + this.lastName;
        }
    };
};
var tata = makeUser('Tata', 'de La Rochette de Rochegonde');
var toto = makeUser('Toto', "d'Aumont de Rochebaron");


// constructor pattern notation
var User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.toString = function() {
        return this.firstName + ' ' + this.lastName;
    };
};
var tata = new User('Tata', 'de La Rochette de Rochegonde');

// prototypes

// prototype Object
// Object.prototype


// define a prototype
var User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

User.prototype;  // {}

User.prototype.toString = function() {
    return this.firstName + ' ' + this.lastName;
};

var tata = new User('Tata', 'de La Rochette de Rochegonde');
tata.toString();  // Tata de la Rochette de Rochegonde