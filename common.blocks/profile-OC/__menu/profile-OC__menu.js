modules.define('profile-OC__menu', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $(document).ready(function(){   

                        $(".profile-OC__item-settings").addClass("profile-OC__list-item_active"); 
                        
                        // $( ".profile-OC__additional-li" ).click(function() {
                        //     $( ".profile-OC__list-2" ).slideToggle( "fast" );
                        // });

                        $( ".profile-OC__item-scores" ).click(function() {
                            $(".profile-OC__list-item, .profile-OC__list-item-2").removeClass("profile-OC__list-item_active");
                            $(".profile-OC__item-scores").addClass("profile-OC__list-item_active");
                            $(".profile-OC__additional-li" ).removeClass("profile-OC__additional-li_active");
                            $(".profile-OC__cards" ).children( ).css({'display' : 'none'});
                            $(".profile-OC__scores").fadeIn();
                        });

                        $( ".profile-OC__item-settings" ).click(function() {
                            $(".profile-OC__list-item, .profile-OC__list-item-2").removeClass("profile-OC__list-item_active");
                            $(".profile-OC__item-settings").addClass("profile-OC__list-item_active");
                            $(".profile-OC__additional-li" ).removeClass("profile-OC__additional-li_active");
                            $(".profile-OC__cards" ).children( ).css({'display' : 'none'});
                            $(".profile-OC__settings").fadeIn();
                        });

                        $( ".profile-OC__item-subscribe" ).click(function() {
                            $(".profile-OC__list-item, .profile-OC__list-item-2").removeClass("profile-OC__list-item_active");
                            $(".profile-OC__item-subscribe").addClass("profile-OC__list-item_active");
                            $(".profile-OC__additional-li" ).removeClass("profile-OC__additional-li_active");
                            $(".profile-OC__cards" ).children( ).css({'display' : 'none'});
                            $(".profile-OC__subscriptions").fadeIn();
                        });

                        $( ".profile-OC__item-in-work" ).click(function() {
                            $(".profile-OC__list-item, .profile-OC__list-item-2").removeClass("profile-OC__list-item_active");
                            $(".profile-OC__item-in-work").addClass("profile-OC__list-item_active");
                            $(".profile-OC__additional-li" ).addClass("profile-OC__additional-li_active");
                            $(".profile-OC__cards" ).children( ).css({'display' : 'none'});
                            $(".profile-OC__in-work").fadeIn();
                        });

                        $( ".profile-OC__item-archive" ).click(function() {
                            $(".profile-OC__list-item, .profile-OC__list-item-2").removeClass("profile-OC__list-item_active");
                            $(".profile-OC__item-archive").addClass("profile-OC__list-item_active");
                            $(".profile-OC__additional-li" ).addClass("profile-OC__additional-li_active");
                            
                            $(".profile-OC__cards" ).children( ).css({'display' : 'none'});
                            $(".profile-OC__archive").fadeIn();
                        });
                    });
                    
                }
            }
        }
    }));

});