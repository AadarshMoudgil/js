const name = "eddy";

const first = () => {
    console.log("first start");
    let a = 1;
    const b = second(6, 9);
    a = a + b;
    console.log("first end:", a);
    return a;
};

function second(x, y) {
    console.log("second start");
    let c = 2;
    console.log("second end:", c);
    return c;
}

const x = first();
console.log("x =", x);
// Output: 
// first start
// second start
// second end: 2
// first end: 3
// x = 3


/* Explanation: after compilation, the code is ready to be executed. So, a Global Execution Context will be created. 
It will have it's own var environment, scope chain, this keyword, etc. So, as per this code, GEC will have
name, first fxn declaration, second fxn declaraion, then it comes to const x, which is a function call.


So, a new execution context for  the first function is created. It will go on the top of the GEC, and will become the new
current execution context. Now, it will have its own execution context having it's own variables, and scopes, etc. So,
it will logged the value first, then it will go to the second line that will give it the value of a, then the next line is also a function call, so the same thing will happen.

Then in that execution context, same things will happen until the return statement. Return statement will kind of delete that ec, and we'll be back to the previous ec,
that was the first function's ec. Then that will be done, and we'll be back to the global ec.

Things to remember: 
log statements get logged if are in GEC. 

More examples: 
1) console.log("GEC: start");

function first() {
    console.log("Function EC: inside first");
}

console.log("GEC: before calling first");
first();
console.log("GEC: after calling first");
o/p: GEC: start
GEC: before calling first
Function EC: inside first
GEC: after calling first

2) function first() {
    console.log("Function EC: inside first");
}

console.log("GEC: before calling first");
first();
console.log("GEC: after calling first");
console.log("GEC: start");

o/p: GEC: before calling first
Function EC: inside first
GEC: after calling first
GEC: start*/