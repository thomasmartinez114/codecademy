// Create an Array
const hobbies = ["playing sports", "working out", "coding"];

console.log(hobbies);

// Accessing Elements

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

let listItem = famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Update Elements

let groceryList = ["bread", "avocados", "milk"];

// Arrays with let and const
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);
utensils[3] = "Spoon";
console.log(utensils);

// The .length property
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];

console.log(objectives.length);

// The .push() Method
const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("cut grass", "babysit");
console.log(chores);

// .pop() method -- removes last item
const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

chores.pop();
console.log(chores);
