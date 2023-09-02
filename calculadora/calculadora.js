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
			return "Isento da declaração";
		} else if (value >= 1903.99 && value <= 2826.65) {
			return "Você deve pagar: R$" + (value * 0.075).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
		} else if (value >= 2826.66 && value <= 3751.05) {
			return "Você deve pagar: R$" + (value * 0.15).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
		} else if (value >= 3751.06 && value <= 4664.68) {
			return "Você deve pagar: R$" + (value * 0.225).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
		} else {
			return "Você deve pagar: R$" + (value * 0.275).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
		}
	}

	const result = calculateTaxStatus(value);
	document.getElementById('result').innerHTML = result;
});
