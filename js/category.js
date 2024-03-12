const category = document.querySelector('.category')
const arrow = document.querySelector('.category-arrow')
const arrowD = document.querySelector('.category-arrow-down')

arrow.addEventListener('click', () => {
	category.classList.add('active')
	arrowD.classList.add('active')
})

arrowD.addEventListener('click', () => {
	category.classList.remove('active')
	arrowD.classList.remove('active')
})
