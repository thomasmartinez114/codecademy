// High Order Functions
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

///////////////////////////////////
// High Order Functions - Functions as Data
///////////////////////////////////
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);

///////////////////////////////////
// High Order Functions - Functions as Parameters
///////////////////////////////////
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);

  if (checkA === checkB) {
    return checkB;
  } else {
    return "inconsistent results";
  }
};

console.log(checkConsistentOutput(addTwo, 5));
