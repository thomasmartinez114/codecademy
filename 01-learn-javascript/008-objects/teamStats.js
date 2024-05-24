const team = {
  _players: [],
  _games: [],

  // getter to retrieve _players
  get players() {
    return this._players
  },

  // getter for _games
  get games() {
    return this._games
  },

  // add player
  addPlayer(newFirstName, newLastName, NewAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: NewAge,
    }
    this._players.push(player)
  },

  // add game
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    this._games.push(game)
  },
}

/////////////
// players
/////////////

const player1 = {
  firstName: "LeBron",
  lastName: "James",
  age: 39,
}

const player2 = {
  firstName: "Jayson",
  lastName: "Tatum",
  age: 26,
}

const player3 = {
  firstName: "Anthony",
  lastName: "Edwards",
  age: 23,
}

// add to _players []
team._players.push(player1)
team._players.push(player2)
team._players.push(player3)

/////////////
// games
/////////////
const game1 = {
  opponent: "Boston Celtics",
  teamPoints: 109,
  opponentPoints: 107,
}

const game2 = {
  opponent: "Los Angeles Lakers",
  teamPoints: 123,
  opponentPoints: 143,
}

const game3 = {
  opponent: "Memphis Grizzlies",
  teamPoints: 89,
  opponentPoints: 121,
}

// add to _games []
team._games.push(game1)
team._games.push(game2)
team._games.push(game3)

//////////////////////////////////////
//////////////////////////////////////

// add player using .addPlayer method
team.addPlayer("Bugs", "Bunny", 76)
team.addPlayer("Daffy", "Duck", 80)

// add game using .addGame method
team.addGame("Titans", 100, 98)
// console.log(team._games)
// console.log(team._players)
console.log(team._games)

// BONUS CHALLENGE
// find total games played, avg points scored, avg total pts for games

let teamPoints = 0

for (let i = 0; i < team._games.length; i++) {
  console.log("for loop")
}
