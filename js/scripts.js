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
	// work previews
	    $('.p1').click(function(){
      		$('.h1').toggle();
    	});

    	$('.f1').hover(function(){
    		$('.h1').toggle();
    	});

    	$('.p2').click(function(){
      		$('.h2').toggle();
    	});

    	$('.f2').hover(function(){
    		$('.h2').toggle();
    	});

    	$('.p3').click(function(){
      		$('.h3').toggle();
    	});

    	$('.f3').hover(function(){
    		$('.h3').toggle();
    	});

    	$('.p4').click(function(){
      		$('.h4').toggle();
    	});

    	$('.f4').hover(function(){
    		$('.h4').toggle();
    	});

    	$('.p5').click(function(){
      		$('.h5').toggle();
    	});

    	$('.f5').hover(function(){
    		$('.h5').toggle();
    	});

    	$('.p6').click(function(){
      		$('.h6').toggle();
    	});

    	$('.f6').hover(function(){
    		$('.h6').toggle();
    	});

    	$('.p7').click(function(){
      		$('.h7').toggle();
    	});

    	$('.f7').hover(function(){
    		$('.h7').toggle();
    	});

    	$('.p8').click(function(){
      		$('.h8').toggle();
    	});

    	$('.f8').hover(function(){
    		$('.h8').toggle();
    	});

    	$('.p9').click(function(){
      		$('.h9').toggle();
    	});

    	$('.f9').hover(function(){
    		$('.h9').toggle();
    	});

    	$('.p10').click(function(){
      		$('.h10').toggle();
    	});

    	$('.f10').hover(function(){
    		$('.h10').toggle();
    	});

        $('.p11').click(function(){
            $('.h11').toggle();
        });

        $('.f11').hover(function(){
            $('.h11').toggle();
        });

    // thesis dogshit
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
