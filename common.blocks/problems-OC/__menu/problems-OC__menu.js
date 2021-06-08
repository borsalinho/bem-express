modules.define('problems-OC__menu', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $('.problems-OC__menu-item:first .problems-OC__menu-item-img').addClass( "problems-OC__menu-item-img_rotate");
                    $('.problems-OC__menu-item:first span').css('border-bottom','2px solid rgb(3, 90, 166)').css('padding-bottom','2px');
                        
                    $(".problems-OC__menu-item").on("click", function () {
                        var index = $(".problems-OC__menu-item").index(this);
                        var indexImg = $(".problems-OC__menu-item .problems-OC__menu-item-img");
                        var indexSpan = $(".problems-OC__menu-item span")
                        
                        var $tags = $(".problems-OC__tags-item");
                        if ($tags.eq(index).is(":visible")) {
                            $tags.eq(index).hide("fast");
                            indexImg.eq(index).removeClass( "problems-OC__menu-item-img_rotate");
                            indexSpan.eq(index).css('border-bottom','none');
                        } else {
                            $tags.hide("fast");
                            indexImg.removeClass( "problems-OC__menu-item-img_rotate" );
                            indexSpan.css('border-bottom','none');

                            $tags.eq(index).show("fast");
                            indexImg.eq(index).addClass( "problems-OC__menu-item-img_rotate" );
                            indexSpan.eq(index).css('border-bottom','2px solid rgb(3, 90, 166)').css('padding-bottom','2px');;
                        }
                    });
                    
                    
                }
            }
        }
    }));
    
    });
    