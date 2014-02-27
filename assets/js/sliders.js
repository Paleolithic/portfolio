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

$(document).ready(function(){ 

    $('#slideshowHolder').jqFancyTransitions({ 
        width: 218, height: 317 
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
});
