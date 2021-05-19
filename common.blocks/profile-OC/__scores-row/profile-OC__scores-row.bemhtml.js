block('profile-OC').elem('scores-row')(

    content()(function() {
        return this.ctx.content.map(function(item){
            return [
                {   
                    elem:'mt-40',
                    cls:'col-xl-4 col-lg-6',
                    content:{
                        elem:'scores-col',
                        content:[
                            {
                                elem:'col-top',
                                attrs:{
                                    style:'background:url("'+item.background+'")'
                                     + ' center center no-repeat; background-size: cover;'
                                },
                                content:{
                                    elem:'col-score',
                                    content:item.score + ' баллов'
                                }
                            },
                            {
                                elem:'col-body',
                                content:[
                                    {
                                        elem:'col-title',
                                        tag:'h6',
                                        content:item.title
                                    },
                                    {
                                        elem:'col-text',
                                        tag:'p',
                                        content:item.text
                                    }
                                ]
                            }
                        ]
                    }
                    
                }
            ];
 
        });

    }),
  
    
);