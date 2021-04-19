block('main-slider-OC')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            return [
                {
                    elem:'item',
                    content:{
                        cls:'container',
                        content:[
                            {
                                cls:'row',
                                content:[
                                {
                                    cls:'col-lg-7',
                                    content:{
                                        block:'main-slider-OC',
                                        // вот тут без упоминания блока работает некоректно
                                        elem: 'text',
                                        content: item.text
                                    }
                                        
                                    
                                },
                                {
                                    cls:'col-lg-5',
                                    content:{
                                        block:'main-slider-OC',
                                        elem:'image',
                                        url: item.image
                                    }
                                },
                            ] 
                            }
                        ]
                    },
                },
            ];
        });
    }),

    elem('image')(
        tag()('img'),

        attrs()(function() {
            return { 'data-lazy': this.ctx.url };    
        })
    ),
);
