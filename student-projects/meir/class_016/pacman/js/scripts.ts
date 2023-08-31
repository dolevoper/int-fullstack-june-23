const myObj = document.getElementById('world') as HTMLInputElement;

// 1 => <div class='wall'></div>
// 2 => <div class='coin'></div>
// 3 => <div class='ground'></div>
// 4 => <div class='ghost'></div>
// 5 => <div class='pacman'></div>

let pacman = {  //pacman position in start
	x: 6,
	y: 4
}

const map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
	[1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
	[1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
	[1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
	[1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

drawBoard();

function drawBoard() {

	myObj.innerHTML = '';

	for (let y = 0; y < map.length; y++) {

		for (let x = 0; x < map[y].length; x++) {

			if (map[y][x] === 1) {
				myObj.innerHTML += "<div class='wall'></div>";
			}
			else if (map[y][x] === 2) {
				myObj.innerHTML += "<div class='coin'></div>";
			}
			else if (map[y][x] === 3) {
				myObj.innerHTML += "<div class='ground'></div>";
			}
			else if (map[y][x] === 4) {
				myObj.innerHTML += "<div class='ghost'></div>";
			}
			else if (map[y][x] === 5) {
				myObj.innerHTML += "<div class='pacman' id='pacman'></div>";
			}

		}

		myObj.innerHTML += "<br>";
	}
}

document.onkeydown = function (event: any) {

	if (event.keyCode === 37) {              		// PACMAN MOVE LEFT
		if (map[pacman.y][pacman.x - 1] !== 1) {	// check if its not wall (1 = wall)
			map[pacman.y][pacman.x] = 3;			// ground
			pacman.x = pacman.x - 1;				//
			map[pacman.y][pacman.x] = 5;			// 5 = pacman
			drawBoard();
			setPacmanProfile(6, 6);
		}
	}
	else if (event.keyCode === 38) {         		// PACMAN MOVE UP
		if (map[pacman.y - 1][pacman.x] !== 1) {	// check if its not wall (1 = wall)
			map[pacman.y][pacman.x] = 3;			// 3 = ground
			pacman.y = pacman.y - 1;				//
			map[pacman.y][pacman.x] = 5;			// 5 = pacman
			drawBoard();
			setPacmanProfile(7, -38);
		}
	}
	else if (event.keyCode === 39) {         		// PACMAN MOVE RIGHT
		if (map[pacman.y][pacman.x + 1] !== 1) {	// check if its not wall (1 = wall)
			map[pacman.y][pacman.x] = 3;			// 3 = ground
			pacman.x = pacman.x + 1;				//
			map[pacman.y][pacman.x] = 5;			// 5 = pacman
			drawBoard();
			setPacmanProfile(-36, 6);
		}
	}
	else if (event.keyCode === 40) {         		// PACMAN MOVE DOWN
		if (map[pacman.y + 1][pacman.x] !== 1) {	// check if its not wall (1 = wall)
			map[pacman.y][pacman.x] = 3;			// 3 = ground
			pacman.y = pacman.y + 1;				//
			map[pacman.y][pacman.x] = 5;			// 5 = pacman
			drawBoard();
			setPacmanProfile(-38, -39);
		}
	}

}

function setPacmanProfile(xAxis:number, yAxis:number){

	const myPacmanObj = document.getElementById("pacman") as HTMLInputElement;
	
	let pacProfile = xAxis +'px ' + yAxis + 'px';
	myPacmanObj.style.backgroundPosition = pacProfile;

}