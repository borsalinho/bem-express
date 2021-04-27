block('actual-info-OC')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            return [
                {
                    elem:'slider',
                    content:{
                        elem:'slide',
                        attrs:{
                            style:'background:linear-gradient(180deg, rgba(39, 73, 109, 0.8) 0%, #27496D 100%),' + item.background + 'center center no-repeat; background-size: cover;'
                        },
                        content:[
                            {
                                elem:'content',
                                content:[
                                    {
                                        elem:'title',
                                        tag:'h3',
                                        content:item.title
                                    },
                                    {
                                        elem:'text',
                                        tag:'p',
                                        content:item.text
                                    },
                                    {
                                        elem:'url',
                                        tag:'a',
                                        content:'Подробнее',
                                        attrs:{
                                            href:item.url
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    elem:'skeleton'
                }
            ];
        });
    }),
    
    
);
