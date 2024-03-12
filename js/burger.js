const menu = document.querySelector('.mobile-menu')
const burgerBtn = document.querySelectorAll('.burger')
const xBtn = document.querySelectorAll('.x')
const body = document.body

burgerBtn.forEach(function (elem) {
	elem.addEventListener('click', () => {
		menu.classList.add('open')
		elem.classList.add('open')
		xBtn.forEach(function (elem1) {
			elem1.classList.add('open')
		})
		body.classList.add('open')
	})
})

xBtn.forEach(function (elem1) {
	elem1.addEventListener('click', () => {
		menu.classList.remove('open')
		burgerBtn.forEach(function (elem) {
			elem.classList.remove('open')
		})
		elem1.classList.remove('open')
		body.classList.remove('open')
	})
})
