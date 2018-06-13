$(document).ready(function(){
	$('.story-slider').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 2,
		centerMode: true,
		centerPadding: '0px',
		prevArrow: '<i class="fa fa-caret-left slider-prev slick-prev"></i>',
		nextArrow: '<i class="fa fa-caret-right slider-next slick-next"></i>',
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
			  }
			},
		  ]
	});
});
