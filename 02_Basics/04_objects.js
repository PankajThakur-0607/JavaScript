const omegle = new Object()

// const omegle = {}
// console.log(omegle);

omegle.id = "123abs"
omegle.name = "Panky"
omegle.isLoggedIn = false;

// console.log(omegle);


const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userFullName: {
            firstname : "Pankja",
            lastName : "Thakur"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);


const obj1 = { 1: "A" , 2 : "B"}
const obj2 = { 3: "A" , 4 : "B"}
const obj4 = { 5: "A" , 6 : "B"}

// method 1 to combine all onjects 
// its not so good to use
// const ob3 = {ob1 , ob2};


// another method  which is more useful 
// {} - it is target     {obj1 , obj2 , ob3 } -- it is source
// const obj3 = Object.assign({} , obj1 , obj2 , obj4);


// 3rd method and most used method just like arrays Spread of glass 

const obj3 = {...obj1 ,...obj2,...obj4};
// console.log(obj3);


// we have to use this when manipulating databases

const users = [
    {
        id: 1,
        email : "p@gmail.com"
    },
    {
        id: 2,
        email : "q@gmail.com"
    },
    {
        id: 3,
        email : "r@gmail.com"
    },
]

console.log(users);

// console.log(omegle); 


// it accesses the Keys() of omegle in the form of Arrays it is very useful fin making Websites we can use for loop to access the Keys() :

// console.log(Object.keys(omegle));

// console.log(Object.values(omegle));    // access Values

// console.log(Object.entries(omegle));  // make each key value pair in arrays 

// console.log(omegle.hasOwnProperty('isLoggedIn '));




// Destructure 

const course = {
    courseName : "Sigma Male",
    courseInstructor : "pankaj" ,
    price : "1999",
    validity : "1 - year"
}

// method 1      // it is too long to write again and again 
// console.log(course.courseInstructor);


// method 2 
const {courseInstructor : ins} =  course

// console.log(courseInstructor);

console.log(ins);


// Json  - API

// {
//     "name" :"Pankaj",
//     "price": "free",
//     "courseName" : "js in hindi"
// }


[
    {},
    {},
    {}
]



