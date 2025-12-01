const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const restartButton = document.querySelector(".btn-restart");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");

const rowBlock = 30;
const colBlock = 30;

const rows = Math.floor(board.clientWidth / rowBlock);
const cols = Math.floor(board.clientHeight / colBlock);

startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    renderSnake();
  }, 300);
});

restartButton.addEventListener("click", restartGame);

function restartGame() {
  // remove already exist food and snake
  blocks[`${food.x} - ${food.y}`].classList.remove("food")

  // snake.forEach(box => {
  //   blocks[`${box.x} - ${box.y}`].classList.remove("fill")
  // })

  modal.style.display = "none";
  snake = [{ x: 1, y: 4 }];
  direction = "down"
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  intervalId = setInterval(() => {
    renderSnake();
  }, 300);
}

let blocks = [];
let snake = [{ x: 1, y: 4 }];
let intervalId = null;
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

let direction = "right";

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);

    blocks[`${row} - ${col}`] = block;
  }
}

const renderSnake = () => {
  let head = null;

  blocks[`${food.x} - ${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  // food and consume food
  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x} - ${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x} - ${food.y}`].classList.add("food");

    snake.unshift(head);
  }
  // game over
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    modal.style.display = "flex";
    startGameModal.style.display = "none";
    gameOverModal.style.display = "flex";
  }

  snake.forEach((box) => {
    blocks[`${box.x} - ${box.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();

  snake.forEach((box) => {
    blocks[`${box.x} - ${box.y}`].classList.add("fill");
  });
};

addEventListener("keydown", (e) => {
  // console.log(e.key)
  if (e.key == "ArrowUp") {
    direction = "up";
  } else if (e.key == "ArrowDown") {
    direction = "down";
  } else if (e.key == "ArrowRight") {
    direction = "right";
  } else if (e.key == "ArrowLeft") {
    direction = "left";
  }
});
