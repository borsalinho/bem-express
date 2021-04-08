// код рабочий, но не могу подключить
    $(".header-OC__button-service").hover(function(event){
        $( ".header-OC__services" ).slideDown( "fast" );
            event.preventDefault();
        });
    $(document).mouseup(function (e){
        if (!$(".header-OC__button-service").is(e.target) && !$(".header-OC__services").is(e.target)
            && $(".header-OC__services").has(e.target).length === 0) { 
            $( ".header-OC__services" ).slideUp( "fast" ); 
        }
    });
    