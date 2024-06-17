
let a = 50;

if(true){
    let a = 10;
    // console.log("Inner block a is :" , a);
    const b = 20;
    var c = 30;   // 'var' is avoided because it is always globally availabe. which makes it hard to code outside of scope 
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Pankaj"

    function two(){
        const website = "linkedIn";
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

// if(true){
//     const username = "pankaj"
//     if(username == "pankaj"){
//         const website = "  linkedIn";
//         console.log(username + website);
//     }

//     // console.log(website);
// }

// console.log(username);




// ******************** interesting ****************

// in normal function we can use addone without first initialising 
console.log(addone(5));
function addone(num){
    return num + 1;
}


addTwo()   // this is called hosting we cannot call before initialising 
const addTwo = function(num){
    return num + 2;
}

