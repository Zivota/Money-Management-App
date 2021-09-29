const nameSpan = document.querySelector("#name-span");
const dropdownBtn = document.querySelector("#dropdown-button");
const scheduleInput = document.querySelector("#schedule-input");
const scheduleBtn = document.querySelector("#schedule-input-btn");
const daySpan = document.querySelector("#daySpan");
const week = document.querySelector("#week");

const daySelect = document.querySelector("#daySelect");
const monHolder = document.querySelector(".monday");
const tueHolder = document.querySelector(".tuesday");
const wenHolder = document.querySelector(".wensday");
const thuHolder = document.querySelector(".thursday");
const friHolder = document.querySelector(".friday");
const satHolder = document.querySelector(".saturday");
const sunHolder = document.querySelector(".sunday");

console.log(localStorage);

// event listeners

// choosing which day are we going to display
daySelect.addEventListener("click", () => {
	showingDays();
});

// adding schedules to specific day
scheduleBtn.addEventListener("click", () => {
	if (scheduleInput.value) {
		// checking if the guest adding to monday
		if (daySelect.selectedIndex == 0) {
			mondayCheck();
		}

		// checking if the guest adding to tuesday
		if (daySelect.selectedIndex == 1) {
			tuesdayCheck();
		}

		// checking if the guest is adding to wensday
		if (daySelect.selectedIndex == 2) {
			wensdayCheck();
		}

		if (daySelect.selectedIndex == 3) {
			thursdayCheck();
		}

		if (daySelect.selectedIndex == 4) {
			fridayCheck();
		}

		if (daySelect.selectedIndex == 5) {
			saturdayCheck();
		}

		if (daySelect.selectedIndex == 6) {
			sundayCheck();
		}
	}
});

// functions
// set name in head div
getName = () => {
	let name = localStorage.getItem("name");
	if (name) {
		nameSpan.innerHTML = name;
	}
};

// getting and setting data in local storage for monday
getMonData = () => {
	let newData = scheduleInput.value;

	if (localStorage.getItem("monArr") == null) {
		localStorage.setItem("monArr", "[]");
	}

	let oldData = JSON.parse(localStorage.getItem("monArr"));
	oldData.push(newData);

	localStorage.setItem("monArr", JSON.stringify(oldData));
};

// showing data from local storage for monday
setMonData = () => {
	let data = JSON.parse(localStorage.getItem("monArr"));
	if (localStorage.getItem("monArr") != null) {
		data.map(item => {
			let monUl = document.querySelector(".mon-ul");
			let monLi = document.createElement("li");
			const deleteItem = document.createElement("button");
			deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
			deleteItem.classList.add("deleteItem");
			deleteItem.addEventListener("click", e => {
				monUl.removeChild(monLi);

				let newData = data.filter(el => el !== monLi.innerText);
				localStorage.setItem("monArr", JSON.stringify(newData));

				window.location.reload();
			});

			monLi.appendChild(deleteItem);
			monLi.appendChild(document.createTextNode(item));
			monUl.appendChild(monLi);
		});
	}
};

// function to add and delete items to monday ul
mondayCheck = () => {
	getMonData();

	const deleteItem = document.createElement("button");
	deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
	deleteItem.classList.add("deleteItem");
	deleteItem.addEventListener("click", e => {
		monUl.removeChild(monLi);

		let data = JSON.parse(localStorage.getItem("monArr"));
		let newData = data.filter(el => el !== monLi.innerText);

		localStorage.setItem("monArr", JSON.stringify(newData));
	});

	let monUl = document.querySelector(".mon-ul");
	let monLi = document.createElement("li");

	monLi.appendChild(deleteItem);
	monLi.appendChild(document.createTextNode(scheduleInput.value));
	monUl.appendChild(monLi);

	scheduleInput.value = "";
};

// getting and setting data in local storage for tuesday
getTueData = () => {
	let newData = scheduleInput.value;

	if (localStorage.getItem("tueArr") == null) {
		localStorage.setItem("tueArr", "[]");
	}

	let oldData = JSON.parse(localStorage.getItem("tueArr"));
	oldData.push(newData);

	localStorage.setItem("tueArr", JSON.stringify(oldData));
};

