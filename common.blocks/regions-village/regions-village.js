modules.define('regions-village__region-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#village__region").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Выберите улус',
                    });
                    
                }
            }
        }
    }));

});

modules.define('regions-village__location-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#village__location").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });

                }
            }
        }
    }));

});

modules.define('regions-village__category-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    $("#village__category").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Категория',
                    });
                    
                }
            }
        }
    }));

});

modules.define('regions-village__status-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#village__status").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Статус',
                    });
                }
            }
        }
    }));

});

modules.define('regions-village__number-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#village__number-select").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-village-region', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-village-region").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-village-location', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-village-location").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-form__idea-village-category', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {


                    $("#idea-village-category").selectize({
                        create: true,
                        sortField: 'text',
                    });
                }
            }
        }
    }));

});

modules.define('regions-concepts__village-anchor', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    $('.regions-concepts__village-anchor').on('click', function(e){
                        $('html,body').stop().animate({ scrollTop: $('#regions__village-form').offset().top }, 1000);
                        e.preventDefault();
                    });
                }
            }
        }
    }));

});