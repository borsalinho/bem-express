modules.define('regions-complex__region-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#complex__region").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Выберите улус',
                    });
                    
                }
            }
        }
    }));

});

modules.define('regions-complex__location-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#complex__location").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });

                }
            }
        }
    }));

});

modules.define('regions-complex__category-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#complex__category").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Категория',
                    });
                    
                }
            }
        }
    }));

});

modules.define('regions-complex__status-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#complex__status").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Статус',
                    });
                }
            }
        }
    }));

});

modules.define('regions-complex__number-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#complex__number-select").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-complex-region', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-complex-region").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-complex-location', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-complex-location").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-complex-category', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-complex-category").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});