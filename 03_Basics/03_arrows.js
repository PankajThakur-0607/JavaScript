const user = {
    username : "pankaj",
    age : 1999 ,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// console.log(this);

// user.welcomeMessage();

// user.username = "Mini";
// user.welcomeMessage()
 

function chai() {
    let username = "Panku"
    console.log(this.username);
}

// chai()   // we can use "this" in object only to access values

// method 2 to declare function 
// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

    // using arrow Function 
// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }



// implicit  return 

// const addTwo = (num1 , num2) => num1 + num2;

const addTwo = (num1 , num2) => (num1 + num2);

// console.log(addTwo(3 , 5));

//  ****************************************

// how to return object use parenthesis after curly braces
// const addTwo = (num1 , num2) => ({user: "hitesh"});


// console.log(addTwo(3 , 4));



// "use strict";

// const obj = {
//   i: 10,
//   b: () => console.log(this.i, this),
//   c () {
//     console.log(this.i, this);
//   },
// };

// obj.b(); // logs undefined, Window { /* … */ } (or the global object)
// obj.c(); // logs 10, Object { /* … */ }




// Arrow Function VS  Normal Funciton 


//  1. No arguments object in arrow functions

// A normal function has an arguments object which you can access in the function: The arguments object is a local variable that contains the arguments passed to the function when called
function print() {
  console.log(arguments)
}

// print("hello", 400, false)

        // VS

const print1 = () => {
  console.log(arguments);
}

// print1("hello" , 500 ,  false ) //Now we have a reference error: arguments is not defined. That's because the arguments variable does not exist in arrow functions.



// 2. Arrow functions do not create their own this binding

const obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    console.log(this)
  }
}

// obj.print()

const obj1 = {
  name: 'deeecode',
  age: 200,
  print: function() {
    function print2() {
      console.log(this)
    }
    
    print2()
  }
}

// obj1.print()

// ************   VS   ***********

const obj3 = {
  name: 'deeecode',
  age: 200,
  print: function() {
    const print2 = () => {
      console.log(this)
    }
    
    print2()
  }
}

// obj3.print()




// 3. Arrow functions cannot be declared

// function() {
//   console.log("hello")
//  }



 // Traditional Function
function bob(a) {
  return a + 100;
}


// Arrow Function
const bob2 = (a) => a + 100;

console.log(bob(100));
console.log(bob2(100));
