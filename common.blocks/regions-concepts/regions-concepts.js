modules.define('regions-concepts__region-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#concepts__region").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Выберите улус',
                    });
                    
                    $("#concepts__location").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });

                    $("#concepts__category").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Категория',
                    });
                }
            }
        }
    }));

});