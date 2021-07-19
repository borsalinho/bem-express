modules.define('problems-EC__region-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#problems-EC__region").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Выберите ваш район',
                    });
                    
                }
            }
        }
    }));
});

modules.define('problems-EC__settlement-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#problems-EC__settlement").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });
                    
                }
            }
        }
    }));
});

modules.define('problems-EC__category-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#problems-EC__category").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Категория',
                    });
                    
                }
            }
        }
    }));
});