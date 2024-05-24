// user selection
getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()

  // check if input is correct
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    // console.log("nice")
    return userInput
  } else {
    // console.log("wrong")
    return "Not a valid selection. Please try again."
  }
}

// computer selection
getComputerChoice = () => {
  let options = ["rock", "paper", "scissors"]
  let selection = Math.floor(Math.random() * 3) // random selection from 0-2
  // grab the index of options[] by the selection int thats generated
  let computerPlay = options[selection]
  return computerPlay
  // console.log(computerPlay)
}

// determine who won
determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie"
  }

  if (userChoice === "bomb") {
    return "Flawless Victory"
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Won!"
    } else {
      return "User won!"
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Won!"
    } else {
      return "User won!"
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Won!"
    } else {
      return "User won!"
    }
  }
}

playGame = () => {
  let userChoice = getUserChoice("bomb")
  let computerChoice = getComputerChoice()

  console.log(`User: ${userChoice}`)
  console.log(`PC: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
}

// getUserChoice('Rock')
// getComputerChoice();
// console.log(determineWinner('paper', 'rock'));
playGame()
