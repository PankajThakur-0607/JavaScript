
// Singleton 

// Object.create()   // it is made using Constructor so it is singleton

// Objects Literals 
const mySym = Symbol()

const jsUser = {       //  isme singleton nhi banta h
    name : "Pankaj" ,
    [mySym] : "xyz",
    "full name " : "Pankaj Thakur",
    age : 21,
    email : "pankuoThakur@google.com",
    isLogged : false ,
    lastTimeLogged : ["Monday" , "Sunday"]
}

// method 1 which is not correct in most cases 
console.log(jsUser.name);    

// method 2 whic is correct way to use 
// console.log(jsUser["full name "]);  
console.log(jsUser["age"]);
// console.log(jsUser[mySym]);

jsUser.email = "Pankaj@microsoft.com"
// Object.freeze(jsUser)

jsUser.email = "panjhusahu"
// console.log(jsUser)

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`)
}


// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());















/*Prototype Chain in JavaScript
The prototype chain is a fundamental concept in JavaScript that explains how objects inherit properties and methods from other objects.

What is a Prototype?
Every JavaScript object has a prototype, which is another object from which it inherits properties and methods. This allows for property and method sharing across different objects.

The Prototype Chain
When you access a property or method on an object and it is not found, JavaScript looks up the prototype chain to find it.

Object Prototype
The base prototype object is Object.prototype.
All objects inherit properties and methods from Object.prototype.
Methods like toString, hasOwnProperty, and isPrototypeOf come from Object.prototype.
Prototype Link (__proto__)
Each object has an internal link to its prototype, accessible via the __proto__ property (though it's recommended to use Object.getPrototypeOf in modern code).

*/

// Example: Creating Objects and Prototypes

let animal = {
    eats: true
};

let rabbit = Object.create(animal);
rabbit.jumps = true;

// console.log(rabbit.eats); // true (inherited from animal)
// console.log(rabbit.jumps); // true (own property)

/*
Explanation:
animal is an object with a property eats.
rabbit is created with animal as its prototype using Object.create.
When accessing rabbit.eats:

JavaScript first looks for the eats property on the rabbit object.
If not found, it looks up the prototype chain to animal and finds eats.
Accessing Prototypes
You can access an object's prototype using:

Object.getPrototypeOf(obj)
obj.__proto__ (not recommended in modern code)
*/

// console.log(Object.getPrototypeOf(rabbit) === animal); // true







// Constructor Functions and Prototypes
// Constructor functions and prototypes work together to create and share methods across instances:

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello , my name is ${this.name}`);
};


let alice = new Person('Alice');
// alice.greet(); // Hello, my name is Alice

// console.log(Object.getPrototypeOf(alice) === Person.prototype); // true
// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true



// Static Method vs Instance Method 

// A static method is defined directly on the constructor function and can be called on the constructor itself, but not on instances of that constructor.


function Pankaj(name){
    this.name = name;
}

// Define a static method on the Person constructor

Pankaj.greet = function(){
    console.log("Hello From The Pankaj Constructor!");
};


// Call the static method on the constructor
Pankaj.greet(); // Output: Hello from the Person constructor! 

let thakur = new Pankaj('thakur');

// Attempting to call the static method on an instance will fail
try{
    thakur.greet();
}catch(error){ // This will throw an error: alice.greet is not a function
    console.log(error.message);
}


// Instance Method
// An instance method is defined on the prototype of the constructor function. It can be called on instances of that constructor.


function User(name){
    this.name = name;
}

// Define an instance method on the Person prototype
User.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

let mike = new User('Micheal Jackson');
let jackson = new User('SpiderMan')

// Call the instance method on the instances
mike.greet(); // Output: Hello, my name is Alice
jackson.greet(); // Output: Hello, my name is Bob

// Attempting to call the instance method on the constructor will fail
try {
    Person.greet(); // This will throw an error: Person.greet is not a function
} catch (error) {
    console.log(error.message);
}


// Summary

// 1.
// Static Method (Person.greet):

// Defined directly on the constructor function.
// Called on the constructor (Person.greet()).
// Cannot be called on instances of the constructor (alice.greet() will fail).


// 2.
// Instance Method (Person.prototype.greet):

// Defined on the prototype of the constructor function.
// Called on instances of the constructor (alice.greet()).
// Cannot be called directly on the constructor (Person.greet() will fail).


