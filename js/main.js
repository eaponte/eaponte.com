/***** Smooth Scrolling *****/

	$('a[href^="#"]').on('click',function(e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		var targetOffset = $target.offset().top - 100;

		$('html, body').stop().animate({
			'scrollTop': targetOffset
		}, 900, 'swing', function () {
			window.location.hash = targetOffset;
		});
	});

/***** Parallax Effect *****/

	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	
	// applies parallax to any class="parallax" ex. --> <section class="parallax" data-speed="5">
	$('.parallax').each(function() {
		var $bgobj = $(this); // assigning the object
		
		$window.scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -(($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});

/***** Side Nav Bar *****/

	// Open Side Nav

	$(".nav-menu-btn").click(function() {
		$("#nav-bar").animate({right: "0"});
	});

	// Close Side Nav

	$(".close-nav-btn").click(function() {
		$("#nav-bar").animate({right: "-200px"});
	});

	$ ("#nav-list li a").click(function() {
		if($(window).width() < 911) {
			$("#nav-bar").animate({right: "-200px"});
		}
	});

/***** Fade In for Heading *****/

$(".header-container").animate({opacity: 1, top: "30%"}, 1000);

/***** Email *****/

var email1 = "eaponte";
var email2 = "&#64;zoho&#46;com";

$(".email").html(email1 + email2);

/***** Rates Modal *****/

$("#get-started-btn").click(function(){
	$(".rates-modal-wrapper").fadeIn(300);
	$("body").addClass("overflow-hidden");
});

$(".close-modal-btn").click(function(){
	$(".rates-modal-wrapper").fadeOut(300);
	$("body").removeClass("overflow-hidden");
});