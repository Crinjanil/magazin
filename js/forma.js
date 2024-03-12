const signIn = document.querySelector('.in')
const signUp = document.querySelector('.up')
const Form = document.querySelector('.form')
const Body = document.body

signIn.addEventListener('click', function () {
	Form.classList.add('active')
	Body.classList.add('active')
})

signUp.addEventListener('click', function () {
	Form.classList.remove('active')
	Body.classList.remove('active')
})
