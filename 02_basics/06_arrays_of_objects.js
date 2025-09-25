// Array of objects with 2+ key-value pairs each
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 500 }
];

console.log("Products array:", products);
// Products array: [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Phone', price: 800 },
//   { id: 3, name: 'Tablet', price: 500 }
// ]

// Access first object
console.log("First product:", products[0]); 
// First product: { id: 1, name: 'Laptop', price: 1200 }

// Access a specific property
console.log("Price of first product:", products[0].price); 
// Price of first product: 1200

// Loop through array to print all names and prices
console.log("\nAll product names and prices:");
for (const product of products) {
  console.log(product.name, "-", product.price);
}
/* Output:
Laptop - 1200
Phone - 800
Tablet - 500
*/

// Using map to get an array of product names
const productNames = products.map(product => product.name);
console.log("\nArray of product names:", productNames); 
// Array of product names: [ 'Laptop', 'Phone', 'Tablet' ]

// Using map to get an array of prices
const productPrices = products.map(product => product.price);
console.log("Array of product prices:", productPrices);
// Array of product prices: [ 1200, 800, 500 ]
