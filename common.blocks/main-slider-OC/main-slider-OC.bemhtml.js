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
                                    content:[{
                                        block:'main-slider-OC',
                                        // вот тут без упоминания блока работает некоректно
                                        elem: 'title',
                                        content: item.title
                                    },
                                    {
                                        block:'main-slider-OC',
                                        elem: 'text',
                                        content: item.text
                                    },
                                    {
                                        cls:'row',
                                        content:[
                                            {
                                                cls:'col-xl-auto d-flex',
                                                content:{
                                                    block:'main-slider-OC',
                                                    elem:'button',
                                                    url:item.url,
                                                    content:item.button
                                                }
                                            },
                                            {
                                                cls:'col-xl-auto',
                                                content:[
                                                    {   
                                                        block:'main-slider-OC',
                                                        elem:'info',
                                                        content:'Всего поступило'
                                                    },
                                                    {   
                                                        block:'main-slider-OC',
                                                        elem:'board',
                                                        content:[
                                                            {   
                                                                block:'main-slider-OC',
                                                                elem:'icon',
                                                                content:{
                                                                    tag:'img',
                                                                    attrs:{
                                                                        src:'img/main-slider-OC/check-mark.png'
                                                                    },
                                                                }
                                                            },
                                                            {
                                                                block:'main-slider-OC',
                                                                elem:'number',
                                                                content:'2020'
                                                            }
                                                        ]
                                                        
                                                    }
                                                ]
                                                    
                                                
                                            }
                                        ]
                                        
                                    }
                                    
                                ]
                                        
                                    
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
    elem('title')(
        tag()('h3'),
    ),
    elem('text')(
        tag()('p'),
    ),
    elem('button')(
        tag()('a'),
        attrs()(function() {
            return { href: this.ctx.url };    
        })
    ),
    elem('icon')(
        tag()('span'),
    ),
    elem('number')(
        tag()('span'),
    ),
);
