let boxes = document.querySelectorAll(".box")
let winBox = document.querySelector(".msg-container")
let winMsg = document.getElementById("msg")
let newGame = document.getElementById("new-btn")
let restart = document.getElementById("reset")



const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let playerX = true
let count = 0

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetGame = () => {
    playerX = true
    count = 0
    enableBoxes()
    winBox.classList.add("hide")
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(playerX) {
            box.innerHTML = "X"
            playerX = false
        } else {
            box.innerHTML = "O"
            playerX = true
        }
        box.disabled = true
        count++

        let isWinner = checkWinner()

        if(count === 9 && !isWinner) {
            gameDraw()
        }
    })
})

const gameDraw = () => {
    winMsg.innerText = 'Game Draw!'
     msgContainer.classList.remove("hide");
     disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern) {
        pos1 = boxes[pattern[0]].innerText
        pos2 = boxes[pattern[1]].innerText
        pos3 = boxes[pattern[2]].innerText
        // console.log(pos1,pos2,pos3)
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3) {
                // console.log("winner")
                showWinner(pos1)
            }
        }
    }
}

const showWinner = (winner) => {
    winBox.classList.remove("hide")
    winMsg.innerText = `Game Over. Winner is ${winner}`
    disabledBoxes()
}

newGame.addEventListener("click", resetGame)
restart.addEventListener("click", resetGame)