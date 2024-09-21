const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();
    
    if (!task) {
      alert("Please write down a task");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="checkbox" onclick="toggleStrikeThrough(this)">
        <span>${task}</span>
      </label>
      <span class="delete-btn" onclick="deleteTask(this)">Delete</span>
    `;

    listContainer.appendChild(li);

    inputBox.value = "";
}

function deleteTask(element) {
    const li = element.parentElement;
    listContainer.removeChild(li);
}

function toggleStrikeThrough(checkbox) {
    const listItem = checkbox.parentElement.parentElement;
    if (checkbox.checked) {
        listItem.style.textDecoration = "line-through";
    } else {
        listItem.style.textDecoration = "none";
    }
}
