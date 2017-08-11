$(window).load(function(){
   finishLoading();
});

function finishLoading() {
	$('#hold').html('LUVE');
	$( "#loading-wrapper" ).animate({
    opacity: 0,
    top: "-=300",
  }, 2000, 'swing', function() {
    // Animation complete.
  });
	$( "#loading" ).animate({
    opacity: 0,
  }, 2000, 'swing', function() {
    // Animation complete.
  });
	setTimeout(stopLoading, 2000);
}

function stopLoading() {
    $('#loading').remove()
}