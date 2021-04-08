modules.define('dropdown-OC', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                $(".dropdown-OC").hover(function(event){
                    $( ".header-OC__drop-list" ).slideDown( "fast" );
                        event.preventDefault();
                    });
                $(document).mouseup(function (e){
                    if (!$(".dropdown-OC").is(e.target) && !$(".header-OC__drop-list").is(e.target)
                        && $(".header-OC__drop-list").has(e.target).length === 0) { 
                        $( ".header-OC__drop-list" ).slideUp( "fast" ); 
                    }
                });
            }
        }
    }
}));

});

// НЕ работает
