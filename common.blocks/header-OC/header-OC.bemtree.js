block('header-OC')({
    content: () => [
        
            {
                cls:'container d-flex align-items-center',
                content:[
                    {   
                        block:'header-OC',
                        elem:'logo',
                        content:
                        {
                            block:'logo-OC',
                        }
                    },
                    {   
                        block:'header-OC',
                        elem:'menu',
                        content:
                        {   
                            elem:'menu-list',
                            tag:'ul',
                            content:[
                                {   
                                    elem:'menu-list-item',
                                    tag:'li',
                                    content:{
                                        block:'link-OC',
                                        content:'О платформе',
                                        attrs:{
                                            href:'/desktop.bundles/page-about/page-about.html'
                                        }
                                    }
                                },
                                {   
                                    elem:'menu-list-item',
                                    tag:'li',
                                    content:{
                                        tag:'a',
                                        content:'Мониторинг проблем'
                                    }
                                },
                                {   
                                    elem:'menu-list-item',
                                    tag:'li',
                                    content:{
                                        tag:'a',
                                        content:'Новости'
                                    }
                                },
                                {   
                                    elem:'menu-list-item',
                                    tag:'li',
                                    content:{
                                        tag:'a',
                                        content:'Конкурсы'
                                    }
                                },
                                {   
                                    elem:'menu-list-item',
                                    tag:'li',
                                    mix:[
                                        {elem:'button-services',}
                                    ],
                                    content:{
                                        tag:'a',
                                        content:'Сервисы'
                                    }
                                },
                                {   
                                    elem:'menu-list-item',
                                    mix:[
                                        {elem:'pulsar-button'}
                                    ],
                                    tag:'li',
                                    content:{
                                        tag:'a',
                                        content:'Создать заявку'
                                    }
                                },
                            ]

                        }
                    },
                    {   
                        block:'header-OC',
                        elem:'buttons',
                        content:[
                            {
                                elem:'search',
                                tag:'span',
                                content:[
                                    {
                                        elem:'search-img',
                                        tag:'img',
                                        attrs:{
                                            // src:'/desktop.blocks/header-OC/header-OC-search.png'
                                        }
                                    },
                                    {
                                        elem:'search-input',
                                        tag:'input',
                                        attrs:{
                                            type:'text',
                                            placeholder:'Поиск',
                                        }
                                            
                                        
                                    },
                                ]
                            },
                            {   
                                elem:'profile',
                                content:{
                                    block:'dropdown-OC',
                                    js:true,
                                    content:{
                                        block:'header-OC',
                                        elem:'drop-list',
                                        content:[
                                            {   
                                                elem:'drop-list-item',
                                                
                                                content:[
                                                    {
                                                        block:'link-OC',
                                                        attrs:{
                                                            href:'#'
                                                        },
                                                        content:[
                                                            {
                                                                tag:'img',
                                                                attrs:{
                                                                    // src:'/desktop.blocks/header-OC/header-OC-profile-user.png'
                                                                }
                                                            },
                                                            {   
                                                                tag:'span',
                                                                content:'Мой профиль'
                                                            }
                                                        ]
                                                    }
                                                    
                                                ]
                                                
                                            },
                                            {   
                                                elem:'drop-list-item',
                                                
                                                content:[
                                                    {
                                                        block:'link-OC',
                                                        attrs:{
                                                            href:'#'
                                                        },
                                                        content:[
                                                            {
                                                                tag:'img',
                                                                attrs:{
                                                                    // src:'/desktop.blocks/header-OC/header-OC-profile-mail.png'
                                                                }
                                                            },
                                                            {   
                                                                tag:'span',
                                                                content:'Мои обращения'
                                                            }
                                                        ]
                                                    }
                                                    
                                                ]
                                                
                                            },{   
                                                elem:'drop-list-item',
                                                
                                                content:[
                                                    {
                                                        block:'link-OC',
                                                        attrs:{
                                                            href:'#'
                                                        },
                                                        content:[
                                                            {
                                                                tag:'img',
                                                                attrs:{
                                                                    // src:'/desktop.blocks/header-OC/header-OC-profile-bookmark.png'
                                                                }
                                                            },
                                                            {   
                                                                tag:'span',
                                                                content:'Мои подписки'
                                                            }
                                                        ]
                                                    }
                                                    
                                                ]
                                                
                                            },{   
                                                elem:'drop-list-item',
                                                
                                                content:[
                                                    {
                                                        block:'link-OC',
                                                        attrs:{
                                                            href:'#'
                                                        },
                                                        content:[
                                                            {
                                                                tag:'img',
                                                                attrs:{
                                                                    // src:'/desktop.blocks/header-OC/header-OC-profile-log-out.png'
                                                                }
                                                            },
                                                            {   
                                                                tag:'span',
                                                                content:'Выйти'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                        ]
                                        
                                        
                                    }
                                }
                                    
                                
                                
                            }
                        ]
                        
                    }
                ]
            }
        
    ]
});
