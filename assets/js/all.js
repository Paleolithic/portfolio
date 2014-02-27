/**
 * ProgressBar for jQuery
 *
 * @version 1 (29. Dec 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @param  {Number} percent
 * @param  {Number} $element progressBar DOM element
 */
function progressBar(percent, $element, caption) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(caption/** + percent*/ +"&nbsp;");
}

var allPanels = $('.accordion > dd').hide();

var progressBars = new Array();
progressBars[0] = "setTimeout(function(){progressBar(50, $('#college'), '50%');},1500); "

function resizePanel() {

    width = $(window).width();
    height = $(window).height();

    mask_width = width * $('.item').length;
        
    $('#debug').html(width  + ' ' + height + ' ' + mask_width);
        
    $('#wrapper, .item').css({width: width, height: height});
    $('#mask').css({width: mask_width, height: height});
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);
        
}

$(document).ready(function(){
   
    $('#slideshowHolder').jqFancyTransitions({ width: 218, height: 317 });
   

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

    $('div.accordion h3').click(function(e){
        //if (!$(this).hasClass('active')) {
            //$('h3.active').next().slideToggle('fast');
            //$('h3.active').toggleClass('active');
        //}
        $(this).next().slideToggle('fast');
        $(this).toggleClass('active');
    });


    var allPanels = $('.accordion > dd').hide();
           
    $('.accordion > dt > a').click(function() {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      return false;
    });

    $(".about_me").click(function(){
        setTimeout(function(){progressBar(50, $('#college'), '50%');},1500); 
        setTimeout(function(){progressBar(50, $('#tc'), '2 years');},1700); 
        setTimeout(function(){progressBar(25, $('#notes'), '1 year');},1900); 
        setTimeout(function(){progressBar(25, $('#rc'), '1 year');},2100); 
        setTimeout(function(){progressBar(30, $('#life'), '30%');},2300);
        setTimeout(function(){$('.accordion > dd').hide();}, 800);
    });


    $(".unload").click(function(){
        setTimeout(function(){progressBar(0, $('#college'), '');},300); 
        setTimeout(function(){progressBar(0, $('#tc'), '');},300); 
        setTimeout(function(){progressBar(0, $('#notes'), '');},300); 
        setTimeout(function(){progressBar(0, $('#rc'), '');},300); 
        setTimeout(function(){progressBar(0, $('#life'), '');},300);
        setTimeout(function(){$('.accordion > dd').hide();}, 800);
    });

    $(".portfolio").click(function(){
        setTimeout(function(){progressBar(0, $('#college'), '');},300); 
        setTimeout(function(){progressBar(0, $('#tc'), '');},300); 
        setTimeout(function(){progressBar(0, $('#notes'), '');},300); 
        setTimeout(function(){progressBar(0, $('#rc'), '');},300); 
        setTimeout(function(){progressBar(0, $('#life'), '');},300);
        setTimeout(function(){$('#start').parent().next().slideDown();},1500);
    });


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
    setVariables($magicLineTwo, ".current_page_item_two");

    /* Kick IE into gear */
    $(".current_page_item_two a").mouseenter();

    $("#example-one a").click(function(){
    clicked($(this.parentNode));
    }).hover(function() {
    inFunction($(this), ".example-two li a", $magicLine, $magicLineTwo);
    }, function() {
    outFunction($magicLine, $magicLineTwo);    
    });

    $(".example-two a").click(function(){
      var addressValue2 = $(this).attr("href");
      // Remove the current class from all a3 tags
      // Add the current class to the clicked a
      $("#example-one li a").each(function() {
        if($(this).attr("href") == addressValue2) {
            clicked($(this.parentNode));
        }
      });
    }).hover(function() {
      inFunction($(this), "#example-one li a", $magicLineTwo, $magicLine);
    }, function() {    
      outFunction($magicLineTwo, $magicLine);
    });

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

    function clicked(clickedParentItem){
      // Remove the current class from all a tags
      $("#example-one li").removeClass("current_page_item");
      // Add the current class to the clicked a
      clickedParentItem.addClass("current_page_item");
      //$(clickedItem.parentNode).addClass("current_page_item");
      $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width())
        .data("origColor", $(".current_page_item a").attr("rel"));
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
        if($(this).attr("href") == addressVal) {
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