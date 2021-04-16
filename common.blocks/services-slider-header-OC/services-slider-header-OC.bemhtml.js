block('services-slider-header-OC')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            return [
                {
                    elem: 'item',
                    content:{
                        elem:'url',
                        url: item.url,
                        cls:'d-flex',
                        content:[
                            {
                                elem:'',
                                content:{
                                    elem: 'image',
                                    url: item.image
                                }
                            },
                            {
                                elem:'',
                                content:{
                                    elem: 'text',
                                    content: item.text
                                }
                            },
                        ]
                    } 
                },
                
            ];
 
        });

    }),
    elem('url')(
        tag()('a'),
        attrs()(function() {
            return { href: this.ctx.url };    
        })
    ),

    elem('image')(
        tag()('img'),

        attrs()(function() {
            return { 'data-lazy': this.ctx.url };    
        })
    ),

    elem('text')(
        tag()('h4'),
    ),
);