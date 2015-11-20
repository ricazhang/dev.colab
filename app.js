$(function() {
	/* slide panel toggle */
	$('.card').on('click', function(event){
		event.preventDefault();
		console.log("card clicked");
		$('.cd-panel').toggleClass('is-visible');
	});
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
})