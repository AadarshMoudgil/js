/* ----------------------
   Type Conversion Examples
---------------------- */
/*
let score = "33abc";
console.log(typeof score);

let valueInnumber = Number(score);
console.log(typeof valueInnumber);
console.log(valueInnumber); 
// NaN: JavaScript parses numbers from strings only when the entire string can be interpreted as a valid number.
// In JavaScript, NaN is still considered a number (special numeric value representing "Not a Number").

let score2 = "34343";
let newNumber = Number(score2);
console.log(newNumber); 
// 34343: Successfully parsed string to number

// Conversion rules:
// null   => 0
// undefined => NaN
// 1      => true, 0 => false
// ""     => false
// "abc"  => true
*/

/* ----------------------
   Operations Examples
---------------------- */
/*
let value = 69;
let negValue = -value;
// console.log(negValue);

console.log("1"+2+2);  // "122"
console.log(1+2+"2");  // "32"
// Explanation:
// If a string is at the first place, JS treats everything as a string.
// If a number is at the first place, JS does the numeric operations first and then concatenates the string.
*/

/* ----------------------
   Increment Operators
---------------------- */
let counter = 100;

counter++;   // Postfix OP: Value increment after usage
++counter;   // Prefix OP: Value increment before usage

console.log(counter); // 102
