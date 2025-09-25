const user = {
    name: "kakashiSensei"
}

user.id = 6969
user.email = "abc@gmail.com"
user.isLoggedin = true


// console.log(user);

const regularUser ={
    email: "lee@email.com",
    fullname: {
        userfullname:{
            firstName: "Rock",
            middleName: "taijutsu",
            lastName:"Lee"
        }
    },
    ability: "Eight Gates"
}
// console.log(`My name is ${regularUser.fullname.userfullname.firstName} ${regularUser.fullname.userfullname.lastName} and my power is opening ${regularUser.ability}`);


//*******************************************************MERGE*****************************************************/
// Initial objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

/* 
* 1️⃣ Using Object.assign with obj1 as target
* Syntax: Object.assign(target, ...sources)
* Here, obj1 is the target. That means obj1 will be mutated:
* const obj3 = Object.assign(obj1, obj2);
* - Properties from obj2 are copied into obj1
* - obj3 points to the same object as obj1
*/
const obj3 = Object.assign(obj1, obj2);

console.log("After Object.assign(obj1, obj2):");
console.log("obj1:", obj1); // obj1: { a: 1, b: 2, c: 3, d: 4 }
console.log("obj3:", obj3); // obj3: { a: 1, b: 2, c: 3, d: 4 }
console.log("obj1 === obj3:", obj1 === obj3); // obj1 === obj3: true

/* 
* 2️⃣ Using Object.assign with an empty object as target
* Syntax: Object.assign({}, source1, source2, ...)
* Here, {} is the target. That means a new object is created and
* properties from obj1 and obj2 are copied into it:
* const obj4 = Object.assign({}, obj1, obj2);
* - obj1 and obj2 remain unchanged (but obj1 is already mutated from earlier)
* - obj4 is a new independent object
*/
const obj4 = Object.assign({}, obj1, obj2);

console.log("\nAfter Object.assign({}, obj1, obj2):");
console.log("obj1:", obj1); // obj1: { a: 1, b: 2, c: 3, d: 4 }
console.log("obj2:", obj2); // obj2: { c: 3, d: 4 }
console.log("obj4:", obj4); // obj4: { a: 1, b: 2, c: 3, d: 4 }
console.log("obj1 === obj4:", obj1 === obj4); // obj1 === obj4: false

/* 
* 3️⃣ Using spread syntax to merge objects
* Syntax: const obj5 = { ...obj1, ...obj2 };
* - Creates a new object
* - obj1 and obj2 are not mutated
*/
const obj5 = { ...obj1, ...obj2 };

console.log("\nAfter {...obj1, ...obj2}:");
console.log("obj1:", obj1); // obj1: { a: 1, b: 2, c: 3, d: 4 }
console.log("obj2:", obj2); // obj2: { c: 3, d: 4 }
console.log("obj5:", obj5); // obj5: { a: 1, b: 2, c: 3, d: 4 }
console.log("obj1 === obj5:", obj1 === obj5); // obj1 === obj5: false

/* 
* 4️⃣ Spread with overwriting keys
* Syntax: const obj6 = { ...obj1, a: 99, ...obj2 };
* - Later keys overwrite earlier keys
*/
const obj6 = { ...obj1, a: 99, ...obj2 };

console.log("\n After {...obj1, a: 99, ...obj2}:");
console.log("obj6:", obj6); // obj6: { a: 99, b: 2, c: 3, d: 4 }

/* ✅ Key points:
* - Object.assign(target, ...) mutates the target.
* - Object.assign({}, ...) or spread syntax creates a new object.
* - Spread syntax is more modern and readable.
* - console.log("label:", obj) prints the label and the object, so comments should include the label for full accuracy.
*/
