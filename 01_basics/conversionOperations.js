/* let score = "33abc"
console.log(typeof score);

let valueInnumber = Number(score);
console.log(typeof valueInnumber);
console.log( valueInnumber); //NaN // JavaScript parses numbers from strings only when the entire string can be interpreted as a valid number.
// In JavaScript, NaN is still considered a number (it’s a special numeric value representing “Not a Number”).
let score2 = "34343"
let newNumber = Number (score2);
console.log (newNumber); // 34343 // Now it is parsed succesfully.

//Conversion of null = 0;
// Conversion of undefined = NaN;
// 1=> Trure; 0=> False
// ""=> False
// "abc" => true
*/
// ********************Operations***************************

// let value = 69
// let negValue = -value
// // console.log(negValue);

// console.log("1"+2+2);
// console.log(1+2 +"2");

// If string is at the first place, js treats everything as a string.
// If number is at the first place, js will do the operation and then attach the string.

let counter = 100;
counter ++ //Postfix OP: Value increment after the usage
++counter //Prefix OP: Value increment before the usage
console.log(counter);
