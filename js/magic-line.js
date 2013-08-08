$(document).ready(function() {

	$('a.panel').click(function () {

		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		
		current = $(this);
		
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
		return false;
	});

	$(window).resize(function () {
		resizePanel();
	});
	
});

function resizePanel() {

	width = $(window).width();
	height = $(window).height();

	mask_width = width * $('.item').length;
		
	$('#debug').html(width  + ' ' + height + ' ' + mask_width);
		
	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
		
}
// DOM Ready
$(function() {

    var $el, leftPos, newWidth;
        $mainNav2 = $("#example-two");
    
    /*
        EXAMPLE ONE
    */
    
    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#example-one").append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    

    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width())
        .data("origColor", $(".current_page_item a").attr("rel"));


    $("#example-one a").click(
    	function(){
			// Remove the current class from all a tags
			$("#example-one li").removeClass("current_page_item");
			// Add the current class to the clicked a
			$(this.parentNode).addClass("current_page_item");
			$magicLine
	        .width($(".current_page_item").width())
	        .css("left", $(".current_page_item a").position().left)
	        .data("origLeft", $magicLine.position().left)
	        .data("origWidth", $magicLine.width())
	        .data("origColor", $(".current_page_item a").attr("rel"));
		}

	).hover(
    	function() {
        	$el = $(this);
	        leftPos = $el.position().left;
	        newWidth = $el.parent().width();
	        
	        $magicLine.stop().animate({
	            left: leftPos,
	            width: newWidth,
	            backgroundColor: $el.attr("rel")
	            
	            
	        });
    	}, function() {
	        $magicLine.stop().animate({
	            left: $magicLine.data("origLeft"),
	            width: $magicLine.data("origWidth"),
	            backgroundColor: $magicLine.data("origColor")
	        });    
	    }
	);

    
    
    
    /*
        EXAMPLE TWO
    */
    
    $mainNav2.append("<li id='magic-line-two'></li>");
    
    var $magicLineTwo = $("#magic-line-two");
    
    $magicLineTwo
        .width($(".current_page_item_two").width())
        .height($mainNav2.height())
        .css("left", $(".current_page_item_two a").position().left)
        .data("origLeft", $(".current_page_item_two a").position().left)
        .data("origWidth", $magicLineTwo.width())
        .data("origColor", $(".current_page_item_two a").attr("rel"));
                
    $("#example-two a").click(
    	function(){
			
			// Remove the current class from all a3 tags
			$("#example-one li").removeClass("current_page_item");
			// Add the current class to the clicked a
			$("example-one li a").each(function(i) {
				if($(i).attr("href") == $(this).attr("href")) 
				{
					$(i.parentNode).addClass("current_page_item");
				}
			});
			$magicLine
	        .width($("#example-one a .current_page_item").width())
	        .css("left", $(".current_page_item a").position().left)
	        .data("origLeft", $magicLine.position().left)
	        .data("origWidth", $magicLine.width())
	        .data("origColor", $(".current_page_item a").attr("rel"));

		}

	).hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLineTwo.stop().animate({
            left: leftPos,
            width: newWidth,
            backgroundColor: $el.attr("rel")
        })
    }, function() {
        $magicLineTwo.stop().animate({
            left: $magicLineTwo.data("origLeft"),
            width: $magicLineTwo.data("origWidth"),
            backgroundColor: $magicLineTwo.data("origColor")
        });    
    });
    
    /* Kick IE into gear */
    $(".current_page_item_two a").mouseenter();
    
});