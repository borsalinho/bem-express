block('profile-OC').elem('card-archive')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {
                    elem:'card-archive-top',
                    content:[
                        {
                            elem:'card-archive-title',
                            content:item.title
                        },
                        {
                            block: "status",
                            content: [
                                {
                                    completed:true,
                                    // inWork: true,
                                    // clarifed:true,
                                },
                            ],
                        },
                    ]
                },
                {
                    elem:'card-archive-bottom',
                    content:[
                        {
                            elem:'card-archive-data',
                            content:item.data
                        },
                        
                        {
                            elem:'unsubscribe',
                            content:'Отписатсья от проблемы',
                            tag:'button'
                        }
                    ]
                }
            ];
 
        });

    }),
  
    
);