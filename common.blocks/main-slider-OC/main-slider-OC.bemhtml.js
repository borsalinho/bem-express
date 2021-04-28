block('main-slider-OC')(

    content()(function() {
        

        return this.ctx.goods.map(function(item){
            let monitoringElem;
            if(item.monitoringElemData){
                monitoringElem = [{
                    cls:'col-auto order-1 order-lg-2',
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
                },
                {
                    cls:'col-lg-auto col-6 order-2 order-lg-3',
                    content:[
                        {   
                            block:'main-slider-OC',
                            elem:'info',
                            content:'В регионе было решено'
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
                                            src:'img/main-slider-OC/check-marks.png'
                                        },
                                    }
                                },
                                {
                                    block:'main-slider-OC',
                                    elem:'number',
                                    content:'2621'
                                }
                            ]
                        }
                    ]
                },
                {
                    cls:'col-lg-auto order-3 order-lg-4',
                    content:[
                        {   
                            block:'main-slider-OC',
                            elem:'info',
                            content:'Сейчас рассматривается'
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
                                            src:'img/main-slider-OC/check-marks.png'
                                        },
                                    }
                                },
                                {
                                    block:'main-slider-OC',
                                    elem:'number',
                                    content:'101'
                                }
                            ]
                        }
                    ]
                }
            ]
            }

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
                                    block:'main-slider-OC',
                                    elem:'col',
                                    content:[{
                                        block:'main-slider-OC',
                                        elem: 'title',
                                        tag:item.titletag,
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
                                                cls:'col-lg-auto d-flex order-4 order-lg-1',
                                                content:{
                                                    block:'main-slider-OC',
                                                    elem:'button',
                                                    url:item.url,
                                                    content:item.button
                                                }
                                            },
                                            monitoringElem
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
        tag()(function(){
            return this.ctx.tag
        }),
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
