// ===============================
// FUNCTIONS PRACTICE TEMPLATE
// ===============================

// Question 1: Create a function called greet that prints "Hello, World!".
// Call it once to test.
function greet(){
    console.log("Hello, World!");
    
}
greet()
// Question 2: Write a function called greetName that takes a name as a parameter
// and prints "Hello, [name]!".
// Example: greetName("Alice") → "Hello, Alice!"

function greetName(name){
    console.log(`Hello ${name}`);
    }
    greetName("Alice")
// Question 3: Create a function add that takes two numbers as parameters
// and returns their sum. Call it with at least two different sets of numbers.
function add (number1, number2){
   return  number1 + number2
}
console.log(add(3,4));

// Question 4: Write a function square that takes a number
// and returns its square (number * number).
function square(number){
    return number*number
}
console.log(square(9));

// Question 5: Write a function sayAge that takes a name and an age,
// and prints "[name] is [age] years old."

function sayAge (name, age){
    return (`${name} is ${age} years old`)
}
 console.log(sayAge("Naruto", 32));
 
// Question 6: Write a function multiply that takes three numbers
// and returns their product.

function multiply(a,b,c){
    return a*b*c
}
console.log(multiply(4,5,6));


// Question 7: Write a function isEven that takes a number
// and returns true if it's even, false if it's odd.

function isEven(number){
    if (number%2===0) {
        return "True"
    } else {
        return "False"
    }
}
console.log(isEven(9));

// Question 8: Write a function max that takes two numbers
// and returns the larger one.
function max(num1, num2) {
    if (num1>num2) {
        return `${num1} is the larger number`
    } else if(num1 == num2) {
        return "Both the numbers are equal"
    }
    else{
        return `${num2} is the larger number`
    }
}

console.log(max(7,6));

// Question 9: Write a function repeat that takes a word and a number,
// and prints that word as many times as the number.
// Example: repeat("hi", 3) → hi hi hi

function repeat(word, number){
    for (let i = 0; i < number; i++) {
        console.log(word);
    }
}
console.log(repeat("Naruto", 4));

// // Question 10: Write a function calculator that takes three arguments:
// // two numbers and an operator ("+", "-", "*", "/").
// // Return the result of applying the operator to the numbers.
// // Example: calculator(5, 2, "+") → 7
// function calculator(arg1, arg2, arg3){

// }