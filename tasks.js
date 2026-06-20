let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task-item d-flex justify-content-between align-items-center";

    div.innerHTML = `
      <div>
        <input type="checkbox"
          ${task.completed ? "checked" : ""}
          onchange="toggleTask(${index})"
        >
        <span class="${task.completed ? "completed" : ""}">
          ${task.text}
        </span>
      </div>

      <button class="btn btn-danger btn-sm"
        onclick="deleteTask(${index})">
        Delete
      </button>
    `;

    list.appendChild(div);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function logout() {
  window.location.href = "index.html";
}

renderTasks();
