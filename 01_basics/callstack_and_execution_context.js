const name = "eddy";

/* ----------------------
   Function: first
---------------------- */
const first = () => {
    console.log("first start");
    let a = 1;
    const b = second(6, 9); // Calls second function
    a = a + b;
    console.log("first end:", a);
    return a;
};

/* ----------------------
   Function: second
---------------------- */
function second(x, y) {
    console.log("second start");
    let c = 2;
    console.log("second end:", c);
    return c;
}

/* ----------------------
   Call first and log result
---------------------- */
const x = first();
console.log("x =", x);

/* ----------------------
   Output:
----------------------
first start
second start
second end: 2
first end: 3
x = 3
---------------------- */

/* ----------------------
   Explanation:
----------------------
After compilation, the code is ready to be executed.
A Global Execution Context (GEC) is created with its own variable environment,
scope chain, and 'this' keyword.  

In the GEC:
- name is declared
- first function declaration
- second function declaration
- const x = first(); triggers a function call

When first() is called:
- A new Execution Context (EC) for 'first' is created and pushed onto the execution stack
- 'first' EC has its own variables, scope, etc.
- Logs "first start"
- a = 1
- Calls second(6, 9):
    - A new EC for 'second' is created
    - Logs "second start"
    - c = 2
    - Logs "second end: 2"
    - Returns 2
- Back to 'first' EC, a = a + b → 3
- Logs "first end: 3"
- Returns a → 3

After first() finishes:
- 'first' EC is popped from the stack
- Back to GEC, x = 3

----------------------
   Things to remember:
- Log statements in the current EC are executed immediately
- Function calls create new ECs that are pushed onto the stack
- Return statements remove the current EC from the stack

----------------------
   Additional Examples:

1) 
console.log("GEC: start");

function first() {
    console.log("Function EC: inside first");
}

console.log("GEC: before calling first");
first();
console.log("GEC: after calling first");

Output:
GEC: start
GEC: before calling first
Function EC: inside first
GEC: after calling first

2)
function first() {
    console.log("Function EC: inside first");
}

console.log("GEC: before calling first");
first();
console.log("GEC: after calling first");
console.log("GEC: start");

Output:
GEC: before calling first
Function EC: inside first
GEC: after calling first
GEC: start
*/
