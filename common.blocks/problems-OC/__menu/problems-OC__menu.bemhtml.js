block('problems-OC').elem('menu')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {
                    elem:'menu-item',
                    content:[
                        {
                            tag:'img',
                            attrs:{
                                src:item.img
                            }
                        },
                        {
                            tag:'span',
                            content:item.text
                        },
                        {   
                            elem:'menu-item-img',
                            tag:'img',
                            attrs:{
                                src:item.icon
                            }
                        }
                    ]
                }
                
            ];
 
        });

    }),
  
    
);