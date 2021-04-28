modules.define('actual-info-OC', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                $(document).ready(function(){

                    var $slider = $('.actual-info-OC__slider');

                    if ($slider.length) {
                    var currentSlide;
                    var slidesCount;
                    var sliderCounter = document.createElement('div');
                    sliderCounter.classList.add('slider__counter');
                    
                    var updateSliderCounter = function(slick, currentIndex) {
                        currentSlide = slick.slickCurrentSlide() + 1;
                        slidesCount = slick.slideCount;
                        $(sliderCounter).text(currentSlide + '/' +slidesCount)
                    };

                    $slider.on('init', function(event, slick) {
                        $slider.append(sliderCounter);
                        updateSliderCounter(slick);
                    });

                    $slider.on('afterChange', function(event, slick, currentSlide) {
                        updateSliderCounter(slick, currentSlide);
                    });

                    $slider.slick({
                        lazyLoad: 'ondemand',
                        dots: false,
                        arrows: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    });
                    }
                       
                    // $('.actual-info-OC__slider').slick({
                    //     lazyLoad: 'ondemand',
                    //     dots: false,
                    //     arrows: true,
                    //     infinite: true,
                    //     speed: 300,
                    //     slidesToShow: 1,
                    //     slidesToScroll: 1,
                    // });
                    $('.actual-info-OC__skeleton').css({'display' : 'none'});
                    $slider.show();
                });
            }
        }
    }
}));

});
