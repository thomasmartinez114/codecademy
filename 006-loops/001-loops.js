// Repeating Tasks Manually
var vacationSpots = ["Dominican Republic", "Las Vegas", "Ibiza"];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// The For Loop
// log 5 - 10

for (let i = 5; i < 11; i++) {
  console.log(i);
}

// Looping in Reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

const vacationSpots = ["Bali", "Paris", "Tulum"];

// Looping through Arrays
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

// Nested Loops
const bobsFollowers = [
  "tommiehilfiga",
  "devtommie",
  "threesixtyvinyl",
  "tommie114",
];

const tinasFollowers = ["devtommie", "tommie114", "cats123"];

let mutualFollowers = [];

for (let bobs = 0; bobs < bobsFollowers.length; bobs++) {
  for (let tinas = 0; tinas < tinasFollowers.length; tinas++) {
    if (bobsFollowers[bobs] === tinasFollowers[tinas]) {
      mutualFollowers.push(tinasFollowers[tinas]);
    }
  }
}

console.log(mutualFollowers);

// The While Loop
const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard = "";

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// Do...While Statements
let cupsOfSugarNeeded = 19;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

// The break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G.") {
    console.log(rapperArray[i]);
    break;
  }
}

console.log("And if you don't know, now you know.");
