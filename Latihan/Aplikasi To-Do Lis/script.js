let inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.placeholder = "Masukkan tugas baru...";
inputTask.id = "task-input";

let btnAdd = document.createElement("button");
btnAdd.textContent = "Tambah";
btnAdd.id = "add-task";

let taskList = document.createElement("ul");
taskList.id = "task-list";

function addTask(taskText, completed) {
  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  checkbox.addEventListener("change", function () {
    taskSpan.style.textDecoration = this.checked ? "line-through" : "none";
    deleteBtn.disabled = !this.checked;
    saveTasks();
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.disabled = true;
  deleteBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
  });

  if (completed) {
    checkbox.checked = true;
    taskSpan.style.textDecoration = "line-through";
    deleteBtn.disabled = false;
  }

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#task-list li").forEach(function (li) {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.querySelector("input[type='checkbox']").checked
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    JSON.parse(savedTasks).forEach(function (task) {
      addTask(task.text, task.completed);
    });
  }
}

btnAdd.onclick = function () {
  let taskText = inputTask.value.trim();
  if (taskText !== "") {
    addTask(taskText, false);
    inputTask.value = "";
    saveTasks();
  }
};

inputTask.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    btnAdd.click();
  }
});

let outputDiv = document.getElementById("output5");
outputDiv.appendChild(inputTask);
outputDiv.appendChild(btnAdd);
outputDiv.appendChild(taskList);

loadTasks();