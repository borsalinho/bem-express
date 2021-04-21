modules.define('dropdown-hover-OC', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $(".dropdown-hover-OC").hover(function(event){
                        $( ".dropdown-hover-OC__item" ).slideDown( "fast" );
                            event.preventDefault();
                        });
                    $(document).mouseup(function (e){
                        if (!$(".dropdown-hover-OC").is(e.target) && !$(".dropdown-hover-OC__item").is(e.target)
                            && $(".dropdown-hover-OC__item").has(e.target).length === 0) { 
                            $( ".dropdown-hover-OC__item" ).slideUp( "fast" ); 
                        }
                    });
                }
            }
        }
    }));

});


