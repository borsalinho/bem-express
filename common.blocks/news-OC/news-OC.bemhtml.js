block('news-OC')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            
            return [ 
                {
                    cls:'col-sm-6 col-lg-3',
                    elem:item.mt,
                    content:{
                        elem:'card',
                        attrs:{
                            style:'background:linear-gradient(180deg, rgba(39, 73, 109, 0.8) 0%, #27496D 100%),' + item.background + 'center center no-repeat; background-size: cover;'
                        },
                        content:[                        
                            {
                                elem:'title',
                                tag:'h3',
                                content:item.title
                            },
                            {
                                elem:'bottom',
                                content:[
                                    {   
                                        elem:'data',
                                        content:item.data
                                    },
                                    {
                                        elem:'viewed',
                                        tag:'img',
                                        attrs:{
                                            src:'img/main-OC__actual/eye.png'
                                        },
                                    },
                                    '565'
                                ]
                            }
                        ]
                    }
                }
                   
            ]
        });
    }),
);