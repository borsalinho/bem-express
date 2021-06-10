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
                            $('.contests-OC__ong-skeleton').css({'display' : 'none'});
                            $('.contests-OC__ong-slider').show();
                        }
                        
                    });

                    $('.contests-OC__news-tab').click(function(){
                        if ($(this).hasClass('contests-OC__news-tab_active_true')){

                        }
                        else{
                            $('.contests-OC__news-tab').toggleClass('contests-OC__news-tab_active_true');
                            $('.contests-OC__news-body').toggleClass('contests-OC__news-body_active_true')
                        }
                        
                    })
                }
            }
        }
    }));
    
    });
    