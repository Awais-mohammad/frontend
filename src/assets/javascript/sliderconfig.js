
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



	$(".slider").not('.slick-initialized').slick({
		centerMode: true,
		autoplay: true,
		dots: true,

		slidesToShow: 3,
		responsive: [{
			breakpoint: 768,
			settings: {
				dots: false,
				arrows: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
	$('.customer-logos').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 3
			}
		}]
	});


});
