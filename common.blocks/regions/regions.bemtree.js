block('regions')({
    
    content: () => [
        {
            elem:'a',
            tag:'section',
            content:{
                elem:'container',
                cls:'container',
                content:[
                    {
                        elem:'a-title',
                        tag:'h1',
                        content:'Сделайте жизнь в родном городе или селе лучше!'
                    },
                    {
                        elem:'a-text',
                        tag:'p',
                        content:'Предложите идею или реализуйте проект с помощью сервисов ONECLICK YAKUTIA'
                    }
                ]
            }
        },
        {
            elem:'b',
            tag:'section',
            content:{
                cls:'container',
                content:[
                    {
                        elem:'b-body',
                        content:[
                            // ППМИ
                            {
                                elem:'card',
                                content:[
                                    {
                                        elem:'card-body',
                                        cls:'row',
                                        content:[
                                            {
                                                cls:'col-lg-7',
                                                content:[
                                                    {
                                                        elem:'card-title',
                                                        tag:'h2',
                                                        content:'Программа поддержки местных инициатив'
                                                    },
                                                    {
                                                        elem:'card-text',
                                                        tag:'p',
                                                        content:'Электронная система для софинансирования проектов развития общественной инфраструктуры, которая состоит из приема и экспертизы конкурсных заявок, электронного документооборота, финансового и аналитического мониторинга.'
                                                    },
                                                    {   
                                                        elem:'body-row',
                                                        cls:'row',
                                                        content:[
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'183'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Инициатив предложено'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'0'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Инициатив проходят отбор'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'31'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Инициатив на голосовании'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'0'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Инициатив реализовано'
                                                                    }
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                cls:'col-lg-5 mb-4 mb-lg-0',
                                                content:[
                                                    {
                                                        elem:'card-news',
                                                        content:[
                                                            {
                                                                elem:'news-title',
                                                                content:'Новости сервиса'
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть инициативу'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть инициативу'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть инициативу'
                                                                    }
                                                                ]
                                                            },{
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть инициативу'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem:'card-bottom',
                                        content:[
                                            {   
                                                tag:'a',
                                                attrs:{
                                                    href:'#'
                                                },
                                                content:{
                                                    elem:'card-button-1',
                                                    tag:'button',
                                                    mix:{block:'button-OC'},
                                                    content:'Предложить инициативу'
                                                }
                                                
                                            },
                                            {   
                                                tag:'a',
                                                attrs:{
                                                    href:'regions/consepts'
                                                },
                                                content:{
                                                    elem:'card-button-2',
                                                    tag:'button',
                                                    mix:{block:'button-OC'},
                                                    content:'Посмотреть инициативу'
                                                }
                                                
                                            }
                                        ]
                                    }
                                ]
                                
                            },

                            // Благоустройство сельских территорий
                            {
                                elem:'card',
                                content:[
                                    {
                                        elem:'card-body',
                                        cls:'row',
                                        content:[
                                            {
                                                cls:'col-lg-7',
                                                content:[
                                                    {
                                                        elem:'card-title',
                                                        tag:'h2',
                                                        content:'Благоустройство сельских территорий'
                                                    },
                                                    {
                                                        elem:'card-text',
                                                        tag:'p',
                                                        content:'Электронная система для софинансирования общественно значимых проектов в рамках мероприятия "Благоустройство сельских территорий" государственной программы Республики Саха (Якутия) "Комплексное развитие сельских территорий на 2020-2025 годы".'
                                                    },
                                                    {   
                                                        elem:'body-row',
                                                        cls:'row',
                                                        content:[
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'13'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Идей предложено'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'0'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'На отборе'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'3'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'На голосовании'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'0'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Реализовано'
                                                                    }
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                cls:'col-lg-5 mb-4 mb-lg-0',
                                                content:[
                                                    {
                                                        elem:'card-news',
                                                        content:[
                                                            {
                                                                elem:'news-title',
                                                                content:'Новости сервиса'
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            },{
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem:'card-bottom',
                                        content:[
                                            {   
                                                tag:'a',
                                                attrs:{
                                                    href:'#'
                                                },
                                                content:{
                                                    elem:'card-button-1',
                                                    tag:'button',
                                                    mix:{block:'button-OC'},
                                                    content:'Предложить идею'
                                                }
                                                
                                            },
                                            {   
                                                tag:'a',
                                                attrs:{
                                                    href:'#'
                                                },
                                                content:{
                                                    elem:'card-button-2',
                                                    tag:'button',
                                                    mix:{block:'button-OC'},
                                                    content:'Посмотреть идеи'
                                                }
                                                
                                            }
                                        ]
                                    }
                                ]
                                
                            },

                            // Стратегическая инициатива «Новая модель села. Развитие сельских территорий»
                            {
                                elem:'card',
                                content:[
                                    {
                                        elem:'card-body',
                                        cls:'row',
                                        content:[
                                            {
                                                cls:'col-lg-7',
                                                content:[
                                                    {
                                                        elem:'card-title',
                                                        tag:'h2',
                                                        content:'Стратегическая инициатива «Новая модель села. Развитие сельских территорий»'
                                                    },
                                                    {
                                                        elem:'card-text',
                                                        tag:'p',
                                                        content:'Сервис для улучшения жизни и развития инфраструктуры в населенных пунктах республики САХА (Якутия). Теперь у каждого жителя есть возможность стать частью инициативной команды, поделиться идеей, предложениями, объединиться с другими жителями сел и реализовать любой проект.'
                                                    },
                                                    {   
                                                        elem:'body-row',
                                                        cls:'row',
                                                        content:[
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'8'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Идей предложено'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'8'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'На отборе'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'0'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'На голосовании'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'card-col',
                                                                cls:'col-sm-3 col-6',
                                                                content:[
                                                                    {
                                                                        elem:'score',
                                                                        content:'0'
                                                                    },
                                                                    {
                                                                        elem:'score-text',
                                                                        content:'Реализовано'
                                                                    }
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                cls:'col-lg-5 mb-4 mb-lg-0',
                                                content:[
                                                    {
                                                        elem:'card-news',
                                                        content:[
                                                            {
                                                                elem:'news-title',
                                                                content:'Новости сервиса'
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            },{
                                                                elem:'news-card',
                                                                content:[
                                                                    {
                                                                        tag:'p',
                                                                        content:'Увеличение мощности уличного освещения в с. Аргас Увеличение мощности уличного освещения в с. Аргас'
                                                                    },
                                                                    {
                                                                        tag:'a',
                                                                        attrs:{
                                                                            href:'#'
                                                                        },
                                                                        content:'Посмотреть идею'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem:'card-bottom',
                                        content:[
                                            {   
                                                tag:'a',
                                                attrs:{
                                                    href:'#'
                                                },
                                                content:{
                                                    elem:'card-button-1',
                                                    tag:'button',
                                                    mix:{block:'button-OC'},
                                                    content:'Предложить идею'
                                                }
                                                
                                            },
                                            {   
                                                tag:'a',
                                                attrs:{
                                                    href:'#'
                                                },
                                                content:{
                                                    elem:'card-button-2',
                                                    tag:'button',
                                                    mix:{block:'button-OC'},
                                                    content:'Посмотреть идеи'
                                                }
                                                
                                            }
                                        ]
                                    }
                                ]
                                
                            }
                        ]
                        
                    }
                ]
            }
        }
    ]
});