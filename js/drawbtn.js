$(document).ready(function() {
	$('#edit_content').css('height', $(window).height() - 85 +'px');


	var check = 1;
	
	$('#draw_btn').click(function(){
		if (check == 1){
			$('#word').html("TYPE");
			check = 0;
			sketcher = new Sketcher( "draw" );
			
			$('#text').attr('disabled', 'disabled');
	    	$('#text').css({
	    		'border': '1px solid transparent',
	    		'pointerEvents': 'none',
	    	});
	    	$('#draw').css({
	    		'zIndex': '5',
	    		'cursor': 'crosshair',
	    		'pointerEvents': 'auto',
	    	});
			
		}else{
			$('#word').html("DRAW");
			check = 1;
			
			$('#text').removeAttr('disabled');
	    	$('#text').css({
	    		'border': '1px dashed #ccc',
	    		'pointerEvents': 'auto',
	    	});
	    	
	    	$('#draw').css({
	    		'zIndex': '0',
	    		'cursor': 'default',
	    		'pointerEvents': 'none',
	    	});
	    	
	    	$('#text').focus();
	    	$('#text').click();
			
		}
	})

//document ready
});

