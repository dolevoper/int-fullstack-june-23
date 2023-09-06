function nimGame() {
    let matches = 13;
  
    function howManyPlayers() {
      const numberOfPlayers = prompt("How many players are playing?");
  
      switch (numberOfPlayers) {
        case "1":
          onePlayerGame();
          break;
  
        case "2":
          twoPlayerGame();
          break;
  
        default:
          howManyPlayers();
          break;
      }
    }
    howManyPlayers();
  
    //
  
    function twoPlayerGame() {
      let quantityOfMatches: number = Number(
        prompt("How many matches are in the game?")
      );
  
      if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
        twoPlayerGame();
      } else {
        matches = quantityOfMatches;
      }
  
      const firstPlayerName = prompt(
        "Please enter the name of the first player:"
      );
  
      const secondPlayerName = prompt(
        "Please enter the name of the second player:"
      );
  
      let turn = Math.floor(Math.random() * 2 + 1);
  
      let userTurn = turn === 1 ? firstPlayerName : secondPlayerName;
  
      while (matches > 1) {
        alert(`Now it's turn of player ${userTurn}. Matches left ${matches}.`);
  
        let userTakesMatches: number = Number(
          prompt(`How many matches ${userTurn} wants to take?`)
        );
  
        if (userTakesMatches <= 3 && userTakesMatches >= 1) {
          matches = matches - userTakesMatches;
  
          if (userTurn === firstPlayerName) {
            userTurn = secondPlayerName;
          } else {
            userTurn = firstPlayerName;
          }
        }
      }
  
      if (matches === 1) {
        const winner =
          userTurn === firstPlayerName ? secondPlayerName : firstPlayerName;
        alert(`${winner} wins!`);
      }
    }
  }
  
  function onePlayerGame() {
  
    const gameLevel = prompt(
      "Please select the dificulty level of the game: \n 1. Easy.\n 2. Medium.\n 3. Impossible."
    );
  
    const level = gameLevel?.toLowerCase().trim();
  
    switch (level) {
      case "1":
      case "easy":
        // console.log('easy level');
        onePlayerGameEasy();
        break;
      case "2":
      case "medium":
        // console.log('hard level');
        onePlayerGameMedium();
        break;
      case "3":
      case "impossible":
        onePlayerGameImpossible();
        // console.log('impossible level');
        break;
      default:
        // console.log('Default');
        onePlayerGame();
    }
  }
  
  function onePlayerGameEasy() {
  
    let quantityOfMatches: number = Number(
      prompt("How many matches are in the game?")
    );
  
    if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
      onePlayerGameEasy();
    } else {
      matches = quantityOfMatches;
    }
  
    let userTurn = "computer";
  
    while (matches > 1) {
      alert(`Now it's turn of player ${userTurn}. Matches left ${matches}.`);
  
      if (userTurn === "computer") {
        let userTakesMatches = Math.floor(Math.random() * 3 + 1);
        alert(`Computer takes ${userTakesMatches} matches.`);
        matches = matches - userTakesMatches;
        userTurn = "gamer";
      } else {
        let userTakesMatches: number = Number(
          prompt("How many matches do you want to take?")
        );
  
        if (userTakesMatches <= 3 && userTakesMatches >= 1) {
          matches = matches - userTakesMatches;
          userTurn = "computer";
        }
      }
    }
  
    if (matches === 1) {
      const resultOfTheGame =
        userTurn === "computer" ? "You are win!" : "You are loose.";
      alert(resultOfTheGame);
    }
  }
  
  function onePlayerGameMedium() {
  
    let quantityOfMatches: number = Number(
      prompt("How many matches are in the game?")
    );
  
    if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
      onePlayerGameEasy();
    } else {
      matches = quantityOfMatches;
    }
  
    let userTurn = "computer";
  
    let turnOfComputer = 1;
  
    while (matches > 1) {
      alert(`Now it's turn of player ${userTurn}. Matches left ${matches}.`);
  
      if (userTurn === "computer" && turnOfComputer === 1) {
        let userTakesMatches = Math.floor(Math.random() * 3 + 1);
        alert(`Computer takes ${userTakesMatches} matches.`);
        matches = matches - userTakesMatches;
        turnOfComputer += 1;
        userTurn = "gamer";
      } else if (userTurn === "computer" && turnOfComputer > 1) {
        if (matches > 4) {
          userTakesMatches = matches % 4 !== 0 ? matches % 4 : 1;
        } else if (matches <= 4) {
          userTakesMatches = matches - 1;
        }
        alert(`Computer takes ${userTakesMatches} matches.`);
        matches = matches - userTakesMatches;
        turnOfComputer += 1;
        userTurn = "gamer";
      } else {
        let userTakesMatches: number = Number(
          prompt("How many matches do you want to take?")
        );
  
        if (userTakesMatches <= 3 && userTakesMatches >= 1) {
          matches = matches - userTakesMatches;
          userTurn = "computer";
        }
      }
    }
  
    if (matches === 1) {
      const resultOfTheGame =
        userTurn === "computer" ? "You are win!" : "You are loose.";
      alert(resultOfTheGame);
    }
  }
  
  function onePlayerGameImpossible() {
  
    let quantityOfMatches: number = Number(
      prompt("How many matches are in the game?")
    );
  
    if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
      onePlayerGameEasy();
    } else {
      matches = quantityOfMatches;
    }
  
    let userTurn = "gamer";
  
    while (matches > 1) {
      alert(`Now it's turn of player ${userTurn}. Matches left ${matches}.`);
   
      if (userTurn === "computer") {
        userTurn = "gamer";
          if (matches > 4) {
            userTakesMatches = matches % 4 !== 0 ? matches % 4 : 1;
          } else if (matches <= 4) {
            userTakesMatches = matches - 1;
            alert(`Computer takes ${userTakesMatches} matches. And Win!`);
            break;
  
          }
          alert(`Computer takes ${userTakesMatches} matches.`);
          matches = matches - userTakesMatches;
          userTurn = "gamer";
          continue;
        } 
  
        if (userTurn === 'gamer'){
          let userTakesMatches: number = Number(
              prompt("How many matches do you want to take?");
  
              if (userTakesMatches <= 3 && userTakesMatches >= 1) {
                  matches = matches - userTakesMatches;
                  userTurn = "computer";
                }
                    }
  
      if (matches === 1) {
        const resultOfTheGame =
          userTurn === "computer" ? "You are win!" : "You are loose.";
        alert(resultOfTheGame);
      }
    }
  }
  
  nimGame();