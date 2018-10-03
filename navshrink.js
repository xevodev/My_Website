$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
      $('nav').addClass('shrink');
      $('nav').removeClass('navbar-dark');
      $('nav').addClass('navbar-light');
    }
    else {
    $('nav').removeClass('shrink');
    $('nav').removeClass('navbar-light');
    $('nav').addClass('navbar-dark');
    }
  });
});