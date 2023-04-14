// Задача 7.Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.---------------------------------------------------------------------------------


const transportSelect = document.getElementById('transport-1');
const breakfastCheckbox = document.getElementById('breakfast-1');
const lunchCheckbox = document.getElementById('lunch-1');
const dinnerCheckbox = document.getElementById('dinner-1');
const guideRadioButtons = document.querySelectorAll('input[name^="guide"]');
const resultContainer = document.getElementById('gradesAvg');

function calculateTotal() {
	let total = 0;

	total += Number(transportSelect.value);

	if (breakfastCheckbox.checked) {
		total += Number(breakfastCheckbox.value);
	}
	if (lunchCheckbox.checked) {
		total += Number(lunchCheckbox.value);
	}
	if (dinnerCheckbox.checked) {
		total += Number(dinnerCheckbox.value);
	}

	for (const radioButton of guideRadioButtons) {
		if (radioButton.checked) {
			total += Number(radioButton.value);
			break;
		}
	}

	resultContainer.textContent = total;
}

transportSelect.addEventListener('change', calculateTotal);
breakfastCheckbox.addEventListener('change', calculateTotal);
lunchCheckbox.addEventListener('change', calculateTotal);
dinnerCheckbox.addEventListener('change', calculateTotal);
for (const radioButton of guideRadioButtons) {
	radioButton.addEventListener('change', calculateTotal);
}