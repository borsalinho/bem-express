modules.define('services-slider-header-OC', ['i-bem-dom'], function(provide, bemDom) {

  provide(bemDom.declBlock(this.name, {
      onSetMod: {
          js: {
              inited: function() {
                $(document).ready(function(){   
                  $('.services-slider-header-OC').slick({
                  lazyLoad: 'ondemand',
                    dots: false,
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                  });
                });
              }
          }
      }
  }));

});
