// Задача 5.Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)---------------------------------------------------------------------------------

const table = document.createElement('table')


for (let i = 0; i < 3; i++) {
	const row = document.createElement('tr')
	for (let j = 0; j < 4; j++) {
		const cell = document.createElement('td')
		const randomNumber = Math.floor(Math.random() * 100) + 1
		const cellText = document.createTextNode(randomNumber)
		cell.append(cellText)
		row.append(cell)
	}
	table.append(row)
}

const tableContainer = document.getElementById('table-container')
tableContainer.append(table)



