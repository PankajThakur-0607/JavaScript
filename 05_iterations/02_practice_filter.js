// The Array.prototype.filter method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. This is useful for selecting a subset of elements from an array based on specific criteria.

// syntax
// let newArray = arr.filter(callback(element[, index[, array]])[, thisArg]);

// callback: A function to test each element of the array. It takes three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter was called upon.
// thisArg (optional): Value to use as this when executing the callback.

// Example 1: Filtering even numbers

const myArr = [1,2,3,4,5,6,7,8];

let ans = myArr.filter( (arr) => {
    if (arr % 2 == 0){
        return true;
    }
})

// console.log(ans);

// Example 2: Filtering based on object properties

const myobj = [
    {
        name: "Pankaj" ,
        age:21,
    },
    {
        name: "Nirmal" ,
        age:10,
    },
    {
        name: "Monika" ,
        age:19,
    },
    {
        name: "Ujjwal" ,
        age:21,
    },
];


const myPerson = myobj.filter((my) => {
    return my.age < 15;
})

// console.log(myPerson);

// Example 3: Using arrow functions

let myNum = [1, 2, 3, 4, 5, 6];
let evenNumbers = myNum.filter(number => number % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4, 6]


// Additional Tips

// filter does not modify the original array.
// If no elements pass the test, an empty array is returned.
// filter only invokes the callback for indexes of the array that have assigned values; it is not called for missing elements of sparse arrays.


let context = {
    threshold: 20
  };
  
  let numbers = [10, 15, 20, 25, 30];
  let largeNumbers = numbers.filter(function(number) {
    return number > this.threshold;
  }, context);
  
//   console.log(largeNumbers); // Output: [25, 30]

  


/*
  In JavaScript. The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. This method allows you to accumulate values across the elements of the array and can be very powerful for a variety of operations, including summing numbers, flattening arrays, and more. 

Syntax
  arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])


  callback: A function to execute on each element in the array, taking four arguments:
accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue if supplied.
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The array reduce was called upon.
*/

// Example 1: Sum of all numbers in an array

let a = [1,2,3,4,5];
let sum = a.reduce(function(acc , currVal) {
    return acc + currVal;
} , 0);

console.log(sum);

// In this example, the reduce method sums all the numbers in the numbers array. The initial value of the accumulator is 0.

// Example 2: Flattening an array of arrays

let nestedArrays = [[1,2],[3,4],[5,6]];

let flattenedArray = nestedArrays.reduce(function (acc , currVal){
    return acc.concat(currVal);
}, []) 

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Here, the reduce method flattens an array of arrays. The initial value of the accumulator is an empty array [].

// Example 3: Counting occurrences of items


let fruits = ['apple' , 'banana' , 'guava' , 'apple' , 'banana' , 'banana'];

let fruitCount = fruits.reduce(function (acc , currval){
    if(!acc[currval]){
        acc[currval] = 1;
    }else{
        acc[currval]++;
    }
    return acc;
},{})

console.log(fruitCount);


// In this example, reduce is used to count the occurrences of each fruit in the fruits array. The initial value of the accumulator is an empty object {}.

// Key Points
// reduce is useful for accumulating values across an array.
// The initialValue is optional but highly recommended to avoid issues, especially with empty arrays.
// If no initialValue is provided, the first element of the array is used as the initial accumulator value, and the iteration starts from the second element.
// reduce can be used for a wide range of tasks, from summing numbers to more complex data transformations and aggregations.


//  Map 




// The Array.prototype.map method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. It's commonly used for transforming an array by applying a function to each element.

// Syntax
// let newArray = arr.map(callback(currentValue[, index[, array]])[, thisArg])

// callback: A function to execute on each element in the array. It takes three arguments:currentValue: The current element being processed in the array.index (optional): The index of the current element being processed in the array.array (optional): The array map was called upon.thisArg (optional): Value to use as this when executing the callback.


// Example 1: Doubling the values in an arra
const myAns = myMap
.map(function(num) {
    return num + 1;
}).map(function (num){
    return num + 10
})

const myMap = [1,2,3,4,5,6,7,8,9,10]

// const myAns = myMap.map(function(num) {
//     return num + 1;
// })

console.log(myAns);


// Example 2: Extracting property values from an array of objects
let people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 20 },
    { name: 'Jim', age: 30 }
  ];
  
  let names = people.map(function(person) {
    return person.name;
  });
  
  console.log(names); // Output: ['John', 'Jane', 'Jim']


//   Example 3: Using arrow functions
let numbers2 = [1, 2, 3, 4, 5];

let squared = numbers2.map(number => number * number);

console.log(squared); // Output: [1, 4, 9, 16, 25]


// Additional Notes

// map does not modify the original array.
// The callback function is called for each element in the array, in order, and its return value is added to the new array.
// map can be used to perform a transformation on each element of an array, creating a new array with the transformed elements.
// The new array will always have the same length as the original array.
// If the callback function does not return a value for an element, the result in the new array will be undefined for that element.


// Using thisArg

// You can pass an additional argument to map to use as this inside the callback function.

let context1= {
    multiplier: 3
  };
  
  let numbers3 = [1, 2, 3, 4, 5];
  
  let multiplied = numbers3.map(function(number) {
    return number * this.multiplier;
  }, context1);
  
  console.log(multiplied); // Output: [3, 6, 9, 12, 15]

//   In this example, this.multiplier is accessed inside the callback, demonstrating how to use thisArg with map.