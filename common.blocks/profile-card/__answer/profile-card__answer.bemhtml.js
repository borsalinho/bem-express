block('profile-card').elem('answer')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {
                    elem:'answer-card',
                    mix:{block:'card-OC'},
                    content:[
                        {
                            elem:'answer-avatar',
                            content:{
                                tag:'img',
                                attrs:{
                                    src:'/img/profile-card/admin-avatar.png'
                                }
                            }
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
                    ]
                }
                
            ];
 
        });

    }),
  
    
);