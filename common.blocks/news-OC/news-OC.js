modules.define('news-OC__a-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#news__region").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Выберите ваш район',
                    });
                    
                    $("#news__location").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });
                    
                }
            }
        }
    }));

});