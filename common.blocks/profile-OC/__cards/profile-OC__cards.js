modules.define('profile-OC__cards', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $(document).ready(function(){   
                        
                        $(".profile-OC__in-work , .profile-OC__empty , .profile-OC__archive , .profile-OC__subscriptions , .profile-OC__scores").addClass("profile-OC__card_hide"); 
                        
                        
                    });
                    
                }
            }
        }
    }));

});