const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole'); 
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {  
        if (square.id === hitPosition) {  
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    setInterval(randomSquare, 500);
}

moveMole()
randomSquare()
