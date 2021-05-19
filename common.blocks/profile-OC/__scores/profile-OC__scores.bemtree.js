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
                        elem:'scores-button',
                        mix: {block:'button-OC'},
                        content:'Получить баллы'
                    }
                }
            ]
        },
        {   
            elem:'scores-row',
            cls:'row',
            content:[
                {
                    background:'/img/actual-info-OC/zatu4ka2.jpg',
                    score:'20',
                    title:'Название акции в 2 строчки Название акции в 2 строчки',
                    text:'Описание акции в два или три предложения, не осбо важно, главное чтобы занимало 3 строчки Описание акции в два или три предложения, не осбо важно, главное чтобы занимало 3 строчки'
                },
                {
                    background:'/img/actual-info-OC/zatu4ka2.jpg',
                    score:'20',
                    title:'Название акции в 2 строчки Название акции в 2 строчки',
                    text:'Описание акции в два или три предложения, не осбо важно, главное чтобы занимало 3 строчки Описание акции в два или три предложения, не осбо важно, главное чтобы занимало 3 строчки'
                },
                {
                    background:'/img/actual-info-OC/zatu4ka2.jpg',
                    score:'20',
                    title:'Название акции в 2 строчки Название акции в 2 строчки Название акции в 2 строчки',
                    text:'Описание акции в два или три предложения, не осбо важно, главное чтобы занимало 3 строчки Описание акции в два или три предложения, не осбо важно, главное чтобы занимало 3 строчки'
                }
            ]
        },
        
    ]
});