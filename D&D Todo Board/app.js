const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const tasks = document.querySelectorAll(".task");
const modal = document.querySelector(".modal");
const toggleModal = document.getElementById("toggle-task");
const modalBg = document.querySelector(".bg");
const addTask = document.getElementById("add-new-task");

let dropElement;

toggleModal.addEventListener("click", () => {
  modal.classList.add("active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

addTask.addEventListener("click", () => {
  const taskInput = document.getElementById("input").value;
  const taskText = document.getElementById("text-input").value;

  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");
  div.innerHTML = `<h2>${taskInput}</h2>
                    <p>${taskText}</p>
                    <button>Delete</button>`;
  todo.appendChild(div);

  div.addEventListener("drag", () => {
    dropElement = div;
  });

  modal.classList.remove("active");
});

tasks.forEach((task) => {
  task.addEventListener("drag", () => {
    dropElement = task;
  });
});

const dragAndDropTask = (taskCol) => {
  taskCol.addEventListener("dragenter", (e) => {
    e.preventDefault();
    taskCol.classList.add("hover-over");
  });
  taskCol.addEventListener("dragleave", (e) => {
    e.preventDefault();
    taskCol.classList.remove("hover-over");
  });
  taskCol.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  taskCol.addEventListener("drop", (e) => {
    e.preventDefault();
    taskCol.appendChild(dropElement);
    taskCol.classList.remove("hover-over");
  });
};

dragAndDropTask(todo);
dragAndDropTask(progress);
dragAndDropTask(done);
