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

    var $el, $other, leftPos, newWidth;
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


		    var addressValue = $(this).attr("href");
	        $("#example-two li a").each(function() {
				if($(this).attr("href") == addressValue) 
				{
					$other = $(this);
			        leftPos = $other.position().left;
			        newWidth = $other.parent().width();
			    	$magicLineTwo.stop().animate({
			            left: leftPos,
			            width: newWidth,
			            backgroundColor: $other.attr("rel")    
			    	});
			    	$(this).css("color", "white");
			    }
			});
    	}, function() {
	        $magicLine.stop().animate({
	            left: $magicLine.data("origLeft"),
	            width: $magicLine.data("origWidth"),
	            backgroundColor: $magicLine.data("origColor")
	        }); 

	        $("#example-two li a").each(function() {
        		$(this).css("color", "#bbb");
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
			var addressValue2 = $(this).attr("href");
			// Remove the current class from all a3 tags
			// Add the current class to the clicked a
			$("#example-one li a").each(function() {
				if($(this).attr("href") == addressValue2) 
				{
					$other = $(this);
					$("#example-one li").removeClass("current_page_item");
					$(this.parentNode).addClass("current_page_item");
					$magicLine
				        .width($(".current_page_item").width())
				        .css("left", $(".current_page_item a").position().left)
				        .data("origLeft", $magicLine.position().left)
				        .data("origWidth", $magicLine.width())
				        .data("origColor", $(".current_page_item a").attr("rel"));
				}
			});


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
        
        var addressValue2 = $(this).attr("href");
        $("#example-one li a").each(function() {
			if($(this).attr("href") == addressValue2) 
			{
				$other = $(this);
		        leftPos = $other.position().left;
		        newWidth = $other.parent().width();
		    	$magicLine.stop().animate({
		            left: leftPos,
		            width: newWidth,
		            backgroundColor: $other.attr("rel")    
		    	});
		    	$(this).css("color", "white");
		    }
		});
    }, function() {
        $magicLineTwo.stop().animate({
            left: $magicLineTwo.data("origLeft"),
            width: $magicLineTwo.data("origWidth"),
            backgroundColor: $magicLineTwo.data("origColor")
        });

        $("#example-one li a").each(function() {
        	$(this).css("color", "#bbb");
        });
        
    	$magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth"),
            backgroundColor: $magicLine.data("origColor")
        });       
    });
    
    /* Kick IE into gear */
    $(".current_page_item_two a").mouseenter();
    
});