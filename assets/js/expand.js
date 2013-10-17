$(document).ready(function(){
	$('div.accordion h3').click(function(e){
		//if (!$(this).hasClass('active')) {
			//$('h3.active').next().slideToggle('fast');
			//$('h3.active').toggleClass('active');
		//}
		$(this).next().slideToggle('fast');
		$(this).toggleClass('active');
	});
});