$(document).ready(function() {
	
	$('#tbox_btn').click(function(e){		
		clearSelection();
		var divId = +new Date();
		
		$('<div />', {
			id: 'newTbox',
			'class': 'textbox',
		})
		.append($('<div />', {
        	'id': 'closebtn',
        	text: 'X',
        }))
        .append($('<div />', {
        	'id': divId,
        	'class': 'innertext',
        	value: 'Type Here',
        	html: 'Type Here',
        	contentEditable: true,
        }))
		.css({
				"position": "absolute",
				"top" : 15 + $('#edit_content').scrollTop(),
				"left": 35,
				"cursor": "move",
				"backgroundColor": "#EEE",
				"zIndex": 120,
		})
		.draggable( {containment: $('#paper')} )
		.prependTo('#paper')
		
        $('html').find('#' +  divId).focus();
        
        $('html').find('#' +  divId).focusout(makeWhite)	
        $('html').find('#' +  divId).focusin(makeRed)
        $('html').find('#' +  divId).selAll();
        $('html').find('#closebtn').live("mousedown", function(e){ deleteBox($(this).parents(".textbox")) })
	})
	
	var makeWhite = function makeWhite() {
		$(this).parents('.textbox').css({
			'backgroundColor': 'transparent',
			'marginLeft': '0px',
			'boxShadow': 'none',
		});
		$(this).parents('.textbox').find('#closebtn').css({
			'display': 'none',
		})
	}
	
	var makeRed = function makeRed() {
		$(this).parents('.textbox').css({
			'backgroundColor': '#EEE',
			'marginLeft': '0px',
			'boxShadow': '0 0 3px 2px #CCC'
			});
		$(this).parents('.textbox').find('#closebtn').css({
			'display': 'block',
			});
	}
	
	var deleteBox = function deleteBox(object) {
		$(object).fadeOut(150, function () { $(this).remove(); });
	}
	
	
	function clearSelection() {
	    if(document.selection && document.selection.empty) {
	        document.selection.empty();
	    } else if(window.getSelection) {
	        var sel = window.getSelection();
	        sel.removeAllRanges();
        }
    }

    $.fn.selAll = function(){
		document.execCommand('selectAll',false,null)
	};

//document ready	 
});






