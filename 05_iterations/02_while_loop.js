let i=0
while (i<=10) {
    console.log(`Value of i is ${i}`);
    i = i+1
}

let myarr = ["Ironman", "Thor", "Loki", "Hulk"]
let j =0
while(j<=myarr.length){
    console.log(`My name is ${myarr[j]}`);
    j++
}//We'll get undefined in the end because the loop is checking while 4<=4, which is right, but myarr[4] doesn't exist.

//DO WHILE
let a = 500
do {
    console.log(`Score is ${a}`);
    a++
    
} while (a<=100);
//In this example, we can put any number and that will work one time for sure. Because in do while loop, task is done first and then the conditions gets checked.

