const marvel_heroes = ["IronMan", "DeadPool", "Thor", "Spoidermon"];
const dc_heroes = ["Superman", "Batman", "Green_Lantern", "Aquaman"];

/* ----------------------
   PUSH example
---------------------- */
/*
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(`I am ${marvel_heroes} with type ${typeof marvel_heroes} and length ${marvel_heroes.length}`);
*/

/*
const a = marvel_heroes.push(dc_heroes);
Logging "a" will give us the length (a number) of the array, not the array itself.
Using a length property on this "a" will give undefined.
*/

/*
console.log(marvel_heroes[4][0]);
Accessing the 5th element of marvel_heroes (which is dc_heroes array pushed) 
and then the 1st element of that nested array
*/

/* ----------------------
   CONCAT example
---------------------- */
const a = marvel_heroes.concat(dc_heroes);
/*
console.log(a); // Will give all items in a new array
console.log(marvel_heroes); // Original marvel_heroes remains unchanged
*/

/* ----------------------
   Spread operator example
---------------------- */
/*
const newspreadedarray = [...marvel_heroes, ...dc_heroes];
console.log(`I am ${newspreadedarray} and my data type is ${typeof newspreadedarray} and my length is ${newspreadedarray.length}`);
*/

/* ----------------------
   Flatten nested arrays
---------------------- */
const nested_arrays = [1, 2, 3, [4, 5], 6, [7, [8, 9]]];
const good_array = nested_arrays.flat(Infinity); /* Flattens all levels */
/*
console.log(good_array); // New flat array
console.log(nested_arrays); // Original array remains unchanged
*/

/* ----------------------
   Array from string
---------------------- */
/*
const z = "HOWDY";
const x = Array.from(z); // Converts string into array of characters
console.log(z); // Original string
console.log(x); // Converted array
*/

/* ----------------------
   Array.of example
---------------------- */
const score_1 = 100;
const score_2 = 100;
const score_3 = 100;

console.log(Array.of(score_1, score_2, score_3)); /* Creates a new array [100, 100, 100] */
