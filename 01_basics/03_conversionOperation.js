
/////////////.   1. Number Conversion.     /////////////////////

let score = "33";

console.log(typeof score);
console.log(typeof (score));

let convertToNumber = Number(score);
console.log(typeof convertToNumber);
console.log(convertToNumber);

// **** tyoeof after Conversion to Number ****
// "33" - 33
// 33abc - NaN
// true - 1, false - 0
// null - 0
// undefined - NaN


/////////////.   2. Boolean Conversion.     /////////////////////

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// **** tyoeof after Conversion to Boolean ****
// 1 - true, 0 - false
// "" - false
// "Himanshu" - true


/////////////.   3. String Conversion.     /////////////////////

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);