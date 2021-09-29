const nameInpt = document.querySelector("#name-input");
const nameButton = document.querySelector("#name-button");
const nameSpan = document.querySelector("#name-span");
let moneySpan = document.querySelector("#money-span");
const nameChanger = document.querySelector("#nameChanger");
const welcome = document.querySelector("#welcome");
const welcomeSpan = document.querySelector("#welcome-span");
const closeModalBtn = document.querySelector("#closeModalBtn");
// income vars
const incomeNameInput = document.querySelector("#income-name-input");
const incomeAmountInput = document.querySelector("#income-amount-input");
const incomeBtn = document.querySelector("#income-btn");
const clearIncomeBtn = document.querySelector("#clearIncomeBtn");
// expense vars
const expenseNameInput = document.querySelector("#expense-name-input");
const expenseAmountInput = document.querySelector("#expense-amount-input");
const expenseBtn = document.querySelector("#expense-btn");
const clearExpenseBtn = document.querySelector("#clearExpenseBtn");

let currentBalance = 0;
let overallIncome = 0;
let overallExpense = 0;
let incomeArr = [];
let expenseArr = [];

// localStorage.clear();

// Event Listeners

// close modal

closeModalBtn.addEventListener("click", () => {
	const changeNameModal = document.querySelector(".changeNameModal");
	changeNameModal.style.display = "none";
});

// event that restrics amount of number inputed to 10

incomeAmountInput.addEventListener("keypress", () => {
	maxlength = 10;
	if (incomeAmountInput.value.length > maxlength) {
		incomeAmountInput.value = incomeAmountInput.value.slice(0, maxlength);
	}
});

// event that restrics amount of number inputed to 10

expenseAmountInput.addEventListener("keypress", () => {
	maxlength = 10;
	if (expenseAmountInput.value.length > maxlength) {
		expenseAmountInput.value = expenseAmountInput.value.slice(0, maxlength);
	}
});

// clear all incomes

clearIncomeBtn.addEventListener("click", () => {
	localStorage.setItem("localIncomeData", "[]");
	window.location.reload();
	currentBalance =
		parseInt(localStorage.getItem("current-balance")) -
		parseInt(localStorage.getItem("overallIncome"));

	localStorage.setItem("current-balance", currentBalance);
	localStorage.setItem("overallIncome", "0");

	moneyColor();
	moneySpan.innerHTML = "$" + currentBalance;
});

// clear all expenses

clearExpenseBtn.addEventListener("click", () => {
	localStorage.setItem("localExpenseData", "[]");
	window.location.reload();
	let allIncomes = parseInt(localStorage.getItem("overallIncome"));
	currentBalance =
		parseInt(localStorage.getItem("overallExpense")) +
		parseInt(localStorage.getItem("current-balance"));

	localStorage.setItem("current-balance", currentBalance);
	localStorage.setItem("overallExpense", "0");

	moneyColor();
	moneySpan.innerHTML = "$" + currentBalance;
});

// Setting Income

incomeBtn.addEventListener("click", () => {
	if (incomeNameInput.value && incomeAmountInput.value) {
		showIncomeData();
		getOverallIncome();
		let incomeAmount = parseInt(incomeAmountInput.value);
		let localBalance = parseInt(localStorage.getItem("current-balance"));
		currentBalance = localBalance + incomeAmount;
		overallIncome =
			parseInt(localStorage.getItem("overallIncome")) + incomeAmount;
		moneySpan.innerHTML = "$" + currentBalance;
		localStorage.setItem("current-balance", currentBalance);
		localStorage.setItem("overallIncome", overallIncome);

		moneyColor();

		incomeNameInput.value = "";
		incomeAmountInput.value = "";
	} else {
		alert("fill both fields");
	}
});

// setting expenses

expenseBtn.addEventListener("click", () => {
	if (expenseNameInput.value && expenseAmountInput.value) {
		showExpenseData();
		getOverallExpense();
		let expenseAmount = parseInt(expenseAmountInput.value);
		let localBalance = parseInt(localStorage.getItem("current-balance"));
		currentBalance = localBalance - expenseAmount;
		overallExpense =
			parseInt(localStorage.getItem("overallExpense")) + expenseAmount;

		moneySpan.innerHTML = "$" + currentBalance;
		localStorage.setItem("current-balance", currentBalance);
		localStorage.setItem("overallExpense", overallExpense);

		moneyColor();
		expenseNameInput.value = "";
		expenseAmountInput.value = "";
	} else {
		alert("fill both expense");
	}
});

// Setting Name Event

nameButton.addEventListener("click", () => {
	if (nameInpt.value) {
		localStorage.setItem("name", nameInpt.value);
		nameSpan.innerHTML = localStorage.getItem("name");
		nameInpt.style.display = "none";
		nameButton.style.display = "none";
		welcome.style.display = "block";
		welcomeSpan.innerHTML = localStorage.getItem("name");
		checkName();
		nameInpt.value = "";
	} else {
		alert("Please, Enter Your Name");
	}
});

// Setting Name in Modal

