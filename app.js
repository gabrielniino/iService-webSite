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

// Modal 

const modalViews = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.openModal');
const modalCloses = document.querySelectorAll('.close');
const modalPages = document.querySelectorAll('.modal-page');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentModalIndex = 0;

function showModalPage(index) {
	modalPages.forEach((page, i) => {
		if (i === index) {
			page.style.display = 'block';
		} else {
			page.style.display = 'none';
		}
	});
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		currentModalIndex = 0; // Reset to the first page when opening the modal.
		showModalPage(currentModalIndex);
		modalViews[i].classList.add('active-modal');
	});
});

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

nextButton.addEventListener('click', () => {
	currentModalIndex++;
	if (currentModalIndex >= modalPages.length) {
		currentModalIndex = 0; // Start over if at the end.
	}
	showModalPage(currentModalIndex);
});

prevButton.addEventListener('click', () => {
	currentModalIndex--;
	if (currentModalIndex < 0) {
		currentModalIndex = modalPages.length - 1; // Go to the last page if at the beginning.
	}
	showModalPage(currentModalIndex);
});
