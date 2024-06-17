

// const myArr = [1,2,3,4,5,6,7];




// // for(let i = 0; i < myArr.length ; i++){
// //     const elm = myArr[i];
// //     console.log(`element is : ${elm}`);
// // }


// // myArr.push(8);
// // for(let i = 0; i < myArr.length ; i++){
// //     const elm = myArr[i];
// //     console.log(`element is : ${elm}`);
// // }

// // myArr.shift();

// // for(let i = 0; i < myArr.length ; i++){
// //     const elm = myArr[i];
// //     console.log(`element is : ${elm}`);
// // }


// // myArr.unshift(0);

// // for(let i = 0; i < myArr.length ; i++){
// //     const elm = myArr[i];
// //     console.log(`element is : ${elm}`);
// // }


// const myObj = [ 
//     {
//         animeName : "Haikyuu" , 
//         Imdb_rate : 8.1
//     },
//     {
//         animeName : "Naruto" , 
//         Imdb_rate : 9.9
//     },
//     {
//         animeName : "Solo Leveling" , 
//         Imdb_rate :  9
//     },
//     {
//         animeName : "JJK" , 
//         Imdb_rate :  9.5
//     },
// ]

// //         // Normal For Loop 
// // for(let i = 0; i < myObj.length ; i++){
// //     console.log(myObj[i])
// // }


// // // ForEach  Loop
// //     myObj.forEach( (item , index) => {
// //         console.log(`AnimeName  at Index ${index} is ${item.animeName} and Imdb Rate is ${item.Imdb_rate}`);
// //     })

// // For Each loop (value , index , arr)
// // myArr.forEach( function(currVal , index , arr) {
// //     console.log(`index = ${index} and  value = ${currVal} and array = ${arr}`)
// // });





// // Objects and functions 


// // method 1 to Declare and initialise 
// const user = new Object();
// user.firstName = "Pankaj Thakur";

// // console.log(user);

// // method 2 

// const player = {
//     name: "Sword Art Online" ,
//     Mode : "GunShooting",

//     calcDegree : function(fahrenheit){
//         return (5/9) * (fahrenheit-32);
//     }
// }

// // console.log(player);

// // console.log(player.calcDegree(32))








// // Arrays 

// const num = [1,2,3];
// const num2  = [8,7,6];


//     // concat method() 
//     // const num3 = num.concat(num2);
//     // console.log(num3);
//     // console.log(typeof num3);


//     // string method()
//     // let num4 = num.toString();
//     // console.log(num4);

//     // At method
//     // console.log(num.at(2));


//     const newArr =  [1,2,[31,[8,9,10],12,46,[12,69]]]
//     //    flat method()

// //    console.log(newArr.flat(Infinity));

//    // entires,method()

// const fruits = [ "bananna" ,"guava ", "chilli" , "strawberry"];
// const  fruits2 = fruits.entries();

// for (const iterator of fruits2) {
//     console.log(iterator);
// }



// console.log(Array.from("Pankaj"));

// console.log(Array.isArray(["p"]));


// let score = "100";
// let score2= 200;
// let score3 = 300;

// let newArr2 = Array.of(score , score2 , score2);
// console.log( typeof newArr2);






// // Functions 

function addTwoNumbers(num1 , num2) {
    return num1 + num2;
};

const sum =  (num1 , num2) =>  (num1 + num2);    // implicit function 

// console.log(addTwoNumbers(2 , 6 ));
// console.log(sum(1 , 2));



//  // IIFE  

// (function chai(val) {
//     console.log("DB connected");
// })("Error Not found");


// ((name) => {
//     console.log("It is still Connected");
// })("Pankaj");


// // let menu = 3;
// switch (menu) {
//     case 1 :
//         console.log("Samosa");
//         break;
//     case 2 :
//         console.log("Vada Pav");
//         break;
//     case 3 :
//         console.log("Kachori");
//         break;
//     case 4 :
//         console.log("Biryani");
//         break;

//     default:
//         console.log("Not Available");
//         break;
// }

const userEmail = [];
if(userEmail.length === 0){
    // console.log("Array is empty");
}

const emptyObj  = {};

if(Object.keys(emptyObj).length == 0){
    // console.log("Array is empty");
}



// For Of Loop

// 

const myArr = ["Flash" , "Hanuman" , "KingKong" , "Shaktiman"]

for (const key of myArr) {
    // console.log(key);
}

const posts = {
    id : "Pankaj",
    title : "post title",
    body : "One for all"
}


for (const [key , value] in posts) {
    console.log()
}


