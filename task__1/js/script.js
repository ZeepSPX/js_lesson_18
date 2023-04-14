// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)----------------------------------------
const usdRate = 37.45
const eurRate = 40.60

function convert() {
	const input = parseFloat(document.getElementById('input_1').value)

	const usdResult = input / usdRate
	document.getElementById('usd__result').innerText = usdResult.toFixed(2)

	const euroResult = input / eurRate
	document.getElementById('eur__result').innerText = euroResult.toFixed(2)
} 

document.getElementById('task1_convert-button').onclick = convert