let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const startOver = document.querySelector(".resultParas");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Please enter a valid number!")
    } else if(guess < 1) {
        alert("Please enter a valid number!");
    } else if(guess  > 100) {
        alert("Please enter a valid number!");
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess) {
    if(guess  === randomNumber) {
        displayMessage(`You Guessed it Right!`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number was too low`)
    } else if ( guess > randomNumber) {
        displayMessage(`Number was too high`)
    }
}   

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++  
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    console.log(p)
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame () {
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener("click",() => {
        randomNumber = parseInt((Math.random()*100) + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}