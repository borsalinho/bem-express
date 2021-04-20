$(document).ready(function(){   
    $('.main-slider-OC').slick({
        lazyLoad: 'ondemand',
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.main-slider-OC__skeleton').css({'display' : 'none'});
    $('.main-slider-OC').show();
});
