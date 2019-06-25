// DOC READY
$(function() {
	// Hamburger Menu
	$('.hamburger').on('click', () => {
		$('.navigation-container').fadeIn(300);
	});
	$('.exit-responsive').on('click', () => {
		$('.navigation-container').fadeOut(300);
	});
	$('a').on('click', () => {
		$('.navigation-container').fadeOut(300);
	});

	// flickity carousel
	$('.carousel').flickity({
		wrapAround: true
	});

	// masonry.js
	$('.grid').masonry({
		itemSelector: '.grid__item',
		percentagePosition: true
	});
});
