let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");
const categoryInput = document.getElementById("expenseCategory");

// Save to localStorage
function saveToStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Render all expenses
function renderExpenses() {
  expenseList.innerHTML = ""; // clear current list
  let total = 0;

  expenses.forEach((expense, index) => {
    total += expense.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.name} - $${expense.amount} (${expense.category})
      <button onclick="deleteExpense(${index})">X</button>
    `;

    expenseList.appendChild(li);
  });

  totalDisplay.textContent = total;
}

// Delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1); // remove from array
  saveToStorage();
  renderExpenses();
}

// Add new expense
addBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

console.log(name, amount, category, expenses);

  if (name === "" || isNaN(amount)) return;

  expenses.push({ name, amount, category });
  saveToStorage();
  renderExpenses();

  nameInput.value = "";
  amountInput.value = "";
  categoryInput.value = "";
})

// Initial render
renderExpenses();
console.log("Script loaded");