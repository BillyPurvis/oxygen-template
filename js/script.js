 // Shorthand for $( document ).ready()
$(function(menu) {
    $( ".nav-click" ).click(function(click) {
 		 $( ".menu" ).slideToggle( "slow", function(slide) {
    		// Animation complete.
 		 });
	});
});