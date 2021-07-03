$(document).ready(function() {
    function scroll(e) {

    var href = $(this).attr('href');

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);

    location.hash = href;

};

$('a[href^="#"]').click(scroll);
    
$('.menu').click(function(){
    $('nav').toggleClass('active');
    $(this).toggleClass('color');
    $('header, section').toggleClass('opacity');
}); 
    
    
});