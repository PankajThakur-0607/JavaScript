
// Functions 



function myName(){
    console.log("P");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("J");
}

// myName - refrence 
//    myName()  // it is execution of function 


//******************************************************

                    // parameters 
// function addTwoNumbers(num1 , num2){
//     // return num1+num2;  
//     console.log(num1 + num2);
// }

// addTwoNumbers(3 , 4);
//             // arguments 
// addTwoNumbers(3 , null) 
// addTwoNumbers(3 , 'a')  // it will print only three we have to tell him to identify the datatype using if else  learn soon in next classes...


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers(num1 , num2){
    return num1+num2;  
}

const result = addTwoNumbers(3,5);
// console.log(`Result is : ${result}`);  // 1st method to print and mostly used one
// console.log("Result is :" , result);  // 2nd method 


function loginUserMessage(username = "sam"){
    // if(!userName)  or
    if(username === undefined){
        console.log("plzz enter a userName");
        return;
    }
    return `Welcome to future ${username}`;
}

// console.log(loginUserMessage("pankaj Thakur"));
// console.log(loginUserMessage("Madamji"));


function calculateCartPrice(val1 , val2 , ...num1){
    return  num1
}
// console.log(calculateCartPrice(200 , 400 , 500,100,3154,245,546));


const user = {
    username : "Pankaj",
    age : 19  // if i use ages the it will undefined so we have to use if else to check Type safety and check objects has this value or not
}

function handledObject(anyObject){  
    console.log(`username is ${anyObject.username} and age is : ${anyObject.age} and price is ${anyObject.price}`);
}

// handledObject(user)  

handledObject({
    username: "Pankaj",
    age : 21,
    price : 200
});


const myNewArray = [200 , 300 , 400 , 500];

function  returnSecondValue (getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));