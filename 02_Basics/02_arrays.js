const marvel_heroes = ["thor" , "IronMan" , "SpiderMan"];
const dc  = ["SuperMan" , "flash" , "batman"];
const myHeroes = ["Ram" , "Krishna" , "Hanuman" , "Shiv" , "Jagannath"];

// push method add the String or array as it is
 marvel_heroes.push(dc);
 console.log(marvel_heroes);

// Concates add the two or more strings 

// const  allHeroes = marvel_heroes.concat(dc).concat(myHeroes);
// console.log(allHeroes);



// Another easy and most popular method is 
// example   think like a glass 
const all_Heroes = [...marvel_heroes , ...myHeroes,...dc];
// console.log(all_Heroes);

const mynewArr = [1 , 2 ,[2,4,6] , [4 , 5 , 6], [1 , 2 ], [4 , 9 ]];
const newReal_arr = mynewArr.flat(Infinity);
// console.log(newReal_arr);

// console.log(Array.isArray("Pnakja thkaur"))

console.log(Array.from("Pankaj thakur"));

// console.log(Array.from({name : "Pankaj"}));

let score1 = 100;
let score2 = 500;
let score3 = 300;
// console.log(Array.of(score1 , score2 , score3));
const years = [100 , 200 , 300];
// console.log(years["2"] !== years["02"]);





