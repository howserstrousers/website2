window.onload = function() {
	$(document).ready(function() {

		$('.proj').parallax({
	      invertX: false,
	      invertY: false,
	      scalarX:10,
	      scalarY:10,
	      originX:.5,
	      originY:.5,
	    });

	    $('.preview').click(function(){
      		$('.hider').toggle();
    	});

    	$('.full').hover(function(){
    		$('.hider').toggle();
    	});
	});


}
