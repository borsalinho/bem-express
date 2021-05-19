modules.define('profile-OC__menu', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $(document).ready(function(){   

                        $(".profile-OC__item-settings").addClass("profile-OC__list-item_active"); 
                        
                        $( ".profile-OC__additional-li" ).click(function() {
                            $( ".profile-OC__list-2" ).slideToggle( "fast" );
                        });

                        

                        $( ".profile-OC__item-scores" ).click(function() {
                           $(".profile-OC__item-settings").removeClass(".profile-OC__list-item_active");
                           $(".profile-OC__item-scores").addClass("profile-OC__list-item_active"); 
                        });
                        
                    });
                    
                }
            }
        }
    }));

});