// // A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!

// We’ll hold the meal, price, and their respective getters and setters in an object named menu.

// 1.
// In app.js, create an empty menu object.
let menu = {
  _meal: "",
  _price: 0,

  // Getter to retrieve
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}`
    } else {
      return `Meal or price was not set correctly!`
    }
  },

  // set meal
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck
      return this._meal
    } else {
      console.log("Meal must be a String")
    }
  },

  // set price
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck
      return this._price
    } else {
      console.log("Must be a number")
    }
  },
}

menu.meal = "244"
menu.price = 10
console.log(menu)

// console.log getter method
console.log(menu.todaysSpecial)
