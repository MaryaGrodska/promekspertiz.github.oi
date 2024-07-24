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

$(document).ready(function() {
	var slidesCount = $('.multiple-items .project-info').length;

	$('.multiple-items').slick({
		infinite: true,
		dots: true,
		slidesToShow: Math.min(3, slidesCount), // Показывать 3 слайда или меньше, если их меньше
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: Math.min(3, slidesCount), // Настройки для больших экранов
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: Math.min(2, slidesCount), // Настройки для средних экранов
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: Math.min(1, slidesCount), // Настройки для маленьких экранов
					slidesToScroll: 1
				}
			}
		]
	});

	// Если слайдов меньше 3, убедитесь, что они занимают всю ширину
	if (slidesCount < 3) {
		$('.multiple-items').slick('slickSetOption', {
			slidesToShow: slidesCount,
			slidesToScroll: 1,
			infinite: false // Отключить бесконечный цикл, если слайдов меньше 3
		}, true);
	}
});


