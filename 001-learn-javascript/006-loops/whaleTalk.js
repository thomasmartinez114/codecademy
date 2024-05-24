// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

let input = "turpentine and turtles"

// Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.

const vowels = ["a", "e", "i", "o", "u"]

// Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
let resultArray = []

// Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
let count = 0
for (let i = 0; i < input.length; i++) {
  // console.log(input[i])
  //  count++
  if (
    input[i] === "a" ||
    input[i] === "e" ||
    input[i] === "i" ||
    input[i] === "o" ||
    input[i] === "u"
  ) {
    resultArray.push(input[i])
    // console.log(resultArray)
  }
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j)
    if (input[i] === vowels[j]) {
      console.log(input[i])
    }
  }
}
// console.log(count)
let resultString = resultArray.join("").toUpperCase()
console.log(resultArray)
console.log(resultString)
