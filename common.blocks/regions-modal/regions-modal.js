modules.define('regions-modal__top-show', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $( ".regions-modal__top-show" ).click(function(){
                        $( ".regions-modal__top" ).slideToggle();
                        $( ".regions-modal__arrow" ).toggleClass("regions-modal__arrow_rotate")
                    });
                    
                }
            }
        }
    }));

});