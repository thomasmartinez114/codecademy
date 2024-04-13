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
