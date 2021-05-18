block('profile-OC').elem('scores')({
    content: () => [
        
        {
            elem:'scores-top',
            mix:{block:'card-OC'},
            content:[
                {
                    elem:'scores-avatar',
                    content:[
                        {   
                            elem:'scores-img',
                            content:{
                                tag:'img',
                                attrs:{
                                    src:'/img/profile-OC/avatar-plug.png'
                                }
                            }
                            
                        },
                    ]
                },
                {
                    elem:'scores-data',
                    content:[
                        {
                            elem:'scores-name',
                            tag:'h6',
                            content:'Михаил Зубенко Петрович'
                        },
                        {
                            elem:'scores-info',
                            tag:'span',
                            content:[
                                
                                {
                                    elem:'score',
                                    tag:'span',
                                    content:'Баллов платформы'
                                }
                                ,
                                '12334'
                                ,
                                
                            ]
                        }
                    ]
                },
                {
                    elem:'scores-take',
                    content:{
                        tag:'button',
                        content:'Получить баллы'
                    }
                }
            ]
        },
        
    ]
});