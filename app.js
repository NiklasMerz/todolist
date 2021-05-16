// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", CheckDelete);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //prevent Form from submitting
  event.preventDefault();

  // ToDo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //apend to list
  todoList.appendChild(todoDiv);

  //clear
  todoInput.value = "";
}

function CheckDelete(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", transitionend);
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function transitionend(e) {
  const item = e.target;
  item.remove();
}

function filterTodo(e) {
  const todos = todoList.childNodes;

  for (let i=1; i <=todos.length;i++){
    switch (e.target.value){
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if (todos[i].classList.contains("completed")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
      case "uncompleted":
        if (!todos[i].classList.contains("completed")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
    }
  }
}
