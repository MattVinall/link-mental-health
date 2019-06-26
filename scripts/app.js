// DOC READY
$(function() {
	// flickity carousel
	$('.carousel').flickity({
		wrapAround: true,
		dots: true
	});

	// masonry.js
	$('.grid').masonry({
		itemSelector: '.grid__item',
		percentagePosition: true
	});
});
