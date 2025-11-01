const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todosDiv = document.getElementById("todos");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  const todoItem = document.createElement("div");
  todoItem.textContent = taskText;
  todoItem.classList.add("todo-item");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    todosDiv.removeChild(todoItem);
  });

  todoItem.appendChild(deleteBtn);
  todosDiv.appendChild(todoItem);

  input.value = "";
});
