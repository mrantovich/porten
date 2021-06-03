const burger = document.querySelector('.burger');
const headerSelf = document.querySelector('.header__self');
const wholeHTML = document.querySelector('html');
const wholeBody = document.querySelector('body');

if (burger) {
	burger.addEventListener('click', addActive);
}

function addActive() {
	burger.classList.toggle('_active');
	headerSelf.classList.toggle('_active');
	wholeHTML.classList.toggle('_lock');
	wholeBody.classList.toggle('_lock');
}