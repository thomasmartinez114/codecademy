///////////////////////////////////
// Introduction to Iterators
///////////////////////////////////

const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

///////////////////////////////////
// The .forEach() Method
///////////////////////////////////

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
fruits.forEach((fruit) => console.log("I want to eat a " + fruit));

///////////////////////////////////
// The .map() Method
///////////////////////////////////

// .map() works in a similar manner to .forEach()—
// the major difference is that .map() returns a new array.

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below

const secretMessage = animals.map((animal) => {
  return animal[0];
});

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map((number) => {
  return number / 100;
});

console.log(smallNumbers);

///////////////////////////////////
// The .filter() Method
//////////////////////////////////

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers
const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});

console.log(smallNumbers);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

console.log(longFavoriteWords);

///////////////////////////////////
// findIndex() Method
///////////////////////////////////

// We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

/* Instructions:

1) Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

2) Let’s see if we can find the index of the first animal that starts with the letter 's'.

Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
*/

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

// 1
const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});

// 2
const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s";
});

console.log(foundAnimal);
console.log(startsWithS);

// The .reduce() Method

/* Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:
 */

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

///////////////////////////////////
// Iterator Documentation
///////////////////////////////////

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

///////////////////////////////////
// Choose the right iterator
///////////////////////////////////

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.every((num) => num < 0);
