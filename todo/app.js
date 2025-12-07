let todos = [];

window.addEventListener("load", () => {
  const saved = localStorage.getItem('todos')
  if(saved) {
    const parsed = JSON.parse(saved)

    todos = Array.isArray(parsed) ? parsed : Object.values(parsed)
  } else {
    todos = []
  }
  renderTodos()
})

const saveToLocalstorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text === "") return alert("please enter your task");

  todos.push({
    id: Date.now(),
    text: text,
    isEditing: false,
  });

  input.value = "";
  renderTodos();
  saveToLocalstorage()
  // console.log(todos);
}

function renderTodos() {
  const ul = document.getElementById("todoList");
  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    if (todo.isEditing === true) {
      li.innerHTML = `
        <input id='edit-${todo.id}' value=${todo.text}>
        <button onClick="saveTodo(${todo.id})">SAVE</button>
        <button onClick="cancelTodo(${todo.id})">CANCEL</button>
        `;
    } else {
      li.innerHTML = `
          <span>${todo.text}</span>
            <button onClick="editTodo(${todo.id})">EDIT</button>
        <button onClick="deleteTodo(${todo.id})">DELETE</button>
        `;
    }

    ul.appendChild(li);
  });
}

function editTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: true } : todo
  );
  renderTodos();
  saveToLocalstorage()
}

function saveTodo(id) {
  const input = document.getElementById(`edit-${id}`);
  const newText = input.value.trim();
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
  );
  saveToLocalstorage()
  renderTodos();
}

function cancelTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: fasle } : todo
  );
  saveToLocalstorage()
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
  saveToLocalstorage()
  renderTodos()
}
