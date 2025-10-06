// ===============================
// 1. Print numbers from 1 to 10
// ===============================
// Start i at 1; run until i <= 10; increase by 1 each loop
// console.log(i) prints each number in the sequence
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// ==========================================
// 2. Print the square of numbers from 1 to 10
// ==========================================
// i * i gives the square of each number
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}



// =====================================
// 3. Print even numbers between 1 and 20
// =====================================
// The if condition checks if the number is divisible by 2
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// ===================================
// 4. Print the multiplication table of 5
// ===================================
// Template literals help format the output nicely
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}



// ==========================================
// 5. Print numbers from 10 down to 1 (reverse)
// ==========================================
// Start i at 10; decrease each loop until 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}



// ===========================================
// 6. Print the sum of numbers from 1 to 100
// ===========================================
// Use a variable outside the loop to accumulate the total
let sum = 0; // accumulator
for (let i = 1; i <= 100; i++) {
    sum += i; // add current i to sum
}
console.log(sum); // prints 5050



// =====================================================
// 7. Print the first 10 Fibonacci numbers (0, 1, 1, 2...)
// =====================================================
// Start with a = 0, b = 1 (first two numbers)
// Then each new number is the sum of the previous two
let a = 0, b = 1;
console.log(a); // first Fibonacci number
console.log(b); // second Fibonacci number
for (let i = 3; i <= 10; i++) {
    let c = a + b;  // next number
    console.log(c);
    a = b; // shift forward
    b = c;
}



// =====================================
// 8. Print increasing star pattern
// =====================================
// *
// **
// ***
// ****
// *****
// Outer loop controls rows; inner loop builds stars string manually
for (let i = 1; i <= 5; i++) {
    let stars = ""; // empty string for this row
    for (let j = 1; j <= i; j++) {
        stars += "*"; // append one star per iteration
    }
    console.log(stars); // print the row
}



// =====================================
// 9. Print decreasing star pattern
// =====================================
// *****
// ****
// ***
// **
// *
// Outer loop counts down; inner loop builds string for each row
for (let i = 5; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}



// ================================================
// 10. Print numeric pattern
// ================================================
// 1
// 12
// 123
// 1234
// 12345
// Outer loop for rows, inner loop for digits
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j; // append numbers as strings
    }
    console.log(row);
}
