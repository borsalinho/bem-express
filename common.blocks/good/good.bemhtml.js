block('good')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'title',
                            content: item.title
                        },
                        {
                            elem: 'image',
                            url: item.image
                        },
                        
                    ]
                },
                
            ];
 
        });

    }),
  
    elem('item')(
        
    ),

    elem('title')(
        tag()('h3')
    ),

    elem('image')(
        tag()('img'),

        attrs()(function() {
            return { src: this.ctx.url };    
        })
    ),
            
    elem('price')(
        tag()('span')
    )
);