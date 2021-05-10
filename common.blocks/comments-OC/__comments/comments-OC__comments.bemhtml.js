block('comments-OC').elem('comments')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            return [
                {
                    elem:'comment',
                    content:[
                        {
                            elem:'avatar',
                            content:{
                                tag:'img',
                                attrs:{
                                    src:item.avatarUrl
                                }
                            }
                        },
                        {
                            elem:'body',
                            content:[
                                {
                                    elem:'name',
                                    tag:'p',
                                    content:item.userName
                                },
                                {
                                    elem:'text',
                                    tag:'p',
                                    content:item.userText
                                },
                            ]
                        }
                    ]
                }
                
            ];
        });
    }),
    
    
);
