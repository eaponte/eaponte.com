// Smooth Scrolling

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

// Parallax Effect

	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
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

// Check Window Width and Close Side Nav If Not in Mobile View

function checkWindowWidth() {
	var windowWidth = $(window).width();

	if (windowWidth > 835) {
		$("#side-nav").css("right", "-200px");
	}
}

checkWindowWidth();

$(window).resize(checkWindowWidth);

// Open Side Nav

$(".side-menu-btn").click(function() {
	$("#side-nav").animate({right: "0"});
});

// Close Side Nav

$(".sideNav").click(function() {
	$("#side-nav").animate({right: "-200px"});
});

// Fade In for Heading

$(".header-container").animate({opacity: 1, top: "30%"}, 1000);

// Open Card

$("[data-link]").click(function(e) {
	e.preventDefault();
	thisCard = $(this).data("link");
	$(thisCard).slideDown("slow");
});

// Hide All Cards on Back Button

$(".back-btn").click(function() {
	$("#rates, #about-more").slideUp("slow");
});

// Email Address

var email1 = "eaponte";
var email2 = "&#64;zoho&#46;com";

document.getElementById("email").innerHTML = email1 + email2;
