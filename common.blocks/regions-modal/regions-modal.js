modules.define('regions-modal__top-show', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $( ".regions-modal__top-show" ).click(function(){
                        $( ".regions-modal__top" ).slideToggle();
                        $( ".regions-modal__top-show .regions-modal__arrow" ).toggleClass("regions-modal__arrow_rotate")
                    });
                    
                }
            }
        }
    }));

});

modules.define('regions-modal__description-sm-title', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $( ".regions-modal__description-sm-title" ).click(function(){
                        $( ".regions-modal__description" ).slideToggle();
                        $( ".regions-modal__description-sm-title .regions-modal__arrow" ).toggleClass("regions-modal__arrow_rotate")
                    });
                    
                }
            }
        }
    }));

});

modules.define('regions-modal__effect-sm-title', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $( ".regions-modal__effect-sm-title" ).click(function(){
                        $( ".regions-modal__effect" ).slideToggle();
                        $( ".regions-modal__effect-sm-title .regions-modal__arrow" ).toggleClass("regions-modal__arrow_rotate")
                    });
                    
                }
            }
        }
    }));

});