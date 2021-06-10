modules.define('contests-OC__ong-slider', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $(document).ready(function(){

                        let lengthSlider = $('.contests-OC__slide').length;
                        // если слайд один, то без слайдера
                        if (lengthSlider > 1){
                            $('.contests-OC__ong-slider').slick({
                                lazyLoad: 'ondemand',
                                dots: true,
                                arrows: false,
                                infinite: true,
                                speed: 300,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            });
                        }
                        // тк слайдов мало, то без скелетона
                    });
                }
            }
        }
    }));
    
    });
    