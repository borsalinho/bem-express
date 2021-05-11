block('news-OC')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            
            return [ 
                {
                    cls:'col-sm-6 col-lg-3',
                    
                    content:{
                        elem:'card',
                        mix:
                            { 
                                block:'card-OC',
                                mods:{ mt:'20' }
                            }
                        ,
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