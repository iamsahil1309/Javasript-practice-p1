const todo = document.getElementById("todo") 
const progress = document.getElementById("progress") 
const done = document.getElementById("done") 
const tasks = document.querySelectorAll(".task")
const modal = document.querySelector('.modal')
const toggleModal = document.getElementById("toggle-task")
const modalBg = document.querySelector(".bg")

let dropElement 

tasks.forEach((task) => {
    task.addEventListener("drag", () => {
        dropElement = task
    })
})

const dragAndDropTask = (taskCol) => {
    taskCol.addEventListener("dragenter", (e) => {
        e.preventDefault()
        taskCol.classList.add("hover-over")
    })
    taskCol.addEventListener("dragleave", (e) => {
        e.preventDefault()
        taskCol.classList.remove("hover-over")
    })
    taskCol.addEventListener("dragover", (e) => {
        e.preventDefault()
    })
    taskCol.addEventListener("drop", (e) => {
        e.preventDefault()
        taskCol.appendChild(dropElement)
        taskCol.classList.remove("hover-over")
    })
}

dragAndDropTask(todo) 
dragAndDropTask(progress) 
dragAndDropTask(done) 

toggleModal.addEventListener("click", () => {
    modal.classList.add("active")
})

modalBg.addEventListener("click", () => {
    modal.classList.remove("active")
})