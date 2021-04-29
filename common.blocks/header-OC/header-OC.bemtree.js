block('header-OC')({
    content: () => [
        
            {
                cls:'container d-flex align-items-center position-relative',
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
                        tag:'nav',
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
                                            href:'/about'
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
                                    elem:'init-slider',
                                    tag:'li',
                                    mix:[
                                        {elem:'menu-list-item'}
                                    ],
                                    js:true,
                                    content:[{
                                            tag:'a',
                                            content:'Сервисы'
                                        },
                                        {
                                            tag:'span',
                                            content:{
                                                elem:'arrow',
                                                tag:'img',
                                                attrs:{
                                                    src:'img/header-OC/services-arrow.svg'
                                                }
                                            }    
                                        }
                                    ]   
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
                                js:true,
                                content:[
                                    {
                                        elem:'search-img',
                                        tag:'img',
                                        attrs:{
                                            src:'/img/header-OC/header-OC-search.png'
                                        }
                                    },
                                    {
                                        elem:'search-input',
                                        tag:'input',
                                        js:true,
                                        attrs:{
                                            type:'text',
                                            placeholder:'Поиск',
                                        }
                                            
                                        
                                    },
                                ]
                            },
                            {
                                elem:'margin'
                            },
                            {   
                                elem:'profile',
                                content:{
                                    block:'dropdown-click-OC',
                                    js:true,
                                    content:{
                                        block:'header-OC',
                                        elem:'drop-list',
                                        mix:[{
                                            block:'dropdown-click-OC',
                                            elem:'item',
                                        },
                                        {
                                            block:'card-OC'
                                        }
                                        ],
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
                                                                    src:'/img/header-OC/header-OC-profile-user.png'
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
                                                                    src:'/img/header-OC/header-OC-profile-mail.png'
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
                                                                    src:'/img/header-OC/header-OC-profile-bookmark.png'
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
                                                                    src:'/img/header-OC/header-OC-profile-log-out.png'
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
                        
                    },
                    {   
                        elem:'services',
                        content:{
                            block:'services-slider-header-OC',
                            js:true,
                            goods:[
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы 1',
                                    url:'/about'
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы 2',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы 3',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы 4',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы 5',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы 6',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы 7',
                                },
                                
                            ]
                        }
                    }
                
                ]
            },
        
    ]
});
