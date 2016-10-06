window.onload = function() {
	$(document).ready(function() {

		$('.proj').parallax({
	      invertX: false,
	      invertY: false,
	      scalarX:10,
	      scalarY:10,
	      originX:.5,
	      originY:.5,
	      calibrateX:true,
	      calibrateY:true,
	    });

	    $('.p1').click(function(){
      		$('.h1').toggle();
    	});

    	$('.f1').hover(function(){
    		$('.h1').toggle();
    	});

    	$(".statement").click(function(){
        	$(".about").toggle();
	    });

    	$(".indrop").click(function(){
        	$(".ipics").toggle();
	    });

	    $(".outdrop").click(function(){
	        $(".opics").toggle();
	    });

	    $(".rdrop").click(function(){
	        $(".rpics").toggle();
	    });
	});


}
