const name = "Pankaj";
const  repoCount = 84;

// console.log(name + repoCount + " value");

// new way to print String
// console.log(`My name is ${name} , And i am Anime Lover with watched almost ${repoCount} animes`);


const gameName = new String("Pankaj-Thakur-014-Monika-215-helloji")
// console.log(gameName[0]);
// console.log(gameName.indexOf('k'))
// console.log(gameName.charAt(2))
// console.log(gameName.substring(0 , 6));

// console.log(gameName.slice(-8 , 5));

// const newName = "   pankaj  ";
// console.log(newName);
// console.log(newName.trim());

// const url = "pankajothakur%291@gmail.com";
// console.log(url.replace('%291' , '-'));


// console.log(gameName.split('-'));



// Methods of Strings 

const  h1 = "Pankaj";
const  j1 = "thakur";
console.log(h1[2]);

// const a = "b";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// console.log(h1.toUpperCase());


// const  s1 = "2 + 2";
// const s2 = new String("2+2");

// console.log(eval(s1)); // return the numebr 4
// console.log(eval(s2)); // returns the String "2 + 2"
// console.log(eval(s2.valueOf())); // returns the number 4


// console.log(h1.charCodeAt(4));

// const str1 = "☃★♲";
// console.log(str1.charCodeAt(1));
// console.log(str1.codePointAt(1));


// const str = "😊"; // A string containing a single emoji (Unicode character)

// // Using charCodeAt():
// const firstUnit = str.charCodeAt(0); // First code unit of the surrogate pair
// const secondUnit = str.charCodeAt(1); // Second code unit of the surrogate pair

// console.log(str.codePointAt(0));
// // Combine the UTF-16 code units to get the full Unicode code point
// const fullCodePoint = (firstUnit - 0xD800) * 0x400 + (secondUnit - 0xDC00) + 0x10000;

// console.log(fullCodePoint); // Outputs: 128522





// const str = "yashYadav";
// const str2 = " kumar";

// console.log(str +  str2);

const str3 = "Cats are the best animals!";
console.log(str3.endsWith("animals!"));

// console.log(str3.includes("C"));
// const word = "cats";
// console.log(
//     `the word "${word}"  ${str3.includes(word) ? "is" : "is not"} in the sentence` ,
// );

// console.log(str3.indexOf('t'));

// console.log(str3.indexOf('a' , 12));



// is WellFormed function

// const strings = [
//     // Lone leading surrogate
//     "ab\uD800",
//     "ab\uD800c",
//     // Lone trailing surrogate
//     "\uDFFFab",
//     "c\uDFFFab",
//     // Well-formed
//     "abc",
//     "ab\uD83D\uDE04c",
    
//   ];
  
//   for (const str of strings) {
//     console.log(str.isWellFormed());
//   }


//     console.log(str3.length);
//   console.log(str3.lastIndexOf('a' , ));
//   console.log(str3.indexOf('a'));
 


//   const result = "apple".localeCompare("banana");
//   console.log(result); // Output will depend on the locale settings of the environment
  



//   // The letter "a" is before "c" yielding a negative value
//     console.log("a".localeCompare("c") );// -2 or -1 (or some other negative value)

// // Alphabetically the word "check" comes after "against" yielding a positive value
// console.log("check".localeCompare("against") );// 2 or 1 (or some other positive value)

// // "a" and "a" are equivalent yielding a neutral value of zero
// console.log("a".localeCompare("a")); // 0




// const a = 'réservé'; // With accents, lowercase
// const b = 'RESERVE'; // No accents, uppercase

// console.log(a.localeCompare(b));
// // Expected output: 1
// console.log(a.localeCompare(b, 'en', { sensitivity :"base"}));
// // Expected output: 0


// const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];

// items.sort((a , b) => a.localeCompare(b , "fr" , {ignorePunctuation : true}));

// console.log(items);

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

// console.log(`${name1}, ${name2}`);
// // Expected output: "Amélie, Amélie"
// console.log(name1 === name2);
// // Expected output: false
// console.log(name1.length === name2.length);
// Expected output: false



