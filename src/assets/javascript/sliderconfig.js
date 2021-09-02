
$(document).ready(function () {
	$('.carousel').slick({
		slidesToShow: 3,
		adaptiveHeight: true,
		autoplay: true,
		arrows: true,
		centerMode: true,
		autoplaySpeed: 1500,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
			},
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
			}
		}]
	});
});
