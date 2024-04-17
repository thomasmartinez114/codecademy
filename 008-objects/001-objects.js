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
