// DOM Elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Event Listeners
addTaskBtn.addEventListener("click", addTask);

// Add Task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";

  // Add event listeners to the new buttons
  const editBtn = taskItem.querySelector(".edit-btn");
  const deleteBtn = taskItem.querySelector(".delete-btn");

  editBtn.addEventListener("click", () => editTask(taskItem));
  deleteBtn.addEventListener("click", () => deleteTask(taskItem));
}

// Edit Task
function editTask(taskItem) {
  const taskSpan = taskItem.querySelector("span");
  const newTask = prompt("Edit your task:", taskSpan.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.textContent = newTask.trim();
  }
}

// Delete Task
function deleteTask(taskItem) {
  taskItem.remove();
}
