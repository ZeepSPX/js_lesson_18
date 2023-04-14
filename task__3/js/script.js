// Задача 4.Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)---------------------------------------------------------------------------------

function task4() {
	const wishlist = ["Бути здоровим", "Вчитися новому", "Знайти кохання", "Подорожувати", "Знайти роботу мрії", "Розвивати творчість"]

	const wishlistItems = document.getElementById('wishlist-items')

	for (let i = 0; i < 3; i++) {
		const randomIndex = Math.floor(Math.random() * wishlist.length)
		const wishlistItem = document.createElement('div')
		wishlistItem.innerText = wishlist[randomIndex]
		wishlistItems.append(wishlistItem)
	}
}
window.onload = task4


