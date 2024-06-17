

const userEmail = [];

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}


// falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined ,NaNz


//truthy values 

// "0" , 'false' , " " , [] , {} , function(){}


if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator(??) : null undefined

// its is used when fetcing dataBase function
let val1 ;
// val1 = null ?? 15;
val1 = undefined ?? 18;
// val1 = null ?? 10 ?? 20 

console.log(val1);

// terniary operator
// syntak 
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;

