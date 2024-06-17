
// Immediate Invoked Function Expression (IIFE)

(function chai(){
    // named  IIFE    // it contains "chai" as a name 
    console.log("Db CONNECTED");
})();    // semicolon is a must ai (IIFE) dont know where to stop so we use semicolon 


((name) => {
    // unnamed IIFE with parameters 
    console.log(`DB Connected ${name}`)
})("Pankaj");