// showing data from local storage for tueday
setTueData = () => {
	let data = JSON.parse(localStorage.getItem("tueArr"));
	if (localStorage.getItem("tueArr") != null) {
		data.map(item => {
			let tueUl = document.querySelector(".tue-ul");
			let tueLi = document.createElement("li");
			const deleteItem = document.createElement("button");
			deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
			deleteItem.classList.add("deleteItem");
			deleteItem.addEventListener("click", e => {
				tueUl.removeChild(tueLi);

				let newData = data.filter(el => el !== tueLi.innerText);
				localStorage.setItem("tueArr", JSON.stringify(newData));

				window.location.reload();
			});

			tueLi.appendChild(deleteItem);
			tueLi.appendChild(document.createTextNode(item));
			tueUl.appendChild(tueLi);
		});
	}
};

// function to add and delete items to tuesday ul
tuesdayCheck = () => {
	getTueData();
	const deleteItem = document.createElement("button");
	deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
	deleteItem.classList.add("deleteItem");

	deleteItem.addEventListener("click", e => {
		tueUl.removeChild(tueLi);

		let data = JSON.parse(localStorage.getItem("tueArr"));
		let newData = data.filter(el => el !== tueLi.innerText);

		localStorage.setItem("tueArr", JSON.stringify(newData));
	});

	const tueUl = document.querySelector(".tue-ul");
	let tueLi = document.createElement("li");
	tueLi.appendChild(deleteItem);
	tueLi.appendChild(document.createTextNode(scheduleInput.value));
	tueUl.appendChild(tueLi);
	scheduleInput.value = "";
};

// getting and setting data in local storage for wensday
getWenData = () => {
	let newData = scheduleInput.value;

	if (localStorage.getItem("wenArr") == null) {
		localStorage.setItem("wenArr", "[]");
	}

	let oldData = JSON.parse(localStorage.getItem("wenArr"));
	oldData.push(newData);

	localStorage.setItem("wenArr", JSON.stringify(oldData));
};

// showing data from local storage for wensday
setWenData = () => {
	let data = JSON.parse(localStorage.getItem("wenArr"));
	if (localStorage.getItem("wenArr") != null) {
		data.map(item => {
			let wenUl = document.querySelector(".wen-ul");
			let wenLi = document.createElement("li");
			const deleteItem = document.createElement("button");
			deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
			deleteItem.classList.add("deleteItem");
			deleteItem.addEventListener("click", e => {
				wenUl.removeChild(wenLi);

				let newData = data.filter(el => el !== wenLi.innerText);
				localStorage.setItem("wenArr", JSON.stringify(newData));

				window.location.reload();
			});

			wenLi.appendChild(deleteItem);
			wenLi.appendChild(document.createTextNode(item));
			wenUl.appendChild(wenLi);
		});
	}
};

// function to add and delete items to wensday ul
wensdayCheck = () => {
	getWenData();
	const deleteItem = document.createElement("button");
	deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
	deleteItem.classList.add("deleteItem");

	deleteItem.addEventListener("click", e => {
		wenUl.removeChild(wenLi);

		let data = JSON.parse(localStorage.getItem("wenArr"));
		let newData = data.filter(el => el !== wenLi.innerText);

		localStorage.setItem("wenArr", JSON.stringify(newData));
	});

	const wenUl = document.querySelector(".wen-ul");
	let wenLi = document.createElement("li");
	wenLi.appendChild(deleteItem);
	wenLi.appendChild(document.createTextNode(scheduleInput.value));
	wenUl.appendChild(wenLi);
	scheduleInput.value = "";
};

// getting and setting data in local storage for thursday
getThuData = () => {
	let newData = scheduleInput.value;

	if (localStorage.getItem("thuArr") == null) {
		localStorage.setItem("thuArr", "[]");
	}

	let oldData = JSON.parse(localStorage.getItem("thuArr"));
	oldData.push(newData);

	localStorage.setItem("thuArr", JSON.stringify(oldData));
};

