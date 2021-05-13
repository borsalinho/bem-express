block('profile-OC').elem('menu')({
    content: () => [
        {   
            elem:'title',
            tag:'h1',
            content:'Личный кабинет'
        },
        {
            elem:'list',
            tag:'ul',
            content:[
                {
                    elem:'list-item',
                    content:[
                        {
                            
                            elem:'icon-folder',
                            mix:{elem:'menu-icon'}
                            
                        },
                        {   
                            elem:'menu-item',
                            content:'Мои обращения'
                        }
                    ]
                },
                {
                    elem:'list-item',
                    content:[
                        {
                            
                            elem:'icon-paperclip',
                            mix:{elem:'menu-icon'}
                            
                        },
                        {   
                            elem:'menu-item',
                            content:'Мои подписки'
                        }
                    ]
                },
                {
                    elem:'list-item',
                    content:[
                        {
                            
                            elem:'icon-settings',
                            mix:{elem:'menu-icon'}
                            
                        },
                        {   
                            elem:'menu-item',
                            content:'Настройки'
                        }
                    ]
                },
                {
                    elem:'list-item',
                    content:[
                        {
                            
                            elem:'icon-star',
                            mix:{elem:'menu-icon'}
                            
                        },
                        {   
                            elem:'menu-item',
                            content:'Мои баллы'
                        }
                    ]
                }
                
            ]
        },
        {
            elem:'info-list',
            tag:'ul',
            content:[
                {
                    elem:'info-item',
                    content:[
                        {
                            elem:'info-icon',
                            attrs:{
                                src:'/img/profile-OC/pin.png'
                            }
                        },
                        'Локация',
                        {
                            elem:'info',
                            content:'Якутск, ул.Ленина 1, к 713'
                        }
                    ]
                },
                {
                    elem:'info-item',
                    content:[
                        {
                            elem:'info-icon',
                            attrs:{
                                src:'/img/profile-OC/call-phone.png'
                            }
                        },
                        'Локация',
                        {
                            elem:'info',
                            content:'8-800-555-35-35'
                        }
                    ]
                },
                {
                    elem:'info-item',
                    content:[
                        {
                            elem:'info-icon',
                            attrs:{
                                src:'/img/profile-OC/mail.png'
                            }
                        },
                        'Локация',
                        {
                            elem:'info',
                            content:'zubenko@mail.ru'
                        }
                    ]
                }
            ]
        }
    ],
});
