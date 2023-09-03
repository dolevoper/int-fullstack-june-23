let matchesAmount = 13;
let currentPlayer = 1;

playTurn();

function playTurn() {
  const takeDown = prompt(`There are ${matchesAmount} matches on the table.
Player ${currentPlayer}, how many matches would you like to remove?`);
  if (takeDown === null) {
    alert("Good game 🙃 bye bye!");
    return;
  }
  const takeDownNumber = Number(takeDown);
  validityCheck(takeDownNumber);
  matchesAmount = matchesAmount - takeDownNumber;

  if (matchesAmount === 1) {
    alert(`Player ${currentPlayer} wins!`);
    return;
  } else if (matchesAmount < 1) {
    alert(`Player ${nextPlayer(currentPlayer)} wins!`);
    return;
  }

  currentPlayer = nextPlayer(currentPlayer);
  playTurn();
}













function validityCheck(input) {
  if (
    !Number.isInteger(input) ||
    isNaN(input) ||
    input < 1 ||
    input > 3
  ) {
    alert("Please insert a whole number between 1-3");
    playTurn();
  }
}

function nextPlayer(currentPlayer: number) {
  if (currentPlayer === 1) {
    return 2;
  } else {
    return 1;
  }
}