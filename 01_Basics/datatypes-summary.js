    // Primitive Datatypes

    // 7 Types :-- > String , Number , Boolean , null , undefined , symbol , BigInt

    const score = 100 ;
    const scoreValue = 100.3;

    const isLoggedIn = false;
    const outSideTemp = null;

    let email; // let email = undefined   // Both are correct 

    const id = Symbol('123');
    const anotherId = Symbol('123');

    // console.log(id == anotherId);


    // const bigNumber = 3469795435321234748655454n ;


    // Non primitive(Reference ) data Types

    // Array , Objects , Functions


    const heros = ["shaktiman" , "neeraj" , "doga"];

  let myObj =   {
        name : "pankaj",
        age: 22,
    }

     const myFunction = function(){
        console.log("Hello Pankaj");
     }

    //  console.log(typeof scoreValue);

     

     // ++++++++++++++++++++++++++++++++++++++++++++++++++++++

     // Stack (Primitive)  , Heap(Non - Primitive)

    let myName = "pankajThakur";
    let anotherName = myName;
        anotherName = "Monika Singh";
    console.log(myName);
    console.log(anotherName);

    let userOne = {
        email : "Pankaj@123",
        upi : "phonePay@ybl",
    }

    let userTwo = userOne;

    userTwo.email = "Pankajothkaur1234";

    console.log(userOne.email);
    console.log(userTwo.email);