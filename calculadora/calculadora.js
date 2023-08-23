const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Calculadora

document.getElementById('calculate').addEventListener('click', function () {
	const value = parseFloat(document.getElementById('value').value);

	function calculateTaxStatus(value) {
		if (value <= 1903.98) {
			return "Isento de Imposto";
		} else {
			return "Você deve declarar I.R";
		}
	}

	const result = calculateTaxStatus(value);
	document.getElementById('result').innerHTML = result;
});
