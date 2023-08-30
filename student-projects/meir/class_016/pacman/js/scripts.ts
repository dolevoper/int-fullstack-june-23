let myObj = document.getElementById('world') as HTMLInputElement;

let myPacmanObj = document.getElementById("pacman") as HTMLInputElement;
//let myPacmanObj = document.getElementsByClassName("pacman") as HTMLCollection;

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

	for (let x = 0; x < map.length; x++) {

		for (let y = 0; y < map[x].length; y++) {

			if (map[x][y] === 1) {
				myObj.innerHTML += "<div class='wall'></div>";
			}
			else if (map[x][y] === 2) {
				myObj.innerHTML += "<div class='coin'></div>";
			}
			else if (map[x][y] === 3) {
				myObj.innerHTML += "<div class='ground'></div>";
			}
			else if (map[x][y] === 4) {
				myObj.innerHTML += "<div class='ghost'></div>";
			}
			else if (map[x][y] === 5) {
				myObj.innerHTML += "<div class='pacman' id='pacman'></div>";
			}

		}

		myObj.innerHTML += "<br>";
	}
}

document.onkeydown = function (event: any) {

	if (event.keyCode === 37) {              // PACMAN MOVE LEFT
		if (map[pacman.y][pacman.x - 1] !== 1) {
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x - 1;
			map[pacman.y][pacman.x] = 5;
			drawBoard();
		}
		myPacmanObj.style.backgroundPosition = "6px 6px";

	}
	else if (event.keyCode === 38) {         // PACMAN MOVE UP
		if (map[pacman.y - 1][pacman.x] !== 1) {
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y - 1;
			map[pacman.y][pacman.x] = 5;
			drawBoard();
		}

		myPacmanObj.style.backgroundPosition = "7px -38px";

	}
	else if (event.keyCode === 39) {         // PACMAN MOVE RIGHT
		if (map[pacman.y][pacman.x + 1] !== 1) {
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x + 1;
			map[pacman.y][pacman.x] = 5;
			drawBoard();
		}
		myPacmanObj.style.backgroundPosition = "-36px 6px";
	}
	else if (event.keyCode === 40) {         // PACMAN MOVE DOWN
		if (map[pacman.y + 1][pacman.x] !== 1) {
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y + 1;
			map[pacman.y][pacman.x] = 5;
			drawBoard();
		}
		myPacmanObj.style.backgroundPosition = "-38px -39px";
	}

}
