const app = document.getElementById("app");

// Create title
const title = document.createElement("h2");
title.textContent = "To-Do List";
app.appendChild(title);

// Create input field
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a task...";
app.appendChild(input);

// Create Add button
const addBtn = document.createElement("button");
addBtn.textContent = "Add";
app.appendChild(addBtn);

// Create task list
const list = document.createElement("ul");
app.appendChild(list);

// Add task on button click
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    // Mark as done on click
    span.addEventListener("click", () => {
      span.classList.toggle("done");
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
      list.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
  }
});
