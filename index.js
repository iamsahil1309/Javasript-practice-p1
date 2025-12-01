class User {
  constructor(username,email,password) {
    this.username = username
    this.password = password
    this.email = email
  }

  encryptPassword () {
    return `${this.password}abc`
  }
}

class Teacher extends User {
  constructor(username) {
    super(username)
  }

  addCourse() {
    console.log(`course added by ${this.username}`)
  }
}

const tea = new Teacher("yugji")
tea.addCourse()
console.log(tea instanceof User)



const arr = []
%DebugPrint(arr)


let randomNumber = Math.random()



// const board = document.querySelector(".board");
// const blockRow = 30;
// const blockCol = 30;

// const rows = Math.floor(board.clientWidth / blockRow);
// const cols = Math.floor(board.clientHeight / blockRow);

// let blocks = [];
// let snake = [
//   { x: 1, y: 4 },
//   { x: 1, y: 5 },
//   { x: 1, y: 6 },
// ];

// let direction = "left";

// for (let row = 0; row < rows; row++) {
//   for (let col = 0; col < cols; col++) {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     board.appendChild(block);
//     // block.innerText = `${row}-${col}`;

//     blocks[`${row}-${col}`] = block;
//   }
// }

// const renderSnake = () => {
//   snake.forEach((box) => {
//     blocks[`${box.x}-${box.y}`].classList.add("fill");
//   });
// };
