block('profile-OC').elem('card')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {
                    elem:'card-top',
                    tag:'h6',
                    content:{
                        elem:'card-title',
                        content:item.title
                    }
                },
                {
                    elem:'card-bottom',
                    content:[
                        {
                            elem:'card-data',
                            content:item.data
                        },
                        {
                            block: "status",
                            content: [
                                {
                                    // completed:true,
                                    inWork: true,
                                    // clarifed:true,
                                },
                            ],
                        },
                    ]
                }
            ];
 
        });

    }),
  
    
);