modules.define('dropdown-click-OC', ['i-bem-dom'], function(provide, bemDom) {


provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                $(".dropdown-click-OC").click(function(event){
                    $( ".dropdown-click-OC__item" ).slideDown( "fast" );
                        event.preventDefault();
                    });
                $(document).mouseup(function (e){
                    if (!$(".dropdown-click-OC").is(e.target) && !$(".dropdown-click-OC__item").is(e.target)
                        && $(".dropdown-click-OC__item").has(e.target).length === 0) { 
                        $( ".dropdown-click-OC__item" ).slideUp( "fast" ); 
                    }
                });
            }
        }
    }
}));

});
