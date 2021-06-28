$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();
	$('.slider-area').owlCarousel({
			items:1,
			loop:true,
			margin:10,
			nav:false,
			dots:true,
			autoplay:false
	});
	
}(jQuery));