/* =======================================================
   Question 1: Bus Routes
   - Bus A has passengers ["Alice", "Bob"], Bus B has ["Charlie", "David"].
   Tasks:
   1. Combine both buses into a single route array.
   2. Remove the first passenger from the combined route.
   3. Add a new passenger "Eve" to the end.
   Checkpoint: Print the final array.
======================================================= */
const bus_A = ["Alice", "Bob"]
const bus_B = ["Charlie", "David"]

const single_route = bus_A.concat(bus_B)
single_route.shift()
single_route.push("Eve")
console.log(single_route);




/* =======================================================
   Question 2: Numbers Game
   - You have two number arrays: a = [1, 2, 3], b = [4, 5, 6].
   Tasks:
   1. Merge arrays using concat.
   2. Take a slice of the merged array from index 2 to 5.
   Checkpoint: Print the slice.
======================================================= */

const a = [1, 2, 3]
const b = [4, 5, 6]
const c = a.concat(b)
const d =c.slice(2,5)
console.log(d);


/* =======================================================
   Question 3: Nested Arrays
   - matrix = [[1,2], [3,4], [5,6]]
   Tasks:
   1. Access the number 4 from the matrix.
   2. Flatten the matrix into a single array.
   Checkpoint: Print the flattened array.
======================================================= */

 const matrix = [[1,2], [3,4], [5,6]]
 const access = (matrix[1][1]);
 const flatten = matrix.flat(Infinity)
 console.log(flatten);
 
/* =======================================================
   Question 4: Passenger Check
   - passengers = ["John", "Mary", "Steve"]
   Tasks:
   1. Check if "Mary" is on the list.
   2. Check if "Alice" is on the list.
   Checkpoint: Print both results.
======================================================= */
const passengers = ["John", "Mary", "Steve"]
result_1= passengers.includes("Mary");
result_2=passengers.includes("Alice");
console.log(`Is Mary is on the list? ${result_1}`);
console.log(`Is Alice on the list? ${result_2}`);




/* =======================================================
   Question 5: Ticket Numbers
   - Ticket numbers are stored as strings: ["12", "34", "56"]
   Tasks:
   1. Convert them to numbers using Number.
   2. Add 10 to each number.
   Checkpoint: Print the updated ticket numbers array.
======================================================= */
const tickets = ["12", "34", "56"];

const updatedTickets = tickets.map(ticket => Number(ticket) + 10);

console.log(updatedTickets);

/* =======================================================
   Question 6: Daily Temperatures
   - Temperatures for two cities: cityA = [30, 32, 31], cityB = [28, 29, 33]
   Tasks:
   1. Merge temperatures of both cities using spread operator.
   2. Sort the merged array in ascending order.
   Checkpoint: Print the sorted array.
======================================================= */

let cityA = [30, 32, 31];
let cityB = [28, 29, 33];
const spd = [...cityA, ...cityB];
spd.sort((a, b) => a - b); // numeric ascending
console.log(spd); // [28,29,30,31,32,33]


/* =======================================================
   Question 7: Student Scores
   - Scores for two exams: exam1 = [50, 60, 70], exam2 = [80, 90, 100]
   Tasks:
   1. Create a new array with all scores.
   2. Remove the lowest score using splice.
   Checkpoint: Print the updated array.
======================================================= */

let exam1 = [50, 60, 70];
let exam2 = [80, 90, 100];

let exam_both = exam1.concat(exam2);
exam_both.splice(0, 1); // remove first element
console.log(exam_both); // [60,70,80,90,100]


/* =======================================================
   Question 8: Shopping Cart
   - Cart 1: ["apple", "banana"], Cart 2: ["orange", "grapes"]
   Tasks:
   1. Add "mango" to the beginning of Cart 1.
   2. Combine both carts into fullCart.
   3. Remove "banana" from fullCart.
   Checkpoint: Print fullCart.
======================================================= */
let Cart_1 = ["apple", "banana"];
let Cart_2 = ["orange", "grapes"];

Cart_1.unshift("mango"); // ["mango", "apple", "banana"]
const full_cart = Cart_1.concat(Cart_2); // ["mango","apple","banana","orange","grapes"]

// Remove "banana"
const index = full_cart.indexOf("banana");
if(index !== -1) full_cart.splice(index, 1);

console.log(full_cart); // ["mango","apple","orange","grapes"]



/* =======================================================
   Question 9: Flight Seats
   - Seats in flight 1: [1,2,3,4], flight 2: [5,6,7,8]
   Tasks:
   1. Assign all seats to a new flight route array.
   2. Remove the first and last seat from the route.
   3. Add seats 0 and 9 at the start and end respectively.
   Checkpoint: Print the new flight route.
======================================================= */
flight_1 = [1,2,3,4]
flight_2 = [5,6,7,8]

new_flight_route = flight_1.concat(flight_2)
new_flight_route.pop()
new_flight_route.shift()
new_flight_route.push(9)
new_flight_route.unshift(0)
console.log(new_flight_route);




/* =======================================================
   Question 10: String Split & Join
   - Sentence: "Hello world from JS"
   Tasks:
   1. Split the sentence into an array of words.
   2. Reverse the order of words.
   3. Join them back into a sentence using "-" as separator.
   Checkpoint: Print the final sentence.
======================================================= */
let sentence_old = "Hello world from JS";
const words = sentence_old.split(" "); // ["Hello","world","from","JS"]
const reversed = words.reverse();
const final_sentence = reversed.join("-");
console.log(final_sentence); // "JS-from-world-Hello"
