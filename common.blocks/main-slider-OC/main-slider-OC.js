modules.define('main-slider-OC', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $(document).ready(function(){   
                        $('.main-slider-OC').slick({
                            lazyLoad: 'ondemand',
                            dots: true,
                            arrows: false,
                            infinite: true,
                            adaptiveHeight: true,	
                            speed: 300,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        });
                        $('.main-slider-OC__skeleton').css({'display' : 'none'});
                        $('.main-slider-OC').show();
                    });
                }
            }
        }
    }));

});

