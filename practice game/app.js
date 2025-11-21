let randomNumber = parseInt(( Math.random() * 100) + 1)

const userInput = document.querySelector("#inputField")
const submit = document.querySelector("#submit")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".remaining")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".result")

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener("click",(e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess (guess) {
    if(isNaN(guess)) {
        alert("please enter valid number")
    } else if (guess < 1) {
        alert("please enter valid number");
    } else if(guess > 100) {
        alert("please enter valid number");
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess) {
    if(guess === randomNumber) {
        displayMessage(`you are right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`number was too low`)
    } else if (guess > randomNumber) {
        displayMessage('number was too high')
    }
}

function displayGuess (guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}