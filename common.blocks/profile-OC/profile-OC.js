modules.define('header-OC__init-slider', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    
                    $('.profile-OC__s-m-button').click(function(){
                        $('.profile-OC__s-m-button').css('display','none');
                        $('.profile-OC__s-m-take-area').css('display','block');
                    });
                }
            }
        }
    }));

});