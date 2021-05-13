block('profile-OC').elem('card')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {
                    elem:'card-title',
                    content:item.title
                },
                {
                    elem:'card-data',
                    content:item.data
                },
                {
                    elem:'card-status',
                    content:item.status
                },
            ];
 
        });

    }),
  
    
);