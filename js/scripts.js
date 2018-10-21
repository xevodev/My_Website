// Changes color of navbar when scrolled
$(document).ready(function() {
    if($(document).scrollTop() > 10) {
        $('nav').addClass('shrink');
        }
        else {
        $('nav').removeClass('shrink');
        }
        $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
        $('nav').addClass('shrink');
        }
        else {
        $('nav').removeClass('shrink');
        }
    });
}); 

//Smoothly scrolls to sections
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.collapse').collapse('hide');

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 63
    }, 500);
});