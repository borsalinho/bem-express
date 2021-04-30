modules.define('services-slider-OC', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                  $(document).ready(function(){   
                    $('.services-slider-OC').slick({
                    lazyLoad: 'ondemand',
                      dots: false,
                      arrows: true,
                      infinite: true,
                      speed: 300,
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      responsive: [
                      {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 2,
                        }
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          // dots: true,
                          // arrows: false,
                          slidesToShow: 1,
                        }
                      }
                    ]
                    });
                    $('.main-OC__services-skeleton').css({'display' : 'none'});
                    $('.services-slider-OC').show();
                  });
                }
            }
        }
    }));
  
  });
  