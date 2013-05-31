jQuery(document).ready(function($) {
	var head = $('.accordion_menu > li > a'), body = $('.accordion_menu li > .sub-menu');
	head.first().addClass('active').next().slideDown('normal');
	head.on('click', function(event) {
		event.preventDefault();
		if ($(this).attr('class') != 'active') {
			body.slideUp('normal');
			$(this).next().stop(true,true).slideToggle('normal');
			head.removeClass('active');
			$(this).addClass('active');
		};
	});
});