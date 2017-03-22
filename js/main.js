
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
			// the 'this' keyword refers to the DOM element being operated on
			// $(this) is just 'this', wrapped in a jQuery selector
			console.log($(this).attr('href'));
			// store $(this).attr('href') in a variable
			var pageToScrollTo = $(this).attr('href');
			// use that variable in our $.scrollTo() function
			$(window).scrollTo(pageToScrollTo, 2000);
		});

		 $('.top').on('click', function(event) {
			 event.preventDefault();
			 $(window).scrollTo('#header-top', 2000);
		 })

		
	}

}
console.log(OPW);

$(document).ready(function(){
	OPW.utilities.listen();

	// var count = 0;
	   // var images = ["img/chris-school.jpg","img/chris-texas.jpg","img/football-picture.jpg","img/computer.jpg"];
	   // var header_background = $("header.background");

	   //  header_background.css("background-image", "url("+images[count]+")");
    //     setInterval(function(){
    //     	 header_background.css("background-image", "url("+images[count]+")");
    //     	 count++
    //     	 if (count === images.length){
    //     	 	count = 0;
    //     	 }
    //     	 console.log(count);

    //     }, 6000)

	$(".click-contact").on('click', function() {
		$(".contact-wrapper").fadeIn(2000);
		$(".click-contact").fadeOut(2000)
	});

	$(".return-contact").on('click', function(event) {
		event.preventDefault();
		$(".click-contact").fadeIn(2000);
		$(".contact-wrapper").fadeOut(2000)
	})

	$(".click-resume").on('click', function() {
		$(".resume-wrapper").fadeIn(2000);
		$(".click-resume").fadeOut(2000);
	});

	$(".return-resume").on('click', function(event) {
		event.preventDefault();
		$(".click-resume").fadeIn(2000);
		$(".resume-wrapper").fadeOut(2000);
	})

	$(".click-project").on('click', function() {
		$(".project-wrapper").fadeIn(2000);
		$(".click-project").fadeOut(2000);
	});

	$(".return-project").on('click', function(event) {
		event.preventDefault();
		$(".click-project").fadeIn(2000);
		$(".project-wrapper").fadeOut(2000)
	})



});// closes doc.ready