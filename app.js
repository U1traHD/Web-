function addTask() {
  let input = document.querySelector("#new-task");
  var newTaskContent = input.value.trim();

  if (newTaskContent) {
    let list = document.querySelector("#tasks-list");
    let newTask = document.createElement("li");
    newTask.textContent = newTaskContent;
    newTask.onclick = function () {
      this.classList.toggle("done");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      this.parentElement.remove();
    };
    newTask.appendChild(deleteBtn);

    list.appendChild(newTask);
    input.value = "";
  } else {
    alert("Поле ввода не должно быть пустым");
  }
}

// Обработчик нажатия Enter для добавления задач
document.querySelector("#new-task").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function toggleTheme() {
  let body = document.body;
  body.classList.toggle("dark-theme");
}
