const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition = null;
let currentTime = 60;
let timerId = null;


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole'); 
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
    console.log("Mole is at: ", hitPosition);
}

squares.forEach(square => {
    square.addEventListener('click', () => {  
        console.log("Clicked square: ", square.id); 

        if (square.id === hitPosition) {  
            result++;
            score.textContent = result;
            hitPosition = null;  
            console.log("Score updated: ", result); 
        }
    });
});


function moveMole() {
    timerId = setInterval(randomSquare, 800); 
}


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("Game Over! Your final score is " + result);
    }
}


moveMole();
let countDownTimerId = setInterval(countDown, 1000); 
