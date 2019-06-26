// DOC READY
$(function() {
	// masonry.js
	$('.grid').masonry({
		itemSelector: '.grid__item',
		percentagePosition: true
	});

	// slick.js
	$('.carousel').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000
	});
});
