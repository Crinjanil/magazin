const Moon = document.querySelector('.moon')
const bury = document.body
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const cat = document.querySelector('.category')

Moon.addEventListener('click', () => {
	bury.classList.toggle('active1')
	header.classList.toggle('active1')
	footer.classList.toggle('active1')
	cat.classList.toggle('active1')
})
