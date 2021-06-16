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
                    
                }
            }
        }
    }));

});

modules.define('regions-concepts__location-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#concepts__location").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });

                }
            }
        }
    }));

});

modules.define('regions-concepts__category-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

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

modules.define('regions-concepts__status-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#concepts__status").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Статус',
                    });
                }
            }
        }
    }));

});

modules.define('regions-concepts__number-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#concepts__number-select").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-concept-region', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-concept-region").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-concept-location', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-concept-location").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-concept-category', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-concept-category").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});