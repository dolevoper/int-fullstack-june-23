let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';
let gameActive = true;

function displayBoard() {
    let boardString = "Tic Tac Toe\n\n";
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            boardString += board[row][col] || ' ';
            if (col < 2) {
                boardString += ' | ';
            }
        }
        if (row < 2) {
            boardString += '\n---------\n';
        }
    }
    alert(boardString);
}

function checkGameOver() {
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] === currentPlayer &&
            board[i][1] === currentPlayer &&
            board[i][2] === currentPlayer
        ) {
            return true;
        }

        if (
            board[0][i] === currentPlayer &&
            board[1][i] === currentPlayer &&
            board[2][i] === currentPlayer
        ) {
            return true;
        }
    }

    if (
        board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer
    ) {
        return true;
    }

    if (
        board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer
    ) {
        return true;
    }

    return false;
}

function checkDraw() {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}

function makeMove(position) {
    let row;
    let col;

    switch (position) {
        case '1':
            row = 0;
            col = 0;
            break;
        case '2':
            row = 0;
            col = 1;
            break;
        case '3':
            row = 0;
            col = 2;
            break;
        case '4':
            row = 1;
            col = 0;
            break;
        case '5':
            row = 1;
            col = 1;
            break;
        case '6':
            row = 1;
            col = 2;
            break;
        case '7':
            row = 2;
            col = 0;
            break;
        case '8':
            row = 2;
            col = 1;
            break;
        case '9':
            row = 2;
            col = 2;
            break;
        default:
            alert('Invalid move. Try again.');
            return;
    }

    if (board[row][col] !== '') {
        alert('Invalid move. Try again.');
        return;
    }

    board[row][col] = currentPlayer;
    displayBoard();

    if (checkGameOver()) {
        alert(`Player ${currentPlayer} wins!`);
        gameActive = false;
    } else if (checkDraw()) {
        alert('It\'s a draw!');
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

alert("Welcome to Tic Tac Toe!\n\nRules:\n1. Players take turns marking a square with their symbol ('X' or 'O').\n2. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins.\n3. If all squares are filled and no player has won, it's a draw.");
displayBoard();

while (gameActive) {
    const position = prompt(`Player ${currentPlayer}, enter a position (1-9):`);
    makeMove(position);
}
