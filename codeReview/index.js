const ROCK = "rock"; //const in capitals to distinguish from other variables
const PAPER = "paper";
const SCISSORS = "scissors";

let computerMove = "paper";
let playerMove = "scissors";

if (computerMove === playerMove) {
  console.log("draw");
}
if (computerMove === ROCK) {
  if (playerMove === SCISSORS) {
    console.log("computer");
  } else if (playerMove === PAPER) {
    console.log("player");
  }
} else if (computerMove === SCISSORS) {
  if (playerMove === PAPER) {
    console.log("computer");
  } else if (playerMove === ROCK) {
    console.log("player");
  }
} else if (computerMove === PAPER) {
  if (playerMove === ROCK) {
    console.log("computer");
  } else if (playerMove === SCISSORS) {
    console.log("player");
  }
}