nameChanger.addEventListener("click", () => {
	const changeNameModal = document.querySelector(".changeNameModal");
	const nameChangerInput = document.querySelector("#nameChangerInput");
	changeNameModal.style.display = "flex";
	nameChangerBtn.addEventListener("click", () => {
		changeNameModal.style.display = "none";
		localStorage.setItem("name", nameChangerInput.value);
		nameSpan.innerHTML = localStorage.getItem("name");
		welcomeSpan.innerHTML = localStorage.getItem("name");

		if (!nameChangerInput.value) {
			nameInpt.style.display = "block";
			nameButton.style.display = "block";
			welcome.style.display = "none";
			nameSpan.innerHTML = "Guest";
			checkName();
		}
	});
});

// Functions

// checking if name is inputted
checkName = () => {
	let name = localStorage.getItem("name");
	if (name !== "") {
		nameChanger.style.display = "block";
	} else {
		nameChanger.style.display = "none";
	}
};

// dynamicly changing color of moneyspan in balance
moneyColor = () => {
	currentBalance = parseInt(localStorage.getItem("current-balance"));
	if (currentBalance < 0) {
		moneySpan.style.color = "var(--dangerRed)";
	} else {
		moneySpan.style.color = "var(--darkGreen)";
	}
};

storeNameData = () => {
	if (localStorage.name) {
		nameSpan.innerHTML = localStorage.getItem("name");
		welcomeSpan.innerHTML = localStorage.getItem("name");
		nameInpt.style.display = "none";
		nameButton.style.display = "none";
		welcome.style.display = "block";
	} else {
		localStorage.setItem("name", "");
	}
};

// get all income ever submited
getOverallIncome = () => {
	if (!localStorage.getItem("overallIncome")) {
		localStorage.setItem("overallIncome", "0");
	} else {
		localStorage.getItem("overallIncome");
	}
};

// get all expenses ever submited
getOverallExpense = () => {
	if (!localStorage.getItem("overallExpense")) {
		localStorage.setItem("overallExpense", "0");
	} else {
		localStorage.getItem("overallExpense");
	}
};

// get overall balance from local storage
getLocalBalance = () => {
	if (!localStorage.getItem("current-balance")) {
		localStorage.setItem("current-balance", "0$");
	} else {
		currentBalance = parseInt(localStorage.getItem("current-balance"));
		moneySpan.innerHTML = "$" + currentBalance;
	}
};

// showing incomes data on table and page
showIncomeData = () => {
	addIncomeData();
	getIncomeData();

	const incomeTable = document.querySelector("#income-table");

	let singleRow = incomeTable.rows.length;
	while (--singleRow) {
		incomeTable.deleteRow(singleRow);
	}

	for (i = 0; i < incomeArr.length; i++) {
		const tableRow = incomeTable.insertRow();
		const tableData_name = tableRow.insertCell();
		const tableData_amount = tableRow.insertCell();

		tableData_name.innerHTML = incomeArr[i].tableData_name;
		tableData_amount.innerHTML = incomeArr[i].tableData_amount;

		tableData_name.classList.add("blue");
		tableData_amount.classList.add("green");
		clearIncomeBtn.style.display = "block";
	}
};

// getting income data from localstorage
getIncomeData = () => {
	let strIncome = localStorage.getItem("localIncomeData");

	if (strIncome != null) {
		incomeArr = JSON.parse(strIncome);
	}
};

// adding income data in local storage
addIncomeData = () => {
	getIncomeData();

	if (incomeNameInput.value && incomeAmountInput.value) {
		incomeArr.push({
			tableData_name: incomeNameInput.value,
			tableData_amount: "$" + incomeAmountInput.value,
		});
	}

	localStorage.setItem("localIncomeData", JSON.stringify(incomeArr));
};

// showing expenses on table and page
showExpenseData = () => {
	addExpenseData();
	getExpenseData();

	const expenseTable = document.querySelector("#expense-table");

	let singleRow = expenseTable.rows.length;
	while (--singleRow) {
		expenseTable.deleteRow(singleRow);
	}

	for (i = 0; i < expenseArr.length; i++) {
		const expenseTableRow = expenseTable.insertRow();
		const expenseTableData_name = expenseTableRow.insertCell();
		const expenseTableData_amount = expenseTableRow.insertCell();

		expenseTableData_name.innerHTML = expenseArr[i].expenseTableData_name;
		expenseTableData_amount.innerHTML = expenseArr[i].expenseTableData_amount;
		expenseTableData_name.classList.add("red");
		expenseTableData_amount.classList.add("green");
		clearExpenseBtn.style.display = "block";
	}
};

// getting expense data from local storage
getExpenseData = () => {
	let strExpense = localStorage.getItem("localExpenseData");

	if (strExpense != null) {
		expenseArr = JSON.parse(strExpense);
	}
};

// add expenses to local storage
addExpenseData = () => {
	getExpenseData();

	if (expenseNameInput.value && expenseAmountInput.value) {
		expenseArr.push({
			expenseTableData_name: expenseNameInput.value,
			expenseTableData_amount: "$" + expenseAmountInput.value,
		});
	}
	localStorage.setItem("localExpenseData", JSON.stringify(expenseArr));
};

storeData = () => {
	storeNameData();
	showIncomeData();
	showExpenseData();
	getLocalBalance();
	moneyColor();
	checkName();
};

console.log(localStorage);
storeData();
