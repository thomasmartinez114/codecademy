///////////////////////////////////
// The this Keyword
///////////////////////////////////

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());

// Let’s create a new object to practice using this.

// In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

// Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:

// I am MODEL and my current energy level is ENERGYLEVEL.

// Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!

///////////////////////////////////
// Privacy
///////////////////////////////////

const robot = {
  _energyLevel: "high",
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot.recharge();

// 1. Below the robot object, reassign the _energyLevel property to 'high'.

// 2. Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.

// What will happen now that _energyLevel isn’t a number?

// Call .recharge() on robot to find out.

// Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.

///////////////////////////////////
// Getters
///////////////////////////////////

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot.energyLevel);

// 1. In robot, create a getter method named energyLevel using the get keyword. Leave the function body blank for now.

// 2. Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

// Make sure you return the string instead of logging it to the console.

// 3. If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.

// Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

// 4. Log the result of calling the getter method energyLevel on robot to the console.

// Notice that the method will return a formatted response rather than just accessing a property!

///////////////////////////////////
//
///////////////////////////////////

///////////////////////////////////
//
///////////////////////////////////
