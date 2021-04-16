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
                                    elem:'menu-list-item',
                                    tag:'li',
                                    cls:'init-slider',
                                    content:{
                                        block:'dropdown-hover-OC',
                                        js:true,
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
                                            src:'/img/header-OC/header-OC-search.png'
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
                                    block:'dropdown-click-OC',
                                    js:true,
                                    content:{
                                        block:'header-OC',
                                        elem:'drop-list',
                                        mix:{
                                            block:'dropdown-click-OC',
                                            elem:'item',
                                        },
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
                        mix:{
                            block:'dropdown-hover-OC',
                            elem:'item'
                        },
                        content:{
                            block:'services-slider-header-OC',
                            goods:[
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы',
                                    url:'/about'
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы',
                                },
                                {   
                                    image: '/img/header-services-OC/services-abiture.png',
                                    text: 'Родные города и селы',
                                },
                                
                            ]
                        }
                    }
                
                ]
            },
        
    ]
});
