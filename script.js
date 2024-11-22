// Game variables
let secretNumber;
let attempts;
let gameOver;

// DOM elements
const difficultySelect = document.getElementById('difficulty');
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const newGameBtn = document.getElementById('new-game-btn');

// Event listeners
difficultySelect.addEventListener('change', startNewGame);
guessForm.addEventListener('submit', handleGuess);
newGameBtn.addEventListener('click', startNewGame);

// Initialize game
startNewGame();

function startNewGame() {
    const difficulty = difficultySelect.value;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = difficulty === 'easy' ? 15 : difficulty === 'medium' ? 10 : 5;
    gameOver = false;

    guessInput.value = '';
    guessInput.disabled = false;
    guessForm.querySelector('button').disabled = false;
    messageElement.textContent = 'Start guessing!';
    messageElement.classList.remove('game-over');
    attemptsElement.textContent = attempts;
    newGameBtn.style.display = 'none';

    console.log('New game started. Secret number:', secretNumber); 
}


function handleGuess(e) {
    e.preventDefault();
    if (gameOver) return;

    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts--;
    attemptsElement.textContent = attempts;

    if (userGuess === secretNumber) {
        endGame(`Congratulations! You guessed the number ${secretNumber}!`);
    } else if (attempts === 0) {
        endGame(`Game over! The number was ${secretNumber}.`);
    } else if (userGuess < secretNumber) {
        setMessage('Too low! Try a higher number.');
    } else {
        setMessage('Too high! Try a lower number.');
    }

    guessInput.value = '';
}

function setMessage(msg) {
    messageElement.textContent = msg;
    messageElement.style.animation = 'none';
    messageElement.offsetHeight;
    messageElement.style.animation = null;
}

function endGame(msg) {
    setMessage(msg);
    messageElement.classList.add('game-over');
    gameOver = true;
    guessInput.disabled = true;
    guessForm.querySelector('button').disabled = true;
    newGameBtn.style.display = 'inline-block';
}


