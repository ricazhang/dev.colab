$(function() {
	/* slide panel toggle */
	$('.project-name').on('click', function(event){
		event.preventDefault();
		if ($(this).hasClass('add-card')) {
			return;
		}
		$('.cd-panel').toggleClass('is-visible');
	});
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});

	$('add-card').click(function() {
		$('#main-section').append();
	});
})