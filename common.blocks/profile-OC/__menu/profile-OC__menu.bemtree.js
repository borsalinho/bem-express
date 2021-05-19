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
                    mix:{elem:'additional-ul'},
                    content:[
                        {   
                            elem:'additional-li',
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
                        {   elem:'list-2',
                            tag:'ul',
                            content:[
                                {   
                                    elem:'list-item-2',
                                    mix:{elem:'item-in-work'},
                                    tag:'li',
                                    content:'В работе'
                                },
                                {   
                                    elem:'list-item-2',
                                    mix:{elem:'item-archive'},
                                    tag:'li',
                                    content:'Архив'
                                }
                            ]
                        },
                    ]
                },
                
                {
                    elem:'list-item',
                    mix:{elem:'item-subscribe'},
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
                    mix:{elem:'item-settings'},
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
                    mix:{elem:'item-scores'},
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
                            elem:'info-item-top',
                            content:[
                                {
                                    elem:'info-icon',
                                    attrs:{
                                        src:'/img/profile-OC/pin.png'
                                    }
                                },
                                {   
                                    tag:'span',
                                    content:'Локация'
                                }
                            ]
                        }
                        ,
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
                            elem:'info-item-top',
                            content:[
                                {
                                    elem:'info-icon',
                                    attrs:{
                                        src:'/img/profile-OC/call-phone.png'
                                    }
                                },
                                {
                                    tag:'span',
                                    content:'Телефон'
                                },
                            ]
                        },
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
                            elem:'info-item-top',
                            content:[
                                {
                                    elem:'info-icon',
                                    attrs:{
                                        src:'/img/profile-OC/mail.png'
                                    }
                                },
                                {
                                    tag:'span',
                                    content:'E-mail'
                                },
                            ]
                        },
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
