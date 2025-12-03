const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const tasks = document.querySelectorAll(".task");
const modal = document.querySelector(".modal");
const toggleModal = document.getElementById("toggle-task");
const taskInput = document.getElementById("input");
const taskText = document.getElementById("text-input");
const modalBg = document.querySelector(".bg");
const addTask = document.getElementById("add-new-task");

let dropElement;
let taskData = {};

if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));

  for (const col in data) {
    const column = document.querySelector(`#${col}`);

    data[col].forEach((task) => {

      const div = document.createElement("div");
      div.classList.add("task");
      div.setAttribute("draggable", "true");
      div.innerHTML = `<h2>${task.title}</h2>
                    <p>${task.desc}</p>
                    <button>Delete</button>`;

      column.appendChild(div);

    });
  }
}

toggleModal.addEventListener("click", () => {
  modal.classList.add("active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

addTask.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");
  div.innerHTML = `<h2>${taskInput.value}</h2>
                    <p>${taskText.value}</p>
                    <button>Delete</button>`;
  todo.appendChild(div);

  //   counter and add task to local storage
  [todo, progress, done].forEach((col) => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".count");
    count.innerText = tasks.length;

    taskData[col.id] = Array.from(tasks).map((t) => {
      return {
        title: t.querySelector("h2"),
        desc: t.querySelector("p"),
      };
    });
    // console.log(taskData)
    localStorage.setItem("tasks", JSON.stringify(taskData));
  });

  //   add drag to new added task
  div.addEventListener("drag", () => {
    dropElement = div;
  });

  modal.classList.remove("active");

  taskInput.value = "";
  taskText.value = "";
});

// drag tasks initially
tasks.forEach((task) => {
  task.addEventListener("drag", () => {
    dropElement = task;
  });
});

// drag and drop functionality
const dragAndDropTask = (taskCol) => {
  taskCol.addEventListener("dragenter", (e) => {
    e.preventDefault();
    taskCol.classList.add("hover-over");
  });
  taskCol.addEventListener("dragleave", (e) => {
    e.preventDefault();
    taskCol.classList.remove("hover-over");
  });

  //   allow add or drop to another column
  taskCol.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  taskCol.addEventListener("drop", (e) => {
    e.preventDefault();
    taskCol.appendChild(dropElement);
    taskCol.classList.remove("hover-over");

    [todo, progress, done].forEach((col) => {
      const tasks = col.querySelectorAll(".task");
      const count = col.querySelector(".count");
      count.innerText = tasks.length;
      
        taskData[col.id] = Array.from(tasks).map((t) => {
          return {
            title: t.querySelector("h2"),
            desc: t.querySelector("p"),
          };
        });
        // console.log(taskData)
        localStorage.setItem("tasks", JSON.stringify(taskData));
    });
  });
};

dragAndDropTask(todo);
dragAndDropTask(progress);
dragAndDropTask(done);
