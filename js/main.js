// Smooth Scrolling

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});

// Parallax Effect

	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
	// applies parallax to any class="parallax" ex. --> <section class="parallax" data-speed="5">
	$('.parallax').each(function(){
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

// Open Side Nav

$(".side-menu-btn").click(function()
{
	$("#side-nav").show("slide", { direction: "right" }, 300);
}
);

// Close Side Nav

function closeSideNav() {
	$("#side-nav").hide("slide", { direction: "right" }, 300);
}

// Fade In for Heading

$(".header-container").animate({opacity: 1, top: "30%"}, 1000);

// Open Panel

function openThisPanel(thisPanel) {
	$(thisPanel).show("slide", { direction: "up" }, 700);
}

// Close All

function closeAll() {
	$("#about-more").hide("slide", { direction: "up" }, 700);
	$("#rates").hide("slide", { direction: "up" }, 700);
}

// Hide All Panels on Close Button

$(".back-btn").click(function()
{
	closeAll();
});

// Email Address

var email1 = "eaponte";
var email2 = "&#64;zoho&#46;com";

document.getElementById("email").innerHTML = email1 + email2;
