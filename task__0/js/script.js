// Задача 1. Розробити калькулятор-----------------------------

class calculat{
	static number1
	static number2 
	
	constructor() {
		calculat.number1 = parseFloat(document.getElementById('input_1').value)
		calculat.number2 = parseFloat(document.getElementById('input_2').value)
	}

	static getSum() {
		return calculat.number1 + calculat.number2
	}

	static getSubtract(){
		return calculat.number1 - calculat.number2
	}

	static getMultiple() {
		return calculat.number1 * calculat.number2
	}

	static getDivide() {
		return calculat.number1 / calculat.number2
	}
}

function sum() {
	new calculat()
	document.getElementById('input__result').innerText = `${calculat.getSum()}`
}
function subtract() {
	new calculat()
	document.getElementById('input__result').innerText = `${calculat.getSubtract()}`
}
function multiple() {
	new calculat()
	document.getElementById(`input__result`).innerText = `${calculat.getMultiple().toFixed(3)}`
}
function divide() {
	new calculat()
	document.getElementById('input__result').innerText = `${calculat.getDivide().toFixed(3)}`
}

document.getElementById('task1_sum-button').onclick = sum
document.getElementById('task1_subtrackt-button').onclick = subtract
document.getElementById('task1_multiple-button').onclick = multiple
document.getElementById('task1_divide-button').onclick = divide




















