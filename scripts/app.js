// DOC READY
$(function() {
	// masonry.js
	$('.grid').masonry({
		itemSelector: '.grid__item',
		percentagePosition: true
	});

	// slick.js
	$('.carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});
});
