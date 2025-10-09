// ************************************ For...of loop with Arrays ************************************

const arr = ["abc", "def", "ghi", "jkl", "mno"];

for (const i of arr) {
  // The 'for...of' loop iterates directly over the *values* of an iterable (like an array, string, etc.)
  // Example: console.log(i) → prints "abc", then "def", etc.
  // console.log(i);
}



// ************************************ Working with Map ************************************

const map = new Map();
map.set("IN", "India");
map.set("CH", "China");
map.set("UN", "United Nations OLD");
map.set("UN", "United Nations NEW"); // Overwrites the previous UN key
map.set("IN", "Bharat"); // Overwrites the previous IN key

// Note: A Map cannot have duplicate keys. If you set an existing key again, its value will be updated.
// console.log(map);

for (const [key, value] of map) {
  // When destructuring [key, value], we get both the key and the associated value
  // console.log(key, value);
}



// ************************************ Objects are NOT directly iterable with for...of ************************************

const myobj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple"
};

// The 'for...in' loop iterates over the *keys* of an object
for (const a in myobj) {
  // console.log(a);            // Prints only the keys
  // console.log(myobj[a]);     // Prints only the values
  // console.log(`${a}: ${myobj[a]}`); // Prints key-value pairs in a readable format
}



// ************************************ For...in loop with Arrays ************************************

const myarr = ["js", "rb", "Cpp", "swift"];

for (const key in myarr) {
  // 'for...in' gives the index (key) of the array
  // console.log(key); // Prints 0, 1, 2, 3 (the indexes)
  // console.log(`${key}: ${myarr[key]}`); // Prints key-value pairs → index: value
}



// ************************************ forEach with Arrays ************************************

// forEach takes a callback function that runs once for each element of the array
// It provides three parameters: (value, index, array)

myarr.forEach((myarrvalue, index, array) => {
  // console.log(myarrvalue, index, array);
  // Example:
  // myarrvalue → "js"
  // index → 0
  // array → ["js", "rb", "Cpp", "swift"]
});



// ************************************ Array of Objects Example (Improved Version) ************************************
// Old version had hero names as keys, which made it hard to access specific values.
// Now each object represents a *category* (Marvel/DC + Male/Female) with arrays of hero-power pairs.

const objectsinarray = [
  {
    universe: "Marvel",
    gender: "Male",
    heroes: [
      { name: "Iron Man", power: "Powered armor suit" },
      { name: "Hulk", power: "Unlimited strength" },
      { name: "Thor", power: "Control of thunder" }
    ]
  },
  {
    universe: "Marvel",
    gender: "Female",
    heroes: [
      { name: "Black Widow", power: "Expert martial artist and spy" },
      { name: "Captain Marvel", power: "Cosmic energy manipulation" },
      { name: "Scarlet Witch", power: "Reality manipulation" }
    ]
  },
  {
    universe: "DC",
    gender: "Male",
    heroes: [
      { name: "Superman", power: "Flight and super strength" },
      { name: "Batman", power: "Genius intellect and combat mastery" },
      { name: "Flash", power: "Super speed" }
    ]
  },
  {
    universe: "DC",
    gender: "Female",
    heroes: [
      { name: "Wonder Woman", power: "Super agility and lasso of truth" },
      { name: "Supergirl", power: "Flight and enhanced strength" },
      { name: "Zatanna", power: "Magic and spellcasting" }
    ]
  }
];



// ************************************ Looping through the Array of Objects ************************************

objectsinarray.forEach((category) => {
  console.log(`\nUniverse: ${category.universe} | Gender: ${category.gender}`);
  
  category.heroes.forEach((hero) => {
    console.log(`- ${hero.name}: ${hero.power}`);
  });
});
