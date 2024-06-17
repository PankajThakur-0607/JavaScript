
const array = [1 , 2 , 3 ];

// const  myTotal = array.reduce(function (acc , currVal){
//     console.log(`acc : ${acc} and currval : ${currVal}`);
//     return acc + currVal ;
// } , 0);

// console.log(myTotal);

const myTotal = array.reduce( (acc , currval) => (acc + currval) , 0 );


// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Mobile dev course",
        price : 1999

    },
    {
        itemName : "data Science",
        price : 8999

    },
    {
        itemName : "Web Dev",
        price : 999

    },
];

const priceTopay  = shoppingCart.reduce( (acc , item) => acc + item.price , 0)

// console.log(priceTopay);


const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// console.log([50].reduce(getMax, 10) );// 50

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax)); // 100

// // callback is not invoked
// console.log([50].reduce(getMax)); // 50
// console.log([].reduce(getMax, 1)); // 1

// console.log([].reduce(getMax)); // TypeError



const pipe =
(...functions) => (initialValue)=>
functions.reduce((acc, fn) => fn(acc), initialValue);//   

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
// console.log(multiply6(6));// 36
// console.log(multiply9(9));//// 81
// console.log(multiply16(16)); // 256

function addtwo(a , b) {
    return a + b ;
}


const ans = [1 , 2 , 3 , 5].reduce(addtwo , 3);
console.log(ans);

const ans2 = [1,2,3,5].reduce( (acc , val) => (acc + val));
console.log(ans2);






//  const myArr = [1,2,3];
//  const myArr2 = [1,2,3, 4];

//  const myTotal2 =  [...myArr , ...myArr2];
//  console.log(myTotal2);
