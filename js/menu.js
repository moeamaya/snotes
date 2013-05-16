$(document).ready(function() {
	$('#text').focus();
	$('#text').click();


	$('#edit_content').css('height', $(window).height() - 100 +'px');

	var check = 1;
	var color = "#F26933";
	var size= 6;
	var comp= null;
	var eraseCheck = 0;
	
	$('#draw_btn').mouseover(function(){
		$(this).css('backgroundImage','-webkit-linear-gradient(bottom, #FFFFFF 0%, #e6e6e6 100%)');
		$('#draw_tooltip').show();
	}).mouseout(function(){
		$(this).css('backgroundImage', 'none');
		$('#draw_tooltip').hide();
	})
	
	$('#tbox_btn').mouseover(function(){
		$('#tbox_tooltip').show();
	}).mouseout(function(){
		$('#tbox_tooltip').hide();
	})
	
	$('.menu_btn').mouseover(function(){
		$(this).css('backgroundImage','-webkit-linear-gradient(bottom, #FFFFFF 0%, #e6e6e6 100%)');
	}).mouseout(function(){
		$(this).css('backgroundImage', 'none');
	})
	
	$('#draw_btn').click(function(){
		if (check == 1){
			$('#toggle_dot').css('left', '32px');
			$('#text_icon').css({
				'opacity': '.5',
			});
			$('#pen_icon').css('opacity', '1.0');
			
			check = 0;
			sketcher = new Sketcher( "draw", color, size, comp );
			
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
			$('#toggle_dot').css('left', '2px');
			$('#text_icon').css('opacity', '1.0');
			$('#pen_icon').css('opacity', '.5');
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


	$('#color_btn').mouseover(function(){
		$('#color_menu').show();
	}).mouseout(function(){
		$('#color_menu').hide();
	});
	
	$('.color_select').mouseover(function(){
		$(this).css('background', '#e6e6e6');
	}).mouseout(function(){
		$(this).css('background', 'transparent');
	});

	$('#size_btn').mouseover(function(){
		$('#size_menu').show();
	}).mouseout(function(){
		$('#size_menu').hide();
	});
	
	$('.size_select').mouseover(function(){
		$(this).css('background', '#e6e6e6');
	}).mouseout(function(){
		$(this).css('background', 'transparent');
	});
	
	$('#c0').click(function() {
		color = "#fff";
		$('#color_obj').css({
			'background': 'url(erase_btn.png)',
			'boxShadow': 'inset 0 0 0 1px #444',
		})
		$('#col_label').html('ERASE');
		erase();
	});
	
	$('#c1').click(function() {
		color = "#F26933";
		$('#color_obj').css({
			'background': '#F26933',
			'boxShadow': 'none',
		})
		$('#col_label').html('RED');
		eraseOff();
		if (check == 0){
			resetSketch(color, size, comp)
		}
	});
	$('#c2').click(function() {
		color = "#F2CB27";
		$('#color_obj').css({
			'background': '#F2CB27',
			'boxShadow': 'none',
		});
		$('#col_label').html('YELLOW');
		eraseOff();
		if (check == 0){
			resetSketch(color, size, comp)
		}
	});
	$('#c3').click(function() {
		color = "#47E2C7";
		$('#color_obj').css({
			'background': '#47E2C7',
			'boxShadow': 'none',
		})
		$('#col_label').html('BLUE');
		eraseOff();
		if (check == 0){
			resetSketch(color, size, comp)
		}
	});
	$('#c4').click(function() {
		color = "#444";
		$('#color_obj').css({
			'background': '#444',
			'boxShadow': 'none',
		})
		$('#col_label').html('BLACK');
		eraseOff();
		if (check == 0){
			resetSketch(color, size, comp)
		}
	});
	
	$('#s1').click(function() {
		size = 2;
		$('#size_obj').css({
			'width': '4px',
			'height': '4px',
			'margin-top': '34px',
			'margin-bottom': '12px',
		});
		$('#size_label').html('2 PX');
		if (check == 0){
			resetSketch(color, size, comp)
		}
	});
	$('#s2').click(function() {
		size = 6;
		$('#size_obj').css({
			'width': '8px',
			'height': '8px',
			'margin-top': '30px',
			'margin-bottom': '12px',
		});
		$('#size_label').html('6 PX');
		if (check == 0){
			resetSketch(color, size, comp)
		}
	});
	$('#s3').click(function() {
		size = 18;
		$('#size_obj').css({
			'width': '20px',
			'height': '20px',
			'margin-top': '24px',
			'margin-bottom': '6px',
		});
		$('#size_label').html('18 PX');
		if (check == 0){
			resetSketch(color, size, comp)
		}
	});
	
	function resetSketch(col, sz){
		sketcher = new Sketcher("draw", col, sz, comp);
	};

	function erase(){
		comp = "destination-out";
		
		resetSketch(color, size, comp)	
	};
	
	function eraseOff(){
		comp = "source-over";
		
		resetSketch(color, size, comp)
	};
	
//document ready
});






