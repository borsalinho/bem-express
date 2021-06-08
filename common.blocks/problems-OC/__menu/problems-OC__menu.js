modules.define('problems-OC__menu', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $('.problems-OC__menu-item:first .problems-OC__menu-item-img').addClass( "problems-OC__menu-item-img_rotate");
                        
                    $(".problems-OC__menu-item").on("click", function () {
                        var index = $(".problems-OC__menu-item").index(this);
                        var indexImg = $(".problems-OC__menu-item .problems-OC__menu-item-img")
                        
                        var $tags = $(".problems-OC__tags-item");
                        if ($tags.eq(index).is(":visible")) {
                            $tags.eq(index).hide("fast");
                            indexImg.eq(index).removeClass( "problems-OC__menu-item-img_rotate" );
                        } else {
                            $tags.hide("fast");
                            indexImg.removeClass( "problems-OC__menu-item-img_rotate" );
                    
                            $tags.eq(index).show("fast");
                            indexImg.eq(index).addClass( "problems-OC__menu-item-img_rotate" );
                        }
                    });
                    
                    
                }
            }
        }
    }));
    
    });
    