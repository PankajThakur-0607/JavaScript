
const myObj = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : "Swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const arr = [0,1,2,3,4,5];  

for (const key in arr) {
    // console.log(arr[key]);
}


const map = new Map();
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")
// console.log(map);

for (const key in  map) {
    // console.log(key);
}






/*
The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It iterates over all enumerable properties, including those inherited from the prototype chain. However, it's not recommended to use for...in loop for iterating over arrays, as it may not iterate over array elements in numeric order and can include properties inherited from the array's prototype.

Here's the basic syntax of the for...in loop:

for (variable in object) {
    // code block to be executed
}

variable: On each iteration, this variable will be assigned the name of the property.
object: The object whose enumerable properties will be iterated over.*/


// Example 1: Iterating Over Object Properties

const person = {
    name : "Pankaj",
    age : 30, 
    city : 'Ney Work'
};


for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York



// Example 2: Iterating Over Array Indices (Not Recommended)

const numbers = [1, 2, 3];

for (const index in numbers) {
    console.log(index); // Output: 0, 1, 2
}

// Example 3: Including Inherited Properties

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.city = 'New York';

const john = new Person('John', 30);

for (const prop in john) {
    console.log(`${prop}: ${john[prop]}`);
}
// Output:
// name: John
// age: 30
// city: New York


// Example 4: Skipping Inherited Properties

for (const prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(`${prop}: ${john[prop]}`);
    }
}
// Output:
// name: John
// age: 30
