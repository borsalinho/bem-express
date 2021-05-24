block('profile-card').elem('answer')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {
                    elem:'answer-avatar'
                },
                {
                    elem:'answer-body',
                    content:[
                        {
                            elem:'answer-name',
                            content:'Администратор'
                        },
                        {
                            elem:'answer-data',
                            content:item.data
                        },
                        {
                            elem:'answer-text',
                            tag:'p',
                            content:item.text
                        }
                    ]
                }
            ];
 
        });

    }),
  
    
);