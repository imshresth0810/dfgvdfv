$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
});
$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',

    });
});