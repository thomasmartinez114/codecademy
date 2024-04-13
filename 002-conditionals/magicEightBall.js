let username = "thomas";

username !== null ? console.log(`Hello ${username}`) : console.log("Hello!");

let userQuestion = "";
console.log(`${username} is asking: ${userQuestion}`);

// Math.floor to be whole number
// Math.random() * 8 so its a random number from 1-8
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

// switch version
switch (randomNumber) {
  case 1:
    console.log("It is certain");
    break;
  case 2:
    console.log("It is decidedly so");
    break;
  case 3:
    console.log("Reply hazy try again");
    break;
  case 4:
    console.log("Cannot predict now");
    break;
  case 5:
    console.log("Do not count on it");
    break;
  case 6:
    console.log("My sources say no");
    break;
  case 7:
    console.log("Outlook not so good");
    break;
  case 8:
    console.log("Signs point to yes");
    break;
}
