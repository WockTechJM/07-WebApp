const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add a new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Add click to mark completed
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggling completed
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});

// Optional: press Enter key to add
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});