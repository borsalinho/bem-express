modules.define('actual-info-OC', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                $(document).ready(function(){   
                    $('.actual-info-OC__slider').slick({
                        lazyLoad: 'ondemand',
                        dots: false,
                        arrows: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    });
                    $('.actual-info-OC__skeleton').css({'display' : 'none'});
                    $('.actual-info-OC__slider').show();
                });
            }
        }
    }
}));

});
