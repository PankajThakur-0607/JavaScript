const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
// });

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums =  myNums.filter((num) => {
//         return num > 4;  // we have to use "return" when using curly braces 
// });

// // while writing parenthesis its allowed not to use "return" 
// const newNums2 =  myNums.filter((num) =>        (num > 4));



const newNums3 = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums3.push(num);
    }
})


// console.log(newNums);
// console.log(newNums2);

// console.log(newNums3);


const bookStore = [
    {
        title : "books one" , genre : "History" , publish : "1945" , edition : "2003"
    },
    {
        title : "books two" , genre : "non-fiction" , publish : "1985" , edition : "2013"
    },
    {
        title : "books three" , genre : "sci-fi" , publish : "1945" , edition : "2000"
    },
    {
        title : "books four" , genre : "sci-fi" , publish : "2005" , edition : "2014"
    },
    {
        title : "books five" , genre : "adventerous" , publish : "1995" , edition : "2003"
    },
    {
        title : "books six" , genre : "History" , publish : "1975" , edition : "2008"
    },
    {
        title : "books seven" , genre : "sci-fi" , publish : "1988" , edition : "2015"
    }
];


let userBook = bookStore.filter( (bk) => {
    return bk.genre === "sci-fi" && bk.edition > 2008
})

console.log(userBook);




