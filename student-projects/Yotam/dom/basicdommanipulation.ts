
interface FootballPlayer {
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
    image: string;
}

const playerList: FootballPlayer[] = [
    {
        firstName: "Pele",
        lastName: "Nascimento",
        age: 80,
        isAlive: false,
        image: "pele.jpeg"
    },
    {
        firstName: "Diego",
        lastName: "Maradona",
        age: 60,
        isAlive: false,
        image: "maradona.jpg",
    },
    {
        firstName: "Lionel",
        lastName: "Messi",
        age: 34,
        isAlive: true,
        image: "messi.jpg"
    },
    {
        firstName: "Cristiano",
        lastName: "Ronaldo",
        age: 36,
        isAlive: true,
        image: "ronaldo.jpeg"
    },
    {
        firstName: "Franz",
        lastName: "Beckenbauer",
        age: 76,
        isAlive: true,
        image: "beckenbauer.jpeg"
    },
    {
        firstName: "Johan",
        lastName: "Cruyff",
        age: 68,
        isAlive: false,
        image: "cruyff.jpg"
    },
];

    function displayFootballPlayers() {
        const html = `

            <ul>
                ${playerList.map(player => `
                    <li>
                        <img src="pics/${player.image}" alt="${player.firstName} ${player.lastName}" width="200"><br>
                        <strong>Player Name: </strong> ${player.firstName} ${player.lastName}<br>
                        <strong>Age: </strong> ${player.age}<br>
                        <strong>Is he still alive? </strong> ${player.isAlive ? "Yes" : "No"}
                    </li><br>
                `).join('')}
            </ul>
        `;

        const footballPlayersList = document.getElementById("playerList");

        if (footballPlayersList) {
            footballPlayersList.innerHTML = html;
        }
        }

    document.addEventListener("DOMContentLoaded", function () {
        displayFootballPlayers();
    });

