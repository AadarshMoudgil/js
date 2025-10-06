// -----------------------------
// Understanding IIFE (Immediately Invoked Function Expression)
// -----------------------------

// A simple normal function
function notiife() {
    console.log(`I am Batman`);
}
notiife(); // This ; plays a big role. Before using an IIFE, we need to stop the previous function call like this.
//This is a named iife
// Why the semicolon (;) is important here?
// --------------------------------------------------
// In JavaScript, semicolons mark the *end* of a statement. 
// If we don’t put a semicolon before an IIFE, and the previous line doesn’t end properly,
// JavaScript might try to treat the IIFE as part of the previous statement.
// This leads to unexpected errors like “TypeError: ... is not a function”.

// For example, this will break:
// function notiife() { console.log('I am Batman'); }
// notiife() // <-- missing semicolon here!
// (function iife() { console.log('I am Bruce Wayne'); })(); // ❌ Error: notiife is not a function

// The interpreter thinks you're trying to call `notiife(...)` with `(function iife(){...})()` as arguments.
// That’s why we always terminate the previous function call with a semicolon (;)
// before starting a new IIFE.

// -----------------------------
// Converting a normal function to an IIFE
// -----------------------------
// This is a simple function. To make it IIFE, we need to wrap it in ()

(function iife() {
    console.log(`I am Bruce Wayne`);
})(); // <-- the parentheses at the end invoke it immediately

// -----------------------------
// IIFE with Arrow Function
// -----------------------------

// We can do the same with an arrow function too.

(iife2 = () => {
    console.log(`I am me`);
})();

// Again, we used ; before starting this arrow function.

// -----------------------------
// Arrow function with a parameter
// -----------------------------

((name) => {
    console.log(`My name is : ${name}`)
})("Kakashi Sensei");
//this is unnamed iife.
// -----------------------------
// More Examples and Deep Dive
// -----------------------------

// 1️⃣ IIFE that returns a value
const message = (function () {
    return "This is a returned message from an IIFE!";
})();
console.log(message); // Output: This is a returned message from an IIFE!

// 2️⃣ IIFE with arrow function returning an object
const user = (() => {
    const name = "Tony Stark";
    const role = "Iron Man";
    return { name, role };
})();
console.log(user); // Output: { name: 'Tony Stark', role: 'Iron Man' }

// 3️⃣ IIFE with parameters
(function greet(person) {
    console.log(`Hello, ${person}!`);
})("Naruto Uzumaki");

// 4️⃣ IIFE for scoping (useful in older JavaScript before block scoping existed)
(function () {
    var secret = "Hidden from global scope";
    console.log("Inside IIFE:", secret);
})();
console.log(typeof secret); // Output: undefined (because 'secret' is scoped inside IIFE)

// 5️⃣ Arrow function IIFE with default parameters
((hero = "Spider-Man") => {
    console.log(`Your friendly neighborhood ${hero}`);
})();

// 6️⃣ IIFE used for initialization logic
const app = (() => {
    const config = {
        apiKey: "12345",
        version: "1.0"
    };
    console.log("App initialized with config:", config);
    return config;
})();

// -----------------------------
// 🔍 Summary
// -----------------------------
/*
✅ IIFE stands for Immediately Invoked Function Expression.
✅ It’s executed right after it’s defined — no need to call it separately.
✅ It helps create a private scope, avoiding global variable pollution.
✅ Use parentheses () around the function to convert it from a declaration to an expression.
✅ Always use a semicolon (;) before starting an IIFE if the previous line is another statement.
   - It ensures JavaScript doesn’t treat your IIFE as part of the previous statement.
✅ Works with both regular and arrow functions.
*/

// -----------------------------
// BONUS: Common mistake example
// -----------------------------
function sayHi() {
    console.log("Hi there!");
}
sayHi() // Missing semicolon ❌

// JS thinks we are calling sayHi with the next function as an argument
(function() {
    console.log("Oops, this won’t run properly!");
})(); // This will throw an error!

// Correct version ✅
sayHi();
(function() {
    console.log("Now this works fine!");
})();
