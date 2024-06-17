
// for of


const arr = [1 , 2 , 3 , 4 , 5];


for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    if(greet == ' '){
        continue;
    }
    //  console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map();
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")
// console.log(map);

for (const [key , value] of map) {
    // console.log(key , ':- ' , value);
}



// we cannot iterate objects like this 
// const myObj = {
//     game1 : "NFS",
//     game2 : "SpiderMan"
// }

// for (const [key , value] of myObj) {
//     console.log(key , ':- ' , value);
// }













/*
The for...of loop in JavaScript is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It provides a simpler syntax compared to traditional for loops when you need to loop over the values of an iterable object.

Here's the basic syntax of the for...of loop:

for (variable of iterable) {
    // code block to be executed
}

variable: On each iteration, this variable will be assigned the value of the current element in the iterable.
iterable: An object that has iterable properties.

*/

// Example 1: Looping Over Array Elements

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
    console.log(fruit);
}
// Output:
// apple
// banana
// orange


// Example 2: Looping Over Characters in a String

const str = 'hello';

for (const char of str) {
    console.log(char);
}
// Output:
// h
// e
// l
// l
// o


// Example 3: Looping Over Map Entries
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

for (const [key, value] of myMap) {
    console.log(key, value);
}
// Output:
// a 1
// b 2
// c 3


// Example 4: Custom Iterable Object
const iterableObj = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const value of iterableObj) {
    console.log(value);
}
// Output:
// 1
// 2
// 3


// Example 5: Using break and continue

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    if (num === 3) {
        continue; // Skip iteration if num is 3
    }
    if (num === 5) {
        break; // Exit the loop if num is 5
    }
    console.log(num);
}
// Output:
// 1
// 2
// 4









