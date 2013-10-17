// DOM Ready
$(function() {
  /*
      EXAMPLE ONE
  */
  
  /* Add Magic Line markup via JavaScript
  * because it ain't gonna work without */
  $("#example-one").append("<li id='magic-line'></li>");
  /* Cache it */
  var $other, leftPos, newWidth;
      $mainNav2 = $(".example-two");

  var $magicLine = $("#magic-line");
  var $magicLineTwo = $("#magic-line-two");   

	setVariables($magicLine, ".current_page_item");

  $("#example-one a").click(function(){
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

	}).hover(function() {
    inFunction($(this), ".example-two li a", $magicLine, $magicLineTwo);
	}, function() {
		outFunction($magicLine, $magicLineTwo);    
  });

    /*
        EXAMPLE TWO
    */  
  
  setVariables($magicLineTwo, ".current_page_item_two");

  $(".example-two a").click(
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
	}).hover(function() {

    inFunction($(this), "#example-one li a", $magicLineTwo, $magicLine);

  }, function() {    

    outFunction($magicLineTwo, $magicLine);

  });
    
    /* Kick IE into gear */
    $(".current_page_item_two a").mouseenter();
    
  function setVariables(line, currPageItem){
		line
			.width($(currPageItem).width())
			.css("left", $(currPageItem + " a").position().left)
			.data("origLeft", $(currPageItem + " a").position().left)
			.data("origWidth", $(line).width())
			.data("origColor", $(currPageItem + " a").attr("rel")); 
		if(currPageItem == ".current_page_item_two"){
			line.height($mainNav2.height())
		}	
  }

  function inFunction(hoverItem, list, line, otherLine){
    leftPos = hoverItem.position().left;
    newWidth = hoverItem.parent().width();
    line.stop().animate({
        left: leftPos,
        width: newWidth,
        backgroundColor: hoverItem.attr("rel")
    })
    hoverItem.css("color", "white");
    
    addressVal = hoverItem.attr("href");
    $(list).each(function() {
			if($(this).attr("href") == addressVal) 
			{
				$other = $(this);
      	leftPos = $other.position().left;
      	newWidth = $other.parent().width();

	    	otherLine.stop().animate({
	            left: leftPos,
	            width: newWidth,
	            backgroundColor: $other.attr("rel")    
	    	});
	    	$(this).css("color", "white");
	    }
		});
  }

  function outFunction(line, otherLine){
    line.stop().animate({
      left: line.data("origLeft"),
      width: line.data("origWidth"),
      backgroundColor: line.data("origColor")
    }); 

    $("#example-one li a").each(function() {
    	$(this).css("color", "#bbb");
    });
    $(".example-two li a").each(function() {
  		$(this).css("color", "#bbb");
  	}); 

  	otherLine.stop().animate({
    	left: otherLine.data("origLeft"),
    	width: otherLine.data("origWidth"),
    	backgroundColor: otherLine.data("origColor")
  	});
  }
});