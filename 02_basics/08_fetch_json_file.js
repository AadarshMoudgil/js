const data = require("./07_json_file.json"); 


/*How do you log the name of the first user?
(Expected: "Alice")*/

console.log(data.users[0].name);

/*
How do you get the email of the third user (id: 3)?

*/
console.log(data.users[2].email);

/*
How do you access the second hobby of Bob?
(Expected: "cooking")
*/
console.log(data.users[1].hobbies[1]);
/*
How do you print the city where Diana lives?
*/
console.log(data.users[3].address.city);
/*
How do you get the age of Ethan?
*/
console.log(data.users[4].age);
/*

How do you list all the names of the users using a loop?
*/
// console.log(data.users);
/*
How do you get the country of the second user?
(Expected: "UK")
*/
console.log(data.users[1].address.country);
/*
How do you check how many hobbies Charlie has?
*/
console.log(data.users[2].hobbies);
/*
How do you print the last hobby of Alice?
(Expected: "cycling")
*/
console.log(data.users[0].hobbies[1]);
/*
How do you find the id of the user whose name is Bob?*/
console.log(data.users[1]);


