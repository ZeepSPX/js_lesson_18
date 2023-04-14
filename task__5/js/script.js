// Задача 6.Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.---------------------------------------------------------------------------------

function createGradesTable() {
	const numOfGrades = document.getElementById("numOfGrades").value;
	const tableContainer = document.getElementById("gradesTable");
	let tableHTML = "<table>";
	for (let i = 0; i < numOfGrades; i++) {
		tableHTML += "<tr>";
		tableHTML += `<td><input type="number" class="gradeInput"></td>`;
		tableHTML += "</tr>";
	}
	tableHTML += "</table>";
	tableContainer.innerHTML = tableHTML;
}

function getGradesAvg() {
	const inputs = document.getElementsByClassName("gradeInput");
	let sum = 0;
	for (let i = 0; i < inputs.length; i++) {
		sum += parseInt(inputs[i].value);
	}
	const avg = sum / inputs.length;
	document.getElementById("gradesAvg").innerText = avg.toFixed(2);
}

document.getElementById("createTableBtn").addEventListener("click", createGradesTable);
document.getElementById("getSumBtn").addEventListener("click", getGradesAvg);
