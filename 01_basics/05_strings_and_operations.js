/* ----------------------
   Basic Template Literals
---------------------- */
const name = "Eddy";
const repoCount = 69;

console.log(`My name is ${name} and my repocount is ${repoCount}`);

/* ----------------------
   String Objects vs Primitives
---------------------- */
/*
Strings can be created using the String constructor.
This creates a String object instead of a primitive string.
*/
const name2 = new String('SmoothOperator'); 
console.log(name2);               // Logs the String object
console.log(typeof(name2));       // "object"

/* ----------------------
   Comparison Between String Primitive and String Object
---------------------- */
const str1 = 'SmoothOperator';          // Primitive string
const str2 = new String('SmoothOperator'); // String object

console.log(str1 == str2);   // true  (== does type coercion)
console.log(str1 === str2);  // false (=== checks type and value)
