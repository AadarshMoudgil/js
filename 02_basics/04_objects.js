// Create a unique symbol to use as an object key
const mySym = Symbol("key1");

const user = {
  name: "abc",
  age: 18,

  // *{ Using [] evaluates mySym and stores the value under a Symbol key }
  [mySym]: "mykey1",

  // Keys with spaces must be in quotes
  "full name": "abc def",

  isLoggedin: true,
  email: "abc@abc.com",
  lastLoginDays: ["Monday", "Friday"]
};

// 1) Accessing a normal property:
console.log(user.lastLoginDays); // ["Monday", "Friday"]

// *{ To use square brackets for normal keys, the string must match exactly }
console.log(user["email"]);      // "abc@abc.com"

// *{ Dot notation fails for keys with spaces }
console.log(user["full name"]);  // "abc def"

// 2) Accessing the Symbol-based key:
console.log(user[mySym]);        // "mykey1"

// 3) Checking the type of the value stored under the symbol key:
console.log(typeof user[mySym]); // "string" (value type, not the key)

// 4) Logging the whole object:
console.log(user);
