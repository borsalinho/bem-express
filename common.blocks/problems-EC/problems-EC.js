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

modules.define('problems-EC__selectize-control', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#problems-EC__selectize-control").selectize({
                        create: true,
                        sortField: 'text',
                        
                    });
                    
                }
            }
        }
    }));
});

modules.define('problems-EC__selectize-card', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#problems-EC__selectize-card").selectize({
                        create: true,
                        sortField: 'text',
                        
                    });
                    
                }
            }
        }
    }));
});

modules.define('form-EC__problems-category', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#form-EC__problems-category").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Категория',
                    });
                    
                }
            }
        }
    }));
});

modules.define('form-EC__problems-type', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#form-EC__problems-type").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Тип нарушения',
                    });
                    
                }
            }
        }
    }));
});

modules.define('form-EC__problems-region', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#form-EC__problems-region").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Выберите ваш регион',
                    });
                    
                }
            }
        }
    }));
});

modules.define('form-EC__problems-location', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#form-EC__problems-location").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });
                    
                }
            }
        }
    }));
});

modules.define('form-EC__problems-lab', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    
                    $("#form-EC__problems-lab").selectize({
                        create: true,
                        sortField: 'text',
                        placeholder: 'Населенный пункт',
                    });
                    
                }
            }
        }
    }));
});
