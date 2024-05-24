// random number to 1000 and a whole with the floor
let raceNumber = Math.floor(Math.random() * 1000);

// numbers
// adults > 1000
// others < 1000

// start time
// early adults: 0930
// late adults: 1100
// youth: 1230

let earlyReg = true;
let runnerAge = 18;

if ((runnerAge) => 18 && earlyReg === true) {
  console.log(`Default ${raceNumber}`);
  raceNumber += 1000;
  console.log(`Adult Race Number: ${raceNumber}`);
}

if (runnerAge > 18 && earlyReg === true) {
  console.log(`Race Start: 9:30AM and your Race Number is: ${raceNumber}`);
} else if (runnerAge > 18 && earlyReg === false) {
  console.log(`Race Start: 11:00AM and your Race Number is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Youth Race Start: 12:30PM and Race Number is ${raceNumber}`);
} else if (runnerAge === 18) {
  console.log("Please see the registration desk.");
}
