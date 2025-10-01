// ===============================
// FUNCTIONS WITH ARRAYS AND OBJECTS
// ===============================

// Question 1: Create a function called printFirst that takes an array
// and prints the first element.

function printFirst(arr){
    console.log(arr[0]);
    }
    printFirst([344, 5345,6767,778])
// Question 2: Create a function called printLast that takes an array
// and prints the last element.
function printLast(arr){
console.log(arr[arr.length-1]);
}
printLast([200, 300, 45, 88])
// Question 3: Create a function called sumArray that takes an array of numbers
// and returns the sum of all numbers.

function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum; 
}

console.log(sumArray([2, 3, 66, 7]));

   
// Question 4: Create a function called addElement that takes an array and a value
// and adds the value to the array.

function addElement(arr, value){
 arr.push(value)
return arr
}

console.log(addElement([1,2,3],4));

// Question 5: Create a function called printObject that takes an object
// and prints all its properties in the format: key: value.

function printObject(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

printObject({
    "name": "abcda", 
    "place": "trrster"
});

// Question 6: Create a function called printName that takes an object
// with a property "name" and prints it.

function printName (obj){
console.log(obj.name);
}
printName({
    "name": "fast",
    "place": "everywhere"
})

// Question 7: Create a function called birthday that takes an object
// with a property "age" and increases it by 1.
function birthday (obj){
console.log(obj.age +1);
 
}
birthday({
    "age": 69
});

// Question 8: Create a function called getProperty that takes an object
// and a property name (string) and returns the value of that property.
function getProperty (obj, str){
return obj[str];
}
console.log(getProperty({
    "str": "I am the value", "age": 30
}, "str"));

// Question 9: Create a function called doubleArray that takes an array of numbers
// and returns a new array with all numbers doubled.

function doubleArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(doubleArray([2,4,7,8,10]));


// Question 10: Create a function called mergeObjects that takes two objects
// and returns a new object that contains all properties from both objects.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({
    "name": "Tatya Bichu",
    "Hobby": "killing"
}, {
    "name2": "Shaktiman",
    "Speciality": "Spinin"
}));
