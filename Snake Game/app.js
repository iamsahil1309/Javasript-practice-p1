const board = document.querySelector('.board')
const blockRow = 30
const blockCol = 30

const rows = Math.floor(board.clientWidth/blockRow)
const cols = Math.floor(board.clientHeight/blockRow)

for(let i = 0; i < rows * cols; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    board.appendChild(block)
}

