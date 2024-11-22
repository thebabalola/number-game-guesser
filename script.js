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
