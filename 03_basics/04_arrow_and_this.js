const user = {
    username: "Mark Ruffalo",
    Height: 5,
    Ability: "I Can Turn Green",
    
    message: function msg() {
        /*
        This is a regular function defined as a method of the 'user' object. 
        In regular functions:
          - `this` depends on how the function is called.
          - Since this function is called as `user.message()`, `this` points to `user`.
        
        Example: 
          console.log(this.username); // "Mark Ruffalo"
        */
        console.log(`Hello, My name is ${this.username}, and my ability is ${this.Ability}`);
    }
};

// Update user properties
user.username = "Batman";
user.Ability = "I am rich";

// Call the method
user.message(); 
// Output: Hello, My name is Batman, and my ability is I am rich

// --------------------------------------------------
// Regular standalone function
function notArrow() {
    /*
    This is a regular standalone function, not attached to any object.
    - When called like `notArrow()`, `this` is:
        -> undefined in strict mode (Node.js default)
        -> the global object in non-strict mode (e.g., `window` in browsers)
    - You cannot access `this.username` here, because `this` is not the `user` object.
    */
    console.log(this);
}
// notArrow(); // In Node.js -> {}, in browser -> window

// --------------------------------------------------
// Arrow function example
const arrow = () => {
    /*
    Arrow functions do NOT have their own `this`.
    - They inherit `this` from their lexical scope (the scope where they were defined).
    - Here, since we’re in the top-level scope:
        -> In Node.js, `this` is an empty object {}.
        -> In browsers, `this` is the `window` object.
    */
    console.log(this);
};
// arrow(); // Node.js -> {}, Browser -> window

// --------------------------------------------------
// Arrow function inside another function
function outer() {
    const arrowInside = () => {
        /*
        This arrow function is defined inside the regular function `outer`.
        - Arrow functions inherit `this` from their enclosing scope.
        - `outer()` is called as a regular function, so `this` inside `outer` is:
            -> {} in Node.js (strict mode)
            -> window in browsers (non-strict)
        - Therefore, the arrow function also sees the same `this`.
        */
        console.log(this);
    };
    arrowInside();
}

outer(); 
// Node.js -> {}, Browser -> window

// --------------------------------------------------
// SUMMARY: How `this` works

/*
1. Regular function as an object method:
   - `this` points to the object that owns the method.
   Example: user.message() -> this === user

2. Regular standalone function:
   - `this` depends on how it’s called.
   - Called normally: this === undefined (strict mode) or global (non-strict)

3. Arrow function:
   - Has no own `this`.
   - Inherits `this` from the surrounding lexical scope.
   - Calling context doesn’t change it.

   Examples:
     const arrow = () => console.log(this);
     // Inherits from top-level scope ({} in Node, window in browser)

     function outer() {
       const arrow = () => console.log(this);
       arrow();
     }
     outer();
     // Inherits from outer(), which had {} or window
*/
