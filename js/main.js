// Slick-Slider 
$('.blog__slide').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

// Menu-burger 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__list');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

var mixer = mixitup('.gallery__container');

