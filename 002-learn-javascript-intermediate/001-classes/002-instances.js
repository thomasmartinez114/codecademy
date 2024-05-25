// Now, we’re ready to create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our Dog class example.

// class Dog {
//   constructor(name) {
//     this.name = name;
//     this.behavior = 0;
//   }
// }

// const halley = new Dog('Halley'); // Create new Dog instance
// console.log(halley.name); // Log the name value saved to halley
// // Output: 'Halley'

// Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the line of code step-by-step.

// We create a new variable named halley that will store an instance of our Dog class.
// We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
// We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
// Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.
// Now you know how to create instances. In the next exercise, you will learn how to add getters, setters, and methods.

class Surgeon {
  constructor(name, department) {
    this.name = name
    this.department = department
  }
}

// Instructions
// Checkpoint 1 Passed

// 1. Create an instance of the Surgeon class — set the name to 'Francisco Romero' and department to 'Cardiovascular'.
// Save the instance to a constant variable called surgeonRomero.

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular")

// Checkpoint 2 Passed
// 2. Create an instance of the Surgeon class — set the name to 'Ruth Jackson' and department to 'Orthopedics'.

// Save the instance to a constant variable called surgeonJackson.

const surgeonJackson = new Surgeon("Ruth Jackson", "Orthpedics")

console.log(surgeonJackson)
