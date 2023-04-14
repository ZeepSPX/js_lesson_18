// Задача 3.Користувач задає рік народження. Визначити кількість років користувача. ---------------------------------------------------------------------------------

const currentYear = new Date().getFullYear();

function calculateAge() {
	const birthYear = parseInt(document.getElementById('input_1').value);
	const age = currentYear - birthYear;
	document.getElementById('input__result').textContent = age;
}

document.getElementById('task1_calculate-button').addEventListener('click', calculateAge);