// showing data from local storage for thursday
setThuData = () => {
	let data = JSON.parse(localStorage.getItem("thuArr"));
	if (localStorage.getItem("thuArr") != null) {
		data.map(item => {
			let thuUl = document.querySelector(".thu-ul");
			let thuLi = document.createElement("li");
			const deleteItem = document.createElement("button");
			deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
			deleteItem.classList.add("deleteItem");
			deleteItem.addEventListener("click", e => {
				thuUl.removeChild(thuLi);

				let newData = data.filter(el => el !== thuLi.innerText);
				localStorage.setItem("thuArr", JSON.stringify(newData));

				window.location.reload();
			});

			thuLi.appendChild(deleteItem);
			thuLi.appendChild(document.createTextNode(item));
			thuUl.appendChild(thuLi);
		});
	}
};

// function to add and delete items to thursday ul
thursdayCheck = () => {
	getThuData();
	const deleteItem = document.createElement("button");
	deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
	deleteItem.classList.add("deleteItem");

	deleteItem.addEventListener("click", e => {
		thuUl.removeChild(thuLi);

		let data = JSON.parse(localStorage.getItem("thuArr"));
		let newData = data.filter(el => el !== thuLi.innerText);

		localStorage.setItem("thuArr", JSON.stringify(newData));
	});

	const thuUl = document.querySelector(".thu-ul");
	let thuLi = document.createElement("li");
	thuLi.appendChild(deleteItem);
	thuLi.appendChild(document.createTextNode(scheduleInput.value));
	thuUl.appendChild(thuLi);
	scheduleInput.value = "";
};

// getting and setting data in local storage for friday
getFriData = () => {
	let newData = scheduleInput.value;

	if (localStorage.getItem("friArr") == null) {
		localStorage.setItem("friArr", "[]");
	}

	let oldData = JSON.parse(localStorage.getItem("friArr"));
	oldData.push(newData);

	localStorage.setItem("friArr", JSON.stringify(oldData));
};

// showing data from local storage for friday
setFriData = () => {
	let data = JSON.parse(localStorage.getItem("friArr"));
	if (localStorage.getItem("friArr") != null) {
		data.map(item => {
			let friUl = document.querySelector(".fri-ul");
			let friLi = document.createElement("li");
			const deleteItem = document.createElement("button");
			deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
			deleteItem.classList.add("deleteItem");
			deleteItem.addEventListener("click", e => {
				friUl.removeChild(friLi);

				let newData = data.filter(el => el !== friLi.innerText);
				localStorage.setItem("friArr", JSON.stringify(newData));

				window.location.reload();
			});

			friLi.appendChild(deleteItem);
			friLi.appendChild(document.createTextNode(item));
			friUl.appendChild(friLi);
		});
	}
};

// function to add and delete items to friday ul
fridayCheck = () => {
	getFriData();
	const deleteItem = document.createElement("button");
	deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
	deleteItem.classList.add("deleteItem");

	deleteItem.addEventListener("click", e => {
		friUl.removeChild(friLi);

		let data = JSON.parse(localStorage.getItem("friArr"));
		let newData = data.filter(el => el !== friLi.innerText);

		localStorage.setItem("friArr", JSON.stringify(newData));
	});

	const friUl = document.querySelector(".fri-ul");
	let friLi = document.createElement("li");
	friLi.appendChild(deleteItem);
	friLi.appendChild(document.createTextNode(scheduleInput.value));
	friUl.appendChild(friLi);
	scheduleInput.value = "";
};

// getting and setting data in local storage for saturday
getSatData = () => {
	let newData = scheduleInput.value;

	if (localStorage.getItem("satArr") == null) {
		localStorage.setItem("satArr", "[]");
	}

	let oldData = JSON.parse(localStorage.getItem("satArr"));
	oldData.push(newData);

	localStorage.setItem("satArr", JSON.stringify(oldData));
};

// showing data from local storage for saturday
setSatData = () => {
	let data = JSON.parse(localStorage.getItem("satArr"));
	if (localStorage.getItem("satArr") != null) {
		data.map(item => {
			let satUl = document.querySelector(".sat-ul");
			let satLi = document.createElement("li");
			const deleteItem = document.createElement("button");
			deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
			deleteItem.classList.add("deleteItem");
			deleteItem.addEventListener("click", e => {
				satUl.removeChild(satLi);

				let newData = data.filter(el => el !== satLi.innerText);
				localStorage.setItem("satArr", JSON.stringify(newData));

				window.location.reload();
			});

			satLi.appendChild(deleteItem);
			satLi.appendChild(document.createTextNode(item));
			satUl.appendChild(satLi);
		});
	}
};

