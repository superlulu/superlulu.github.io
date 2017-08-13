$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	//Landing - Parallax Stuff

	$('#landing .wrapper').css({
		'opacity' : 1 - wScroll /220
	});

	$('#landing #filter').css({
		'opacity' : 0.85 - wScroll /300
	});

	$('#landing-BG').css({
		'transform' : 'translate(0px, '+ wScroll /25 +'%)'
	});

	$('#landing-me').css({
		'transform' : 'translate(0px, '+ wScroll /22 +'%) rotate('+ wScroll/150 +'deg)'
	});

	$('#landing-bild').css(
	{
		'transform' : 'translate(0px, '+ wScroll /10 +'%) rotate('+ wScroll/150 +'deg)' 
	});	

	$('#landing-hantel').css(
	{
		'transform' : 'translate(0px, '+ wScroll /4 +'%) rotate('+ -wScroll/70 +'deg)' 
	});	

	$('#landing-laptop').css(
	{
		'transform' : 'translate('+ wScroll/60+'%, '+ wScroll /7.5 +'%) rotate('+ -wScroll/90 +'deg)' 
	});	

	$('#landing-cola').css(
	{
		'transform' : 'translate(0px, '+ wScroll/10  +'%) rotate('+ -wScroll/30 +'deg)' 
	});	

	$('#landing-handy').css(
	{
		'transform' : 'translate('+ wScroll/30+'%, '+ wScroll/6  +'%) rotate('+ -wScroll/40 +'deg)' 
	});	

	$('#landing-kekse').css(
	{
		'transform' : 'translate('+ -wScroll/70+'%, '+ wScroll/12  +'%) rotate('+ wScroll/100 +'deg)' 
	});	

	$('#landing-speaker').css(
	{
		'transform' : 'translate(-'+ wScroll/70+'%, '+ wScroll/100  +'%) rotate('+ wScroll/120 +'deg)' 
	});	

	$('#landing-stift').css(
	{
		'transform' : 'translate('+ -wScroll/100+'%, '+ wScroll/30  +'%) rotate('+ -wScroll/90 +'deg)' 
	});	

	$('#landing-apple').css(
	{
		'transform' : 'translate('+ wScroll/20+'%, '+ -wScroll/20  +'%) rotate('+ -wScroll/50 +'deg)' 
	});	


	//About LUVE Parallax Stuff

	if(wScroll > $('#about').offset().top - $(window).height()){

		$('#poly').css(
		{
			'transform' : 'translate(0px, '+ (wScroll - ($('#about').offset().top)) / 15  +'%)' 
		});
		$('#portrait-bild').css(
		{
			'transform' : 'translate(0px, '+ (wScroll - ($('#about').offset().top)) / 50  +'%)' 
		});
	}


	if(wScroll > $('#workspace').offset().top - $(window).height()){

		$('#workspace-bild').css(
		{
			'transform' : 'translate(0px, '+ (wScroll - ($('#workspace').offset().top)) / 13  +'%)' 
		});
	}
});