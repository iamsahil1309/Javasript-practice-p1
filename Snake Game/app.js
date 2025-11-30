const board = document.querySelector(".board");
const blockRow = 30;
const blockCol = 30;

const rows = Math.floor(board.clientWidth / blockRow);
const cols = Math.floor(board.clientHeight / blockRow);

let blocks = [];
let snake = [
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 6 },
];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText = `${row}-${col}`;

    blocks[`${row}-${col}`] = block;
  }
}

const renderSnake = () => {
  snake.forEach((box) => {
    blocks[`${box.x}-${box.y}`].classList.add("fill");
  });
};
