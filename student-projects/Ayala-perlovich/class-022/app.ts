

// console.log("connected");

// // Function to ask for the user's name, username, and password
// function getUserData() {
//   const name = prompt("What is your name?");
//   const username = prompt("Username:");
//   const password = prompt("Password:");
  
 
//   const savedUserData = JSON.parse(localStorage.getItem('userData'));

//   if (savedUserData && savedUserData.username === username && savedUserData.password === password) {
//     alert(`Welcome back, ${name}! Your previous score was ${savedUserData.score}.`);
//   } else {
//     alert("Good luck with your new browser!");
   
//     localStorage.setItem('userData', JSON.stringify({ name, username, password, score: 0 }));
//   }
// }

// // Check if the user data exists
// const savedUserDataStr = localStorage.getItem('userData');
// const savedUserData = savedUserDataStr ? JSON.parse(savedUserDataStr) : null;

// if (!savedUserData) {
//   // If user data doesn't exist, ask for it and store it in browser memory
//   getUserData();
// }



// function randomPosition() {
//   const position = {
//     top: `${Math.random() * (window.innerHeight - 100)}px`,
//     left: `${Math.random() * (window.innerWidth - 100)}px`,
//   };
//   return position;
// }

// function createBalloon() {
//   const balloon = document.createElement("div");
//   balloon.className = "soaring-balloon";
//   const img = document.createElement("img");
//   img.src = "./balloon. img.png";
//   img.draggable = false;
//   balloon.appendChild(img);

//   const position = randomPosition();
//   balloon.style.top = position.top;
//   balloon.style.left = position.left;

//   document.querySelector(".balloon-container").appendChild(balloon);

//   balloon.addEventListener("click", function() {
//     balloon.remove();
    
//     // Increment the user's score when a balloon is clicked
//     savedUserData.score = (savedUserData.score || 0) + 1;
    
//     const balloonsLeft = document.querySelectorAll(".soaring-balloon").length;
//     if (balloonsLeft === 0) {
//       alert(`Start again. Your score is now ${savedUserData.score}.`);
//       createBalloons();
//     }
    
//     // Update the user data in browser memory
//     localStorage.setItem('userData', JSON.stringify(savedUserData));
//   });
// }

// function createBalloons() {
//   for (let i = 0; i < 15; i++) {
//     createBalloon();
//   }
// }


// createBalloons();



//***************************************8 */
console.log("connected");


function randomPosition() {
  const position = {
    top: `${Math.random() * (window.innerHeight - 100)}px`,
    left: `${Math.random() * (window.innerWidth - 100)}px`,
  };
  return position;
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "soaring-balloon";
  const img = document.createElement("img");
  img.src = "./balloon. img.png";
  img.draggable = false;
  balloon.appendChild(img);

  const position = randomPosition();
  balloon.style.top = position.top;
  balloon.style.left = position.left;

  document.querySelector(".balloon-container").appendChild(balloon) ;

 
  balloon.addEventListener("click", function() {
    balloon.remove();
    
    
    const balloonsLeft = document.querySelectorAll(".soaring-balloon").length;
    if (balloonsLeft === 0) {
      alert("Start again");
      createBalloons(); 
    }
  });
}


function createBalloons() {
  for (let i = 0; i < 15; i++) {
    createBalloon();
  }
}

createBalloons();




document.addEventListener('DOMContentLoaded', function() {
  // Check if the user is already logged in
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    showDashboard(savedUsername);
  }
});

function login() {
  const username:any = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;

  // Simulate authentication (in a real app, this should be done on the server)
  if (username && password) {
    // Save username to local storage
    if (remember) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }

    showDashboard(username);
  } else {
    alert('Invalid username or password');
  }
}

function showDashboard(username:any) {
  // Hide login container
  document.login.getElementById('login-container').style.display = 'none';
  
  // Show dashboard container
  const dashboardContainer = document.getElementById('dashboard-container') as HTMLAnchorElement;
  dashboardContainer.style.display = 'block';

  // Display basic info (customize this part as needed)
  const dashboardInfo = document.getElementById('dashboard-info') as HTMLAnchorElement;
  dashboardInfo.textContent = `Welcome, ${username}!`;

  // Retrieve saved preferences (light mode, F or C, etc.) and display them
  const savedPreferences = localStorage.getItem('preferences');
  if (savedPreferences) {
    const preferences = JSON.parse(savedPreferences);
    // Customize this part to display user preferences on the dashboard
    console.log('User preferences:', preferences);
  }
}



console.log("connected");

function randomPosition() {
  const position = {
    top: `${Math.random() * (window.innerHeight - 100)}px`,
    left: `${Math.random() * (window.innerWidth - 100)}px`,
  };
  return position;
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "soaring-balloon";
  const img = document.createElement("img");
  img.src = "./balloon. img.png";
  img.draggable = false;
  balloon.appendChild(img);

  const position = randomPosition();
  balloon.style.top = position.top;
  balloon.style.left = position.left;

  document.querySelector(".balloon-container").appendChild(balloon);

  balloon.addEventListener("click", function () {
    balloon.remove();

    const balloonsLeft = document.querySelectorAll(".soaring-balloon").length;
    if (balloonsLeft === 0) {
      alert("Start again");
      createBalloons();
    }
  });
}

function createBalloons() {
  for (let i = 0; i < 15; i++) {
    createBalloon();
  }
}

createBalloons();

document.addEventListener('DOMContentLoaded', function () {
  // Check if the user is already logged in
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    showDashboard(savedUsername);
  }
});

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;

  // Simulate authentication (in a real app, this should be done on the server)
  if (username && password) {
    // Save username to local storage
    if (remember) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }

    showDashboard(username);
  } else {
    alert('Invalid username or password');
  }
}

function showDashboard(username) {
  // Hide login container
  document.getElementById('login-container').style.display = 'none';

  // Show dashboard container
  const dashboardContainer = document.getElementById('dashboard-container');
  dashboardContainer.style.display = 'block';

  // Display basic info (customize this part as needed)
  const dashboardInfo = document.getElementById('dashboard-info');
  dashboardInfo.textContent = `Welcome, ${username}!`;

  // Retrieve saved preferences (light mode, F or C, etc.) and display them
  const savedPreferences = localStorage.getItem('preferences');
  if (savedPreferences) {
    const preferences = JSON.parse(savedPreferences);
    // Customize this part to display user preferences on the dashboard
    console.log('User preferences:', preferences);
  }
}
function login() {
  console.log("Login button clicked");
  // You can add your login logic here
  // For now, just redirect to another page
  window.location.href = "./dashboard.html";
}