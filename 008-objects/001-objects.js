///////////////////////////////////
// Creating Object Literals
///////////////////////////////////

// Write your fasterShip object literal below
let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

///////////////////////////////////
// Bracket Notation
///////////////////////////////////

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
let isActive = spaceship["Active Mission"];

console.log(isActive);

///////////////////////////////////
// Property Assignment
///////////////////////////////////

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below
spaceship.color = "glorious gold";

// add new property to object
spaceship.numEngines = 5;

// delete 'Secret Mission'
delete spaceship["Secret Mission"];

///////////////////////////////////
// Methods
///////////////////////////////////

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();

///////////////////////////////////
// Nested Objects
///////////////////////////////////

let spaceship = {
  passengers: [{ name: "Thomas" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

// Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
let capFave = spaceship.crew.captain["favorite foods"][0];

// Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
// changed the null up above in the object

// Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)
let firstPassenger = spaceship.passengers[0];

///////////////////////////////////
// Pass By Reference
///////////////////////////////////

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below

//Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
let greenEnergy = (objectParam) => {
  objectParam["Fuel Type"] = "avocado oil";
};

// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.
let remotelyDisable = (objectParam) => {
  objectParam["disabled"] = true;
};

// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
