
function arcApp() {
  
    const menuPromptText = `Welcome to the Arc app!
This app will help you ("Noah"), arrange your animals.
  
  What would you like to do?
      1. Show all animals
      2. Show all rooms
      3. Pair up animals
      4. Pair up pairs
      5. Show problems`;
  
    let userInput = prompt(menuPromptText);
  
    while (userInput !== null) {
      handleUserInput(userInput);
      userInput = prompt(menuPromptText);
    }
  }
  
  function handleUserInput(userInput: string) {
    switch (userInput.trim()) {
      case "1":
        alert(animals);
        arcApp();
        break;
      case "2":
        alert(rooms);
        arcApp();
        break;
      case "3":
        pairUp();
        break;
      case "4":
        pairCouples();
        break;
      case "5":
        conflicts();
        break;
      default:
        alert("Please choose an option from the menu using their numbers.");
    }
  }

arcApp ();