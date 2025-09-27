const market = {
    items: 200,
    location: "Singapore",
    name: "AsiaSuperMart",
    isOpen: true
}

// *{ Direct property access }
// *{ If you just need one property once, you can do this: }
console.log(market.location);
 // "Singapore"

// *{ Destructuring (basic) }
// *{ Instead of repeating market.items, market.location, market.name each time,
//    we can "unpack" them into variables directly: }
const {items, location, name} = market
console.log(items);    // 200
console.log(location); // "Singapore"
console.log(name)    // "AsiaSuperMart"

// *{ Destructuring with renaming }
// *{ If we want to give a property a different variable name,
//    we can rename it while destructuring: }
const {location: place} = market
console.log(place) // "Singapore"
// *{ Notice we didn’t change the original object.
//    market.location is still valid and unchanged. }

// *{ Destructuring in function parameters }
// *{ Useful when we only care about specific properties from an object.
//    Instead of writing market.location inside the function, we can
//    pull out just what we need directly: }
function printInfo({ name, isOpen }) {
    console.log(`${name} is currently ${isOpen ? "open" : "closed"}.`)
}
printInfo(market) // "AsiaSuperMart is currently open."
 