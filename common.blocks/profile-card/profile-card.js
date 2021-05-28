modules.define('profile-card__change-status', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $(document).ready(function(){   

                        $(".profile-card__change-card").addClass("profile-card__change-card_hide"); 
                        
                        $( ".profile-card__change-status" ).click(function() {
                            $( ".profile-card__change-card" ).slideToggle( "fast" );
                        });

                        $(document).click(function (e){
                            if (
                                !$(".profile-card__change-card").is(e.target) && 
                                !$(".profile-card__change-status").is(e.target) && 
                                $(".profile-card__change-card").has(e.target).length === 0
                                ) 
                            { 
                                $( ".profile-card__change-card" ).slideUp( "fast" );
                            }
                        });
                    });
                    
                }
            }
        }
    }));

});


