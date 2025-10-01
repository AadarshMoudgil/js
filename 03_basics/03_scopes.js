// Question 1
function outer1() {
    let x = 5;
    function inner1() {
        console.log(x);
    }
    inner1();
}
outer1();
// *{ Output: 5
// Explanation: inner1() has access to outer1()'s variable x due to closure. } 

// Question 2
function outer2() {
    let x = 10;
    function inner2() {
        let x = 20;
        console.log(x);
    }
    inner2();
}
outer2();
// *{ Output: 20
// Explanation: inner2() has its own local x which shadows the outer x. } 

// Question 3
function outer3() {
    let x = 1;
    function inner3() {
        x = 2;
        console.log(x);
    }
    inner3();
    console.log(x);
}
outer3();
// *{ Output: 2, 2
// Explanation: inner3() modifies the x in the outer scope. Both logs print 2. } 

// Question 4
function outer4() {
    let x = 5;
    function inner4(y) {
        return x + y;
    }
    console.log(inner4(3));
}
outer4();
// *{ Output: 8
// Explanation: inner4() has access to outer4()'s x. Adding 5 + 3 = 8. } 

// Question 5
function outer5() {
    let x = 0;
    function inner5() {
        x++;
        function innerInner5() {
            x++;
            console.log(x);
        }
        innerInner5();
    }
    inner5();
}
outer5();
// *{ Output: 2
// Explanation: x starts at 0, inner5() increments to 1, innerInner5() increments to 2 and logs it. } 

// Question 6
let x = 1;
function outer6() {
    let x = 2;
    function inner6() {
        let x = 3;
        console.log(x);
    }
    inner6();
}
outer6();
// *{ Output: 3
// Explanation: inner6() prints its own local x, not outer6()'s x or the global x. } 

// Question 7
function outer7() {
    let x = 10;
    function inner7() {
        x += 5;
        return function innerInner7() {
            console.log(x);
        }
    }
    let fn = inner7();
    fn();
}
outer7();
// *{ Output: 15
// Explanation: inner7() increments x to 15 and innerInner7() logs the updated value. } 

// Question 8
function outer8(a) {
    return function inner8(b) {
        return a + b;
    }
}
let sum = outer8(5);
console.log(sum(3));
// *{ Output: 8
// Explanation: Closure keeps a = 5 inside inner8(). sum(3) adds 5 + 3 = 8. } 

// Question 9
function outer9() {
    let a = 1;
    function inner9() {
        let b = 2;
        function innerInner9() {
            console.log(a + b);
        }
        innerInner9();
    }
    inner9();
}
outer9();
// *{ Output: 3
// Explanation: innerInner9() can access both a (from outer9) and b (from inner9). } 

// Question 10
function outer10() {
    var x = 1;
    function inner10() {
        var x = 2;
        function innerInner10() {
            x++;
            console.log(x);
        }
        innerInner10();
        console.log(x);
    }
    inner10();
}
outer10();
// *{ Output: 3, 2
// Explanation: innerInner10() increments its local x (2 -> 3) and logs 3. outer x in inner10() is still 2 after innerInner10(). } 
