
// Objects and its methods


// 1. Direct Assignment
// This is the simplest and most common way to add or change a property on an object.

// Syntax - ( object.propertyName = value;)

let person = {};
person.name = 'Alice'; // Adds a property 'name' with the value 'Alice'
// console.log(person.name); // Outputs: Alice





// 2. Object.defineProperty()
// This method allows you to define a property with more control over its characteristics.

// Syntax 
//  Object.defineProperty(object, propertyName,     descriptor);


const obj = {
    a : 1,
    b : 2
}

Object.defineProperty(obj , 'c' ,{
    value : 'great',
    enumerable : true,
    configurable : false,
    writable : true,
});

// console.log(obj);
// obj.c = "leader";
// console.log(obj);




// 3. Object.defineProperties()
// This method allows you to define multiple properties on an object at once, with control over each property’s characteristics.


// Syntax 

// Object.defineProperties(object, {
//     property1: descriptor1,
//     property2: descriptor2,
//     // More properties...
//   });
  

let children = {};

Object.defineProperties(children , {
    name : {
        value : 'pankaj' ,
        writable : true ,
        enumerable : true ,
        configurable : true
    },
    age : {
        value : 15,
        enumerable : true ,
        configurable : true ,
        writable : true,
    },
    education : {
        value : "UnderGraduation",
        enumerable : true,
        writable: true,
        configurable : true,

    }
})


// console.log(children);
// children.education = "PostGraduate" ;
// console.log(children);


// Steps to Modify or Change an Object Key

// 1. Delete the Existing Property: If you need to change the property key, you have to delete the old property first.

//  2. Add a New Property: Define a new property with the desired key and value.

// Example
// Initial Object Creation with Object.defineProperty()

let user = {}

Object.defineProperty(user , 'name' , {
    value: 'Alice',    
    writable: true,    
    enumerable: true,    
    configurable: true // Allows reconfiguration or deletion
});

// console.log(user.name);

// Step 1: Delete the existing property
delete person.name;

// Verify that the property is deleted
// console.log(person.name); // Outputs: undefined

// Step 2: Add a new property with the desired key
Object.defineProperty(person, 'fullName', {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
});

// console.log(person.fullName); // Outputs: Alice



// In JavaScript, you cannot directly rename a property key in an object. You must create a new property with the desired key and then remove the old property. There is no built-in method to rename a property directly.

// However, you can encapsulate this process in a function to make it more convenient. Here’s how you can do it:

// Encapsulated Function to Rename a Property
// You can create a function that takes an object, the old key, and the new key as arguments, and performs the renaming by copying the value to the new key and then deleting the old key.



function renameProperty(obj , oldKey , newKey){
    if(oldKey in obj){
        // Copy the value to the new key
        obj[newKey] = obj[oldKey];
        // Delete the old key
        delete obj[oldKey];
    }
}

let human = {
    name: "JavaScript",
    age: 56
};

console.log(human);  // Outputs: { name: 'Alice', age: 30 }


// Rename the 'name' property to 'fullName'

renameProperty(human , 'name' , 'fullName');

console.log(human);












// 4. Object.create()
// This method creates a new object with a specified prototype and properties.

// Syntax 
// Object.create(prototype, properties);
        //    OR
// Object.create(proto, [propertiesObject]);



// Example 1: Creating an Object with a Prototype
// Let's start with a basic example where we create an object with a specified prototype.

let personProto = {
    greet : function(){
        console.log(`Hello , My name is ${this.name}`)
    }
};


                // OR 

// let personProto = {
//     greet: function(name) {
//         if (name) {
//             console.log(`Hello, my name is ${name}`);
//         } else {
//             console.log(`Hello, my name is ${this.name}`);
//         }
//     }
// };

let person1 = Object.create(personProto);
person1.name = 'Alice';

// person1.greet();

// Example 2: Creating an Object with Properties
// You can also specify properties with descriptors when creating the object.

let myPerson = Object.create(Object.prototype , {
    name: {
        value: 'Bob',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

// let myName = Object.create(myPerson);
// console.log(myName.name);

// console.log(person.name); // Outputs: Bob
// console.log(person.age);  // Outputs: 30


// In this example, the person object is created with Object.prototype as its prototype, and it has properties name and age defined with specific descriptors.



// Example 3: Combining Prototype and Properties

// You can combine both prototype inheritance and property definition in one step.

let mypersonProto = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let person2 = Object.create(personProto, {
    name: {
        value: 'Charlie',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 25,
        writable: true,
        enumerable: true,
        configurable: true
    }
});


// console.log(person2.name); // Outputs: Charlie
// console.log(person2.age);  // Outputs: 25
// person2.greet();           // Outputs: Hello, my name is Charlie