// function to add and delete items to saturday ul
saturdayCheck = () => {
	getSatData();
	const deleteItem = document.createElement("button");
	deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
	deleteItem.classList.add("deleteItem");

	deleteItem.addEventListener("click", e => {
		satUl.removeChild(satLi);

		let data = JSON.parse(localStorage.getItem("satArr"));
		let newData = data.filter(el => el !== satLi.innerText);

		localStorage.setItem("satArr", JSON.stringify(newData));
	});

	const satUl = document.querySelector(".sat-ul");
	let satLi = document.createElement("li");
	satLi.appendChild(deleteItem);
	satLi.appendChild(document.createTextNode(scheduleInput.value));
	satUl.appendChild(satLi);
	scheduleInput.value = "";
};

// getting and setting data in local storage for sunday
getSunData = () => {
	let newData = scheduleInput.value;

	if (localStorage.getItem("sunArr") == null) {
		localStorage.setItem("sunArr", "[]");
	}

	let oldData = JSON.parse(localStorage.getItem("sunArr"));
	oldData.push(newData);

	localStorage.setItem("sunArr", JSON.stringify(oldData));
};

// showing data from local storage for sunday
setSunData = () => {
	let data = JSON.parse(localStorage.getItem("sunArr"));
	if (localStorage.getItem("sunArr") != null) {
		data.map(item => {
			let sunUl = document.querySelector(".sun-ul");
			let sunLi = document.createElement("li");
			const deleteItem = document.createElement("button");
			deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
			deleteItem.classList.add("deleteItem");
			deleteItem.addEventListener("click", e => {
				sunUl.removeChild(sunLi);

				let newData = data.filter(el => el !== sunLi.innerText);
				localStorage.setItem("sunArr", JSON.stringify(newData));

				window.location.reload();
			});

			sunLi.appendChild(deleteItem);
			sunLi.appendChild(document.createTextNode(item));
			sunUl.appendChild(sunLi);
		});
	}
};

// function to add and delete items to sunday ul
sundayCheck = () => {
	getSunData();
	const deleteItem = document.createElement("button");
	deleteItem.innerHTML = '<i class="fas fa-trash"></i>';
	deleteItem.classList.add("deleteItem");

	deleteItem.addEventListener("click", e => {
		sunUl.removeChild(sunLi);

		let data = JSON.parse(localStorage.getItem("sunArr"));
		let newData = data.filter(el => el !== sunLi.innerText);

		localStorage.setItem("sunArr", JSON.stringify(newData));
	});

	const sunUl = document.querySelector(".sun-ul");
	let sunLi = document.createElement("li");
	sunLi.appendChild(deleteItem);
	sunLi.appendChild(document.createTextNode(scheduleInput.value));
	sunUl.appendChild(sunLi);
	scheduleInput.value = "";
};

// showing days on page
showingDays = () => {
	if (daySelect.selectedIndex == 0) {
		monHolder.classList.add("active");
	} else {
		monHolder.classList.remove("active");
	}

	if (daySelect.selectedIndex == 1) {
		tueHolder.classList.add("active");
	} else {
		tueHolder.classList.remove("active");
	}

	if (daySelect.selectedIndex == 2) {
		wenHolder.classList.add("active");
	} else {
		wenHolder.classList.remove("active");
	}

	if (daySelect.selectedIndex == 3) {
		thuHolder.classList.add("active");
	} else {
		thuHolder.classList.remove("active");
	}

	if (daySelect.selectedIndex == 4) {
		friHolder.classList.add("active");
	} else {
		friHolder.classList.remove("active");
	}

	if (daySelect.selectedIndex == 5) {
		satHolder.classList.add("active");
	} else {
		satHolder.classList.remove("active");
	}

	if (daySelect.selectedIndex == 6) {
		sunHolder.classList.add("active");
	} else {
		sunHolder.classList.remove("active");
	}
};

// calling functions
getName();
showingDays();
setMonData();
setTueData();
setWenData();
setThuData();
setFriData();
setSatData();
setSunData();
