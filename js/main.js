
// First, see if it exists , if not create an empty object 
var OPW = OPW || {};
OPW.utilities = {
	listen: function(){
		//attach click event to .js-menu
			$('.js-menu').on('click', function(){
			$('.nav-main').slideToggle();
		});

		$(window).on('resize', function(){
			var w = $(window).width();
			// console.log('I am resizing' + w);

			// write an if statement, if width greater than 480, do something
			if (w > 480 && $('.nav-main').is('[style]')){
				console.log('removed style');
				$('.nav-main').removeAttr('style');
			}
		});

		// attach click event to main-nav item
		$('.nav-main a').on('click',function(event){
			event.preventDefault();
			// remove 'is-current' class from ALL links in our .nav-main
			$('.nav-main a').removeClass('is-current');
			// add a class of 'is-current' to $(this) 
			$(this).addClass('is-current');
			// the 'this' keyword refers to the DOM element bein operated on
			// $(this) is just 'this', wrapped in a jQuery selector
			console.log($(this).attr('href'));
			// store $(this).attr('href') in a variable
			var pageToScrollTo = $(this).attr('href');
			// use that variable in our $.scrollTo() function
			$(window).scrollTo(pageToScrollTo, 2000);
		});

		$('.top').on('click', function(event){

			var backToTop =

		})
	}
}
console.log(OPW);

$(document).ready(function(){
	OPW.utilities.listen();	

});// closes doc.ready