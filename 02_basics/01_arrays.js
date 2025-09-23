const myArr = ["abba", "jabba", "dabba"];
const myArr2 = new Array(1, 2, 3, 4);

/* ----------------------
   Methods: PUSH
---------------------- */
/*
Push automatically adds elements to the end of the array.
*/
myArr.push("amar");
myArr.push("akbar");
myArr.push("anthony");

/* ----------------------
   Methods: POP
---------------------- */
/*
Pop automatically removes the last element from the array.
Even if an index is specified, pop always removes the last element.
*/
// myArr.pop();
// console.log(myArr);
// console.log(myArr2);

/* ----------------------
   Methods: UNSHIFT
---------------------- */
/*
Unshift automatically adds elements to the start of the array.
All other indices are shifted.
*/
myArr.unshift("Siuuuuuuu");
// console.log(myArr);

/* ----------------------
   Methods: SHIFT
---------------------- */
/*
Shift removes the first element from the array.
*/
myArr.shift();
// console.log(myArr);

/* ----------------------
   Methods: INCLUDES
---------------------- */
/*
Includes checks for the exact element with the same data type.
*/
// console.log(myArr.includes("abba"));

/* ----------------------
   Methods: JOIN
---------------------- */
/*
Join converts array elements into a string separated by commas (default).
*/
// const arr3 = myArr2.join();
// console.log(`myArr3 is: ${arr3}, and its type is ${typeof(arr3)}`);
// console.log(`myArr2 is: ${myArr2}, and its type is ${typeof(myArr2)}`);

/* ----------------------
   Methods: SLICE
---------------------- */
console.log("A", myArr);
const arr3 = myArr.slice(1, 3); 
console.log(arr3); // Returns elements from index 1 up to (but not including) index 3
console.log("B", myArr); // Original array remains unchanged

/* ----------------------
   Methods: SPLICE
---------------------- */
const myArr4 = myArr.splice(1, 3); 
console.log(myArr4); // Returns removed elements
console.log("C", myArr); // Original array is modified
