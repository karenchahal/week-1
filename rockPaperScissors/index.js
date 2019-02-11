console.log("Welcome to the game!");

let playerScore = 0;
let computerScore = 0;
const choice = [`scissors`, `rock`, `paper`];

// var attempt = 3;

function getComputerMove() {
  let computerRMove = Math.floor(Math.random() * choice.length);
  return choice[computerRMove];
}

function compareMoves(playerMove, computerMove) {
  console.log(`Your move was ${playerMove}`);
  console.log(`Computer move was ${computerMove}`);
  if (playerMove === computerMove) {
    return `Player picked ${playerMove} and computer picked ${computerMove}, so it is a draw!`;
  } else if (playerMove === `scissors`) {
    if (computerMove === `rock`) {
      computerScore++;
      return `Player picked ${playerMove} and computer picked ${computerMove}, so computer wins!`;
    } else if (computerMove === `paper`) {
      playerScore++;
      return `Player picked ${playerMove} and computer picked ${computerMove}, so player wins!`;
    }
  } else if (playerMove === `rock`) {
    if (computerMove === `paper`) {
      computerScore++;
      return `Player picked ${playerMove} and computer picked ${computerMove}, so computer wins!`;
    } else if (computerMove === `scissors`) {
      playerScore++;
      return `Player picked ${playerMove} and computer picked ${computerMove}, so player wins!`;
    }
  } else if (playerMove === `paper`) {
    if (computerMove === `rock`) {
      playerScore++;
      return `Player picked ${playerMove} and computer picked ${computerMove}, so player wins!`;
    } else if (computerMove === `scissors`) {
      computerScore++;
      return `Player picked ${playerMove} and computer picked ${computerMove}, so computer wins!`;
    }
  } else {
    console.warn(`You've made a mistake`);
  }
}

function choose(playerMove) {
  let message = document.getElementById("message");
  let results = document.getElementById("results");

  const computerMove = getComputerMove();
  message.innerHTML = compareMoves(playerMove, computerMove);
  results.innerHTML = `${playerScore}:${computerScore}`;
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

for (var i = 1; i < 3; i++) {
  choose();
}
