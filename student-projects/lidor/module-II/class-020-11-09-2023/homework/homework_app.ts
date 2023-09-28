function balloonGame() {
    let poppedBalloonsCount = 0;
    const totalBalloons = 15;
    document.body.style.maxWidth = '1080px';
    document.body.style.margin = '0 auto';
    document.body.style.overflowX = 'hidden';
    const scoreboard = document.createElement('div');
    const score_value = document.createElement('h1');
    score_value.innerHTML = (poppedBalloonsCount * 100).toString();
    score_value.style.color = 'white';
    scoreboard.style.width = '70px';
    scoreboard.style.height = '40px';
    scoreboard.style.backgroundColor = 'black';
    scoreboard.style.position = 'absolute';
    scoreboard.style.left = '0px';
    document.body.appendChild(scoreboard);
    scoreboard.appendChild(score_value);

    let showAlert = false; 

    for (let i = 0; i < totalBalloons; i++) {
        createBalloon(i);
    }

    function createBalloon(i : number) {
        const balloon = document.createElement('img');
        const randomX = Math.floor(Math.random() * 2000);
        const randomY = Math.floor(Math.random() * 10);
        balloon.setAttribute('id', 'my-id' + i);
        balloon.setAttribute('src', 'balloon.png');
        balloon.setAttribute('height', '120');
        balloon.setAttribute('width', '120');
        balloon.style.position = 'absolute';
        balloon.style.left = randomX + 'px';
        balloon.style.bottom = randomY + 'px';

        document.body.appendChild(balloon);

        function checkBalloonPosition() {
            const balloonRect = balloon.getBoundingClientRect();
            if (balloonRect.top <= 0 && !showAlert) {
                showAlert = true;
                setTimeout(function () {
                    alert('You lose!');
                    location.reload(); 
                }, 100);
            }
        }

        const positionCheckInterval = setInterval(checkBalloonPosition, 100);

        balloon.addEventListener('click', function () {
            balloon.setAttribute('src', 'pop_balloon.png');
            balloon.setAttribute('height', '150');
            balloon.setAttribute('width', '150');
            balloon.style.position = 'absolute';
            balloon.style.left = randomX + 'px';
            balloon.style.bottom = '0';
            clearInterval(positionCheckInterval);
            setTimeout(function () {
                document.body.removeChild(balloon);
                poppedBalloonsCount++;
                score_value.innerHTML = (poppedBalloonsCount * 100).toString();
                if (totalBalloons === poppedBalloonsCount) {
                    const banner = document.createElement('h1');
                    banner.innerHTML = 'YOU WIN!!!!!';
                    banner.style.fontSize = '200px';
                    document.body.appendChild(banner);
                    setTimeout(function () {
                        location.reload();
                    }, 500);
                }
            }, 500);
        });
    }
}

balloonGame();
