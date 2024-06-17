const coding = ["js" , "ruby" , "java" , "pyhton" , "cpp"]


// high order array loop 
// we used call back funtion which is same as function but dont need name   like in this


// 1st method
// coding.forEach( function(item) {
//     console.log(item);
// } )

// 2nd method
// coding.forEach((item) =>  {
//     console.log(item);
// })

//3rd method
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})




// The forEach method in JavaScript is used to execute a provided function once for each array element. It is a simple way to iterate over elements in an array, performing an operation on each element without returning a new array.

// arr.forEach(callback(currentValue[, index[, array]])[, thisArg])


// callback: A function to execute on each element. It takes three arguments:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array forEach was called upon.
// thisArg (optional): Value to use as this when executing the callback.

// Example 1: Basic iteration

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
// Output: 1
//         2
//         3
//         4
//         5

 



// Example 2: Using the index parameter

let myNewNum = [1, 2, 3, 4, 5];

myNewNum.forEach(function(number, index) {
  console.log(`Index ${index}: ${number}`);
});
// Output: Index 0: 1
//         Index 1: 2
//         Index 2: 3
//         Index 3: 4
//         Index 4: 5



// Example 3: Using arrow functions

let myArray = [1, 2, 3, 4, 5];

myArray.forEach(number => console.log(number));
// Output: 1
//         2
//         3
//         4
//         5


// Additional Notes

// forEach does not mutate the array on which it is called (although the callback function can).
// There is no way to terminate or break out of the forEach loop other than by throwing an exception. If you need such behavior, consider using a plain for loop or Array.prototype.some, Array.prototype.every, Array.prototype.find, or Array.prototype.findIndex.
// The forEach method is generally used for cases where you want to perform a side effect (like logging or updating a variable) for each element in an array.


// Using thisArg
// You can pass an additional argument to forEach to use as this inside the callback function

let context = {
    prefix: 'Number:'
  };
  
  let myNumbers = [1, 2, 3, 4, 5];
  
  myNumbers.forEach(function(number) {
    console.log(this.prefix, number);
  }, context);
  // Output: Number: 1
  //         Number: 2
  //         Number: 3
  //         Number: 4
  //         Number: 5
  
//   In this example, this.prefix is accessed inside the callback, demonstrating how to use thisArg with forEach.