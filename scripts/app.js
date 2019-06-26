// DOC READY
$(function() {
	// masonry.js
	$('.grid').masonry({
		itemSelector: '.grid__item',
		percentagePosition: true
	});

	// slick.js
	$('.carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000
	});
});
