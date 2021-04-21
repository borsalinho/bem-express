// modules.define('header-OC__init-slider', ['i-bem-dom'], function(provide, bemDom) {

//     provide(bemDom.declBlock(this.name, {
//         onSetMod: {
//             js: {
//                 inited: function() {
                      
//                     $(document).ready(function(){   
                        
//                         $(".header-OC__init-slider").hover(function(event){
//                             $( ".header-OC__services" ).removeClass( "header-OC__services_hide" );
//                             $( ".header-OC__services" ).addClass( "header-OC__services_show" );
//                             $( ".header-OC__arrow" ).addClass( "header-OC__arrow_rotate" );
//                                 event.preventDefault();
//                             });
//                         $(document).mouseup(function (e){
//                             if (
//                                 !$(".header-OC__init-slider").is(e.target) && 
//                                 !$(".services-slider-header-OC").is(e.target) && 
//                                 $(".services-slider-header-OC").has(e.target).length === 0
//                                 ) 
//                             { 
//                                 $( ".header-OC__services" ).removeClass( "header-OC__services_show" );
//                                 $( ".header-OC__services" ).addClass( "header-OC__services_hide" );
//                                 $( ".header-OC__arrow" ).removeClass( "header-OC__arrow_rotate" );
//                             }
//                         });
//                     });
                    
//                     // Скрывает открытое меню сервисов при уменьшении экрана 1200пикселей
//                     $(window).resize(function() {
//                         if ($(this).width() < 1200) {
//                         $( ".header-OC__services" ).addClass( "header-OC__services_hide" );
//                         $( ".header-OC__arrow" ).removeClass( "header-OC__arrow_rotate" );
//                         } 
//                     });
                    
//                 }
//             }
//         }
//     }));

// });

// пример