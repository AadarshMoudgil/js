// ************************************ forEach(), filter(), and map() — Deep Dive ************************************
//
// These array methods look similar because they all *loop* through arrays.
// But they have very different *purposes* and *outcomes*.
//
// ✅ forEach() → used to *do* something with each element (side effects only)
// ✅ filter()  → used to *select* elements based on a condition (returns new array)
// ✅ map()     → used to *transform* each element (returns new array of same length)
//
// To connect all three, let's use a story of an imaginary company managing superheroes.
// Each hero has some attributes, and we’ll perform different operations with each method.
//

const heroes = [
  { name: "Iron Man", universe: "Marvel", powerLevel: 95, active: true },
  { name: "Hulk", universe: "Marvel", powerLevel: 98, active: false },
  { name: "Thor", universe: "Marvel", powerLevel: 97, active: true },
  { name: "Captain Marvel", universe: "Marvel", powerLevel: 99, active: true },
  { name: "Superman", universe: "DC", powerLevel: 100, active: true },
  { name: "Batman", universe: "DC", powerLevel: 85, active: false },
  { name: "Wonder Woman", universe: "DC", powerLevel: 92, active: true },
  { name: "Flash", universe: "DC", powerLevel: 88, active: true }
];



// ************************************ 1️⃣ forEach() — Performing Side Effects ************************************
//
// The forEach() method runs a function on each element.
// It’s great for logging, updating UI, sending network requests, etc.
// But it does NOT return a new array — it always returns undefined.
//

console.log("=== Active Heroes (using forEach) ===");

heroes.forEach((hero) => {
  if (hero.active) {
    console.log(`Hero: ${hero.name} | Universe: ${hero.universe} | Power: ${hero.powerLevel}`);
  }
});

// ❌ You cannot do:
// const result = heroes.forEach(...);
// console.log(result); // → undefined
//
// forEach is for *doing* things, not for *getting* things back.


// ************************************ 2️⃣ filter() — Selecting Specific Data ************************************
//
// filter() creates a new array that passes a given test.
// It’s perfect for narrowing down data sets.
//

console.log("\n=== Filter Example: Only Marvel Heroes ===");

const marvelHeroes = heroes.filter((hero) => hero.universe === "Marvel");
console.log(marvelHeroes);

// ✅ Returns a *new array* with only Marvel heroes.
// The original `heroes` array is NOT changed.

console.log("\n=== Filter Example: Active DC Heroes ===");

const activeDCHeroes = heroes.filter((hero) => hero.universe === "DC" && hero.active);
console.log(activeDCHeroes);

// Real-world use case:
// You could use filter() to choose who gets an email, who’s displayed on screen, etc.


// ************************************ 3️⃣ map() — Transforming Data ************************************
//
// map() is used to create a *new array* by transforming each element.
// The new array will always be the same length as the original.
//

console.log("\n=== Map Example: Hero Power Summary ===");

const heroSummaries = heroes.map((hero) => {
  return `${hero.name} (${hero.universe}) → Power Level: ${hero.powerLevel}`;
});

console.log(heroSummaries);

// ✅ Returns a new array of strings (summaries).
// map() is useful when you want to *transform* data into another shape.


// ************************************ 4️⃣ Combining filter() + map() ************************************
//
// This is where real-world power comes in — you can *chain* methods.
// Example: Get names of Marvel heroes with power above 95.
//

console.log("\n=== Filter + Map Example: Strong Marvel Heroes ===");

const strongMarvelHeroes = heroes
  .filter((hero) => hero.universe === "Marvel" && hero.powerLevel > 95)
  .map((hero) => hero.name);

console.log(strongMarvelHeroes);

// ✅ Output: ["Thor", "Captain Marvel"]
// filter() → chooses what you need
// map() → extracts or transforms what you want


// ************************************ 5️⃣ Combining filter() + forEach() ************************************
//
// filter() can *select* data, and then forEach() can *do* something with it.
//

console.log("\n=== Filter + forEach Example: Notify Active Heroes ===");

const activeHeroes = heroes.filter((hero) => hero.active);

activeHeroes.forEach((hero) => {
  console.log(`📩 Sending message to ${hero.name} (${hero.universe})`);
});

// ✅ Use case example:
// In an app, you could use filter() to pick active users,
// and forEach() to send notifications or update their status.


// ************************************ 6️⃣ Summary — When to Use What ************************************
//
// | Method | Returns Something? | Main Use | Example |
// |:-------|:------------------:|:----------|:--------------------------------------------|
// | forEach | ❌ No | Perform actions (logging, API calls, DOM updates) | “Send messages to all active heroes” |
// | filter  | ✅ Yes (new array) | Select subset of data | “Get all DC heroes” |
// | map     | ✅ Yes (new array) | Transform data | “Get names of all heroes” |
// | filter + map | ✅ Yes | Select + transform | “Get names of strong Marvel heroes” |
// | filter + forEach | ❌ + ✅ | Select + act | “Send messages to all active heroes” |
//
// 💡 Tip:
// forEach() → "DO something"
// filter()  → "CHOOSE something"
// map()     → "CHANGE something"
//


// ************************************ 7️⃣ Bonus: Chaining All Three ************************************
//
// A fun advanced example to tie everything together.
//

console.log("\n=== Bonus Example: Marvel Hero Report ===");

heroes
  .filter((hero) => hero.universe === "Marvel") // Step 1: Choose only Marvel
  .map((hero) => ({
    // Step 2: Transform data shape
    heroName: hero.name,
    status: hero.active ? "Active" : "Retired",
    rating: hero.powerLevel > 95 ? "Elite" : "Regular"
  }))
  .forEach((heroInfo) => {
    // Step 3: Display / act
    console.log(
      `${heroInfo.heroName} is an ${heroInfo.status} hero with ${heroInfo.rating} power.`
    );
  });

// ✅ This example chains all three methods together
//    → filter() selects
//    → map() transforms
//    → forEach() performs action
//
// This is a very common real-world pattern in data-heavy apps like dashboards or APIs.
//
