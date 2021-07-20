block('regions-concepts')({
    
    content: () => [
        {
            elem:'a',
            tag:'section',
            content:{
                cls:'container',
                content:[
                    {
                        elem:'a-body',
                        cls:'row',
                        content:[
                            {
                                elem:'a-col-left',
                                cls:'col-md-4',
                                content:[
                                    {
                                        elem:'a-title',
                                        tag:'h1',
                                        content:'Программа поддержки местных инициатив'
                                    },
                                    {
                                        elem:'a-text',
                                        tag:'p',
                                        content:'Электронная система для софинансирования проектов развития общественной инфраструктуры, которая состоит из приема и экспертизы конкурсных заявок, электронного документооборота, финансового и аналитического мониторинга.'
                                    },
                                    
                                ]
                            },
                            {
                                elem:'a-col-right',
                                cls:'col-md-8',
                                content:{
                                    elem:'right-row',
                                    cls:'row',
                                    content:[
                                        {
                                            cls:'col-xl-3 col-6',
                                            content:[
                                                {
                                                    elem:'statistic-number',
                                                    content:'183'
                                                },
                                                {
                                                    elem:'statistic-name',
                                                    content:[{tag:'span',content:'идей предложено '},'инициативной группой']
                                                }
                                            ]
                                        },
                                        {
                                            cls:'col-xl-3 col-6',
                                            content:[
                                                {
                                                    elem:'statistic-number',
                                                    content:'31'
                                                },
                                                {
                                                    elem:'statistic-name',
                                                    content:[{tag:'span',content:'на голосовании '},'проголосуйте и вы']
                                                }
                                            ]
                                        },
                                        {
                                            cls:'col-xl-3 col-6',
                                            content:[
                                                {
                                                    elem:'statistic-number',
                                                    content:'0'
                                                },
                                                {
                                                    elem:'statistic-name',
                                                    content:[{tag:'span',content:'ждут очереди '},'на реализацию']
                                                }
                                            ]
                                        },
                                        {
                                            cls:'col-xl-3 col-6',
                                            content:[
                                                {
                                                    elem:'statistic-number',
                                                    content:'0'
                                                },
                                                {
                                                    elem:'statistic-name',
                                                    content:[{tag:'span',content:'идей реализовано '},'посмотрите проекты']
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        elem:'a-bottom',
                        content:[
                            {
                                elem:'concepts-anchor',
                                tag:'a',
                                js:true,
                                attrs:{
                                    href:'#regions__concepts-form'
                                },
                                content:{   
                                    elem:'a-button',
                                    mix:{block:'button-OC'},
                                    tag:'button',
                                    content:'Посмотреть идею'
                                }
                            },
                            {
                                elem:'a-url',
                                content:[
                                    'Заполните заявку на ',
                                    {
                                        tag:'a',
                                        attrs:{
                                            href:'https://ppmi.yakutia.click/'
                                        },
                                        content:'https://ppmi.yakutia.click/'
                                    }
                                ]
                            }
                        ]
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
                        elem:'selects',
                        cls:'row',
                        content:[
                            {
                                cls:'col-md',
                                content:{
                                    elem:'region-select',
                                    tag:'select',
                                    js:true,
                                    attrs:{
                                        id:'concepts__region'
                                    },
                                    content:[
                                        {
                                            tag:'option',
                                            attrs:{
                                                value:''
                                            },
                                            content:'Выберите улус'
                                        },
                                        {
                                            tag:'option',
                                            content:'улус 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'улус 2'
                                        },
                                    ]
                                }
                            },
                            {
                                cls:'col-md',
                                content:{
                                    elem:'location-select',
                                    tag:'select',
                                    js:true,
                                    attrs:{
                                        id:'concepts__location'
                                    },
                                    content:[
                                        {
                                            tag:'option',
                                            attrs:{
                                                value:''
                                            },
                                            content:'Населенный пункт'
                                        },
                                        {
                                            tag:'option',
                                            content:'пункт 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'пункт 2'
                                        },
                                    ]
                                }
                            },
                            {
                                cls:'col-md',
                                content:{
                                    elem:'category-select',
                                    tag:'select',
                                    js:true,
                                    attrs:{
                                        id:'concepts__category'
                                    },
                                    content:[
                                        {
                                            tag:'option',
                                            attrs:{
                                                value:''
                                            },
                                            content:'Категория'
                                        },
                                        {
                                            tag:'option',
                                            content:'категория 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'категория 2'
                                        },
                                    ]
                                }
                            },
                            {
                                cls:'col d-md-none',
                                content:{
                                    elem:'status-select',
                                    tag:'select',
                                    js:true,
                                    attrs:{
                                        id:'concepts__status'
                                    },
                                    content:[
                                        {
                                            tag:'option',
                                            attrs:{
                                                value:''
                                            },
                                            content:'Статус'
                                        },
                                        {
                                            tag:'option',
                                            content:'Отбор'
                                        },
                                        {
                                            tag:'option',
                                            content:'На голосовании'
                                        },
                                        {
                                            tag:'option',
                                            content:'Не отобрано'
                                        },
                                        {
                                            tag:'option',
                                            content:'Отобрано'
                                        },
                                        {
                                            tag:'option',
                                            content:'Одобрено'
                                        },
                                        {
                                            tag:'option',
                                            content:'В реализации'
                                        },
                                        {
                                            tag:'option',
                                            content:'Реализовано'
                                        },
                                        {
                                            tag:'option',
                                            content:'Не реализовано'
                                        },
                                    ]
                                }
                            },
                            {   
                                elem:'default-button',
                                cls:'col-md-auto d-flex justify-content-center justify-content-md-end align-items-center',
                                content:'Сбросить все настройки'
                            }
                        ]
                    },
                    {
                        elem:'statuses',
                        cls:'d-md-block d-none',
                        content:[
                            {   
                                elem:'statuses-title',
                                content:'Выберите статус идеи'
                            },
                            {
                                elem:'carusel',
                                content:[
                                    {   
                                        elem:'status',
                                        elemMods:{ on: 'selection'},
                                        attrs:{
                                            title:'Статус ”на отборе” означает, что идея проходит предварительное голосование.'
                                        },
                                        content:'Отбор'
                                    },
                                    {   
                                        elem:'status',
                                        elemMods:{ on: 'the-vote'},
                                        attrs:{
                                            title:'Статус ”на голосовании” означает, что идея проходит итоговое голосование.'
                                        },
                                        content:'На голосовании'
                                    },
                                    {   
                                        elem:'status',
                                        elemMods:{ not: 'selected'},
                                        attrs:{
                                            title:'Статус ”не отобрано” означает, что идея не прошла предварительное голосование.'
                                        },
                                        content:'Не отобрано'
                                    },
                                    {   
                                        elem:'status',
                                        elemMods:{ selected: 'true'},
                                        attrs:{
                                            title:'Статус ”отобрано” означает, что идея прошла предварительное голосование.'
                                        },
                                        content:'Отобрано'
                                    },
                                    {   
                                        elem:'status',
                                        elemMods:{ approved: 'true'},
                                        attrs:{
                                            title:'Статус ”одобрено” означает, что идея прошла экспертизу .'
                                        },
                                        content:'Одобрено'
                                    },
                                    {   
                                        elem:'status',
                                        elemMods:{ in: 'implementation'},
                                        attrs:{
                                            title:'Статус ”в реализации” означает, что идея прошла все этапы и сейчас ее воплощают в жизнь.'
                                        },
                                        content:'В реализации'
                                    },
                                    {   
                                        elem:'status',
                                        elemMods:{ implemented: 'true'},
                                        attrs:{
                                            title:'Статус ”реализовано” означает, что идея успешно воплощена в жизнь. :)'
                                        },
                                        content:'Реализовано'
                                    },
                                    {   
                                        elem:'status',
                                        elemMods:{ not: 'implemented'},
                                        attrs:{
                                            title:'Статус ”не реализовано” означает, что что-то пошло не так и идея не воплощена в жизнь. :('
                                        },
                                        content:'Не реализовано'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        elem:'filter-row',
                        cls:'row',
                        content:[
                            {
                                cls:'col-md',
                                content:{
                                    elem:'filter-body',
                                    content:[
                                        {
                                            elem:'filter-item',
                                            content:[
                                                {
                                                    tag:'input',
                                                    attrs:{
                                                        type:'radio',
                                                        id:'filter-all',
                                                        name:'filter-group',
                                                        checked:'checked'
                                                    }
                                                },
                                                {   
                                                    elem:'filter-text',
                                                    tag:'label',
                                                    attrs:{
                                                        for:'filter-all',
                                                    },
                                                    content:'Все'
                                                }
                                            ]
                                        },
                                        {
                                            elem:'filter-item',
                                            content:[
                                                {
                                                    tag:'input',
                                                    attrs:{
                                                        type:'radio',
                                                        id:'filter-popular',
                                                        name:'filter-group',
                                                    }
                                                },
                                                {   
                                                    elem:'filter-text',
                                                    tag:'label',
                                                    attrs:{
                                                        for:'filter-popular',
                                                    },
                                                    content:'Популярные'
                                                }
                                            ]
                                        },
                                        {
                                            elem:'filter-item',
                                            content:[
                                                {
                                                    tag:'input',
                                                    attrs:{
                                                        type:'radio',
                                                        id:'filter-day',
                                                        name:'filter-group',
                                                    }
                                                },
                                                {   
                                                    elem:'filter-text',
                                                    tag:'label',
                                                    attrs:{
                                                        for:'filter-day',
                                                    },
                                                    content:'За день'
                                                }
                                            ]
                                        },
                                        {
                                            elem:'filter-item',
                                            content:[
                                                {
                                                    tag:'input',
                                                    attrs:{
                                                        type:'radio',
                                                        id:'filter-week',
                                                        name:'filter-group',
                                                    }
                                                },
                                                {   
                                                    elem:'filter-text',
                                                    tag:'label',
                                                    attrs:{
                                                        for:'filter-week',
                                                    },
                                                    content:'За неделю'
                                                }
                                            ]
                                        },
                                        {
                                            elem:'filter-item',
                                            content:[
                                                {
                                                    tag:'input',
                                                    attrs:{
                                                        type:'radio',
                                                        id:'filter-month',
                                                        name:'filter-group',
                                                    }
                                                },
                                                {   
                                                    elem:'filter-text',
                                                    tag:'label',
                                                    attrs:{
                                                        for:'filter-month',
                                                    },
                                                    content:'За месяц'
                                                }
                                            ]
                                        },
                                        {
                                            elem:'filter-item',
                                            content:[
                                                {
                                                    tag:'input',
                                                    attrs:{
                                                        type:'radio',
                                                        id:'filter-year',
                                                        name:'filter-group',
                                                    }
                                                },
                                                {   
                                                    elem:'filter-text',
                                                    tag:'label',
                                                    attrs:{
                                                        for:'filter-year',
                                                    },
                                                    content:'За год'
                                                }
                                            ]
                                        },
                                    ]
                                }
                            },
                            {
                                cls:'col-md-auto d-flex d-md-block justify-content-end justufy-content-md-start',
                                content:{
                                    elem:'number',
                                    content:[
                                        {
                                            elem:'number-text',
                                            tag:'span',
                                            content:'Показать по '
                                        },
                                        {
                                            elem:'number-select',
                                            js:true,
                                            attrs:{
                                                id:'concepts__number-select'
                                            },
                                            tag:'select',
                                            content:[
                                                {
                                                    tag:'option',
                                                    attrs:{
                                                        selected:'selected'
                                                    },
                                                    content:'8 карточек'
                                                },
                                                {
                                                    tag:'option',
                                                    content:'16 карточек'
                                                },
                                                {
                                                    tag:'option',
                                                    content:'32 карточек'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {   
                        block:'regions-card',
                        mix:{
                            block:'regions-concepts',
                            elem:'cards'
                        },
                        cls:'row',
                        content:[
                            {   
                                selection:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка Это будущее детка Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                            {   
                                vote:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                            {   
                                notSelected:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                            {   
                                selected:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                            {   
                                approved:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                            {   
                                inImplementation:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                            {   
                                implemented:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                            {   
                                notImplemented:true,
                                data:'12.02.2225',
                                location:'марс',
                                title:'Это будущее детка',
                                text:'да, вован все еще правит, да, вован все еще правит да, вован все еще правит да, вован все еще правит да, вован все еще правит'
                            },
                        ]
                    },
                    {
                        block:'pagination-OC',
                        content:[
                            {   
                                elem:'prev',
                                tag:'a',
                                content:'«'
                            },
                            {   
                                elem:'prev',
                                tag:'a',
                                content:'‹'
                            },
                            {   elem:'active',
                                tag:'a',
                                content:'1'
                            },
                            {   
                                tag:'a',
                                content:'2'
                            },
                            {   
                                tag:'a',
                                content:'3'
                            },
                            {   
                                tag:'a',
                                content:'4'
                            },
                            {   
                                tag:'a',
                                content:'5'
                            },
                            {   
                                tag:'a',
                                content:'6'
                            },
                            {   
                                tag:'a',
                                content:'...'
                            },
                            {   
                                elem:'prev',
                                tag:'a',
                                content:'›'
                            },
                            {   
                                elem:'prev',
                                tag:'a',
                                content:'»'
                            },
                        ]
                    }
                ]
            }
        },
        {
            elem:'c',
            tag:'section',
            content:{
                cls:'container',
                content:[
                    {
                        block:'regions-form',
                        mix:{ block:'card-OC' },
                        attrs:{
                            id:'regions__concepts-form'
                        },
                        content:[
                            {
                                elem:'title',
                                tag:'h2',
                                content:'Предложите вашу идею'
                            },
                            {
                                tag:'form',
                                attrs:{},
                                content:{
                                    elem:'body',
                                    cls:'row',
                                    content:[
                                        {
                                            elem:'col-left',
                                            cls:'col-md-6',
                                            content:{
                                                cls:'row',
                                                content:[
                                                    {   
                                                        elem:'col',
                                                        cls:'col-12',
                                                        content:[
                                                            {   
                                                                elem:'titles',
                                                                tag:'p',
                                                                content:[
                                                                    'Название идеи',
                                                                    {
                                                                        elem:'quot',
                                                                        tag:'span',content:'*'
                                                                    },
                                                                ]
                                                            },
                                                            {   
                                                                block:'input-OC',
                                                                attrs:{
                                                                    id:'asdasd'
                                                                },
                                                                content:[{
                                                                    placeholder:'Название'
                                                                }]
                                                                
                                                            }
                                                        ]
                                                    },
                                                    {   
                                                        elem:'col',
                                                        cls:'col-12',
                                                        content:[
                                                            {   
                                                                elem:'titles',
                                                                tag:'p',
                                                                content:[
                                                                    'Выберите регион и населенный пункт',
                                                                    {
                                                                        elem:'quot',
                                                                        tag:'span',content:'*'
                                                                    }
                                                                ]
                                                            },
                                                            {   
                                                                elem:'row',
                                                                cls:'row',
                                                                content:[
                                                                    {   
                                                                        // elem:'col',
                                                                        cls:'col-sm-6',
                                                                        content:{
                                                                            elem:'idea-concept-region',
                                                                            attrs:{
                                                                                id:'idea-concept-region'
                                                                            },
                                                                            js:true,
                                                                            tag:'select',
                                                                            content:[
                                                                                {
                                                                                    tag:'option',
                                                                                    attrs:{
                                                                                        value:''
                                                                                    },
                                                                                    content:'Выберите улус'
                                                                                },
                                                                                {
                                                                                    tag:'option',
                                                                                    content:'улус 1'
                                                                                },
                                                                                {
                                                                                    tag:'option',
                                                                                    content:'улус 2'
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {   
                                                                        // elem:'col',
                                                                        cls:'col-sm-6',
                                                                        content:{
                                                                            elem:'idea-concept-location',
                                                                            attrs:{
                                                                                id:'idea-concept-location'
                                                                            },
                                                                            js:true,
                                                                            tag:'select',
                                                                            content:[
                                                                                {
                                                                                    tag:'option',
                                                                                    attrs:{
                                                                                        value:''
                                                                                    },
                                                                                    content:'Выберите населенный пункт'
                                                                                },
                                                                                {
                                                                                    tag:'option',
                                                                                    content:'население 1'
                                                                                },
                                                                                {
                                                                                    tag:'option',
                                                                                    content:'население 2'
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            
                                                        ]
                                                    },
                                                    {
                                                        elem:'col',
                                                        cls:'col-12',
                                                        content:[
                                                            {   
                                                                elem:'titles',
                                                                tag:'p',
                                                                content:[
                                                                    'Выберите категорию',
                                                                    {
                                                                        elem:'quot',
                                                                        tag:'span',content:'*'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'idea-concept-category',
                                                                attrs:{
                                                                    id:'idea-concept-category'
                                                                },
                                                                js:true,
                                                                tag:'select',
                                                                content:[
                                                                    {
                                                                        tag:'option',
                                                                        attrs:{
                                                                            value:''
                                                                        },
                                                                        content:'Выберите категорию'
                                                                    },
                                                                    {
                                                                        tag:'option',
                                                                        content:'категория 1'
                                                                    },
                                                                    {
                                                                        tag:'option',
                                                                        content:'категория 2'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem:'col',
                                                        cls:'col-12 d-flex justify-content-end justify-content-md-start',
                                                        content:{
                                                                elem:'map-point',
                                                                tag:'a',
                                                                content:'Отменить на карте'
                                                            
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem:'col-right',
                                            cls:'col-md-6',
                                            content:{
                                                cls:'row',
                                                content:[
                                                    {   
                                                        elem:'col',
                                                        cls:'col-12',
                                                        content:[
                                                            {   
                                                                elem:'titles',
                                                                tag:'p',
                                                                content:[
                                                                    'Описание идеи',
                                                                    {
                                                                        elem:'quot',
                                                                        tag:'span',content:'*'
                                                                    },
                                                                ]
                                                            },
                                                            {   
                                                                elem:'textarea-idea',
                                                                attrs:{
                                                                    placeholder:'Введите текст: Ограничение 4000 символов'
                                                                },
                                                                tag:'textarea',
                                                            }
                                                        ]
                                                    },
                                                    {   
                                                        elem:'col',
                                                        cls:'col-12',
                                                        content:[
                                                            {   
                                                                elem:'titles',
                                                                tag:'p',
                                                                content:[
                                                                    'Эффект от реализации',
                                                                    {
                                                                        elem:'quot',
                                                                        tag:'span',content:'*'
                                                                    },
                                                                ]
                                                            },
                                                            {   
                                                                elem:'textarea-effect',
                                                                attrs:{
                                                                    placeholder:'Введите текст: Ограничение 4000 символов'
                                                                },
                                                                tag:'textarea',
                                                            }
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                        {
                                            elem:'col-bottom',
                                            cls:'col-12',
                                            content:[
                                                {   
                                                    elem:'titles',
                                                    tag:'p',
                                                    content:'Файлы',
                                                },
                                                {
                                                    block:'upload-zone',
                                                    mix:{
                                                        block:'regions-forms',
                                                        elem:'download'
                                                    },
                                                    attrs:{
                                                        // необходимые атрибуты
                                                    }
                                                },
                                            ]
                                        },
                                        {
                                            elem:'col-bottom',
                                            cls:'col-12 d-flex justify-content-end justify-content-md-start',
                                            content:{
                                                elem:'button',
                                                tag:'button',
                                                mix:{block:'button-OC'},
                                                content:'Отправить идею'
                                            }
                                            
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // временный контейнер
        {
            cls:'container',
            content:{
                // модалка для карточек, до сир пор не знаю как "правильно для бэка"
                block:'regions-modal',
                mix:'card-OC',
                content:[
                    {
                        elem:'top-show',
                        js:true,
                        content:[
                            'Подробности идеи',
                            {   
                                elem:'arrow',
                                tag:'img',
                                attrs:{
                                    src:'/img/regions-modal/arrow.svg'
                                }
                            }
                        ]
                    },
                    {
                        elem:'top',
                        content:[
                            {
                                cls:'row',
                                content:[
                                    {
                                        elem:'top-col',
                                        elemMods:{font:'bold'},
                                        cls:'col-5 col-xl-3 order-1 order-xl-1',
                                        content:'Идея №310'
                                    },
                                    {
                                        elem:'top-col',
                                        cls:'col-5 col-xl-9 order-7 order-xl-2',
                                        content:'Категория: освещение'
                                    },
                                    {
                                        elem:'top-col',
                                        cls:'col-7 col-xl-3 order-2 order-xl-3',
                                        content:'8 декабря 2020 г. 12:21'
                                    },
                                    {
                                        elem:'top-col',
                                        cls:'col-5 col-xl-9 d-flex justify-content-xl-start order-3 order-xl-4',
                                        content:[
                                            'Статус: На голосовании ',
                                            {
                                                cls:'d-none d-xl-block ml-1',
                                                content:'до 9 декабря 2020 г. 12:40'
                                            } 
                                    ]
                                    },
                                    {
                                        elem:'top-col',
                                        cls:'col-7 d-xl-none order-4',
                                        content:'до 9 декабря 2020 г. 12:40'
                                    },
                                    {
                                        elem:'top-col',
                                        cls:'col-5 col-xl-3 mb-10 order-5 order-xl-5',
                                        content:'Район: Кобяйский район'
                                    },
                                    {
                                        elem:'top-col',
                                        cls:'col-7 col-xl-auto order-6 order-xl-6 ',
                                        content:'Населенный пункт: с. Аргас'
                                    },
                                    {
                                        elem:'top-col',
                                        cls:'col-7 col-xl mb-10 order-8 order-xl-7 d-flex justify-content-xl-end',
                                        content:{
                                            elem:'map-point',
                                            tag:'a',
                                            content:'Посмотреть на карте'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem:'body',
                        content:[
                            {
                                elem:'title',
                                tag:'h6',
                                content:'Увеличение мощности уличного освещения в с. Аргас'
                            },
                            {
                                elem:'description-title',
                                tag:'h6',
                                content:'Описание',
                            },
                            {
                                elem:'description-sm-title',
                                tag:'h6',
                                js:true,
                                content:[
                                    'Описание',
                                    {   
                                        elem:'arrow',
                                        tag:'img',
                                        attrs:{
                                            src:'/img/regions-modal/arrow.svg'
                                        }
                                    }
                                ]
                            },
                            {
                                elem:'description',
                                tag:'p',
                                content:'Увеличение мощности уличного освещения в с. Аргас'
                            },
                            {
                                elem:'effect-title',
                                tag:'h6',
                                content:'Эффект от реализации:'
                            },
                            {
                                elem:'effect-sm-title',
                                tag:'h6',
                                js:true,
                                content:[
                                    'Эффект от реализации',
                                    {   
                                        elem:'arrow',
                                        tag:'img',
                                        attrs:{
                                            src:'/img/regions-modal/arrow.svg'
                                        }
                                    }
                                ]
                            },
                            {
                                elem:'effect',
                                tag:'p',
                                content:'Обновление уличного освещения улиц села приведет к следующим положительным результатам: 1. Возможность свободного передвижения в темное время суток. Освещение 6 улиц. 2. Создание комфорта для 639 жителей села и его гостей. 3. Снижение к минимуму дорожно-транспортных происшествий внутри села - 0%. 4. Снижение уровня преступности и правонарушений в темное время суток - 0%.'
                            },
                            {   
                                elem:'row',
                                cls:'row',
                                content:[
                                    {   
                                        elem:'col-left',
                                        cls:'col order-lg-1 order-2',
                                        content:[
                                            {
                                                elem: "comment-img",
                                                tag: "img",
                                                attrs: {
                                                src: "/img/regions-card/chatting.svg",
                                                },
                                            },
                                            "12",
                                            {
                                                elem: "viewed-img",
                                                tag: "img",
                                                attrs: {
                                                src: "/img/regions-card/eye.svg",
                                                },
                                            },
                                            "14",
                                            {
                                              elem: "like-img",
                                              tag: "img",
                                              attrs: {
                                              src: "/img/regions-card/like-heard.svg",
                                              },
                                            },
                                            "18",
                                        ]
                                    },
                                    {   
                                        elem:'col-right',
                                        cls:'col-lg-auto order-lg-2 order-1',
                                        content:{
                                            block:'share-OC',
                                            content:[
                                                { 
                                                  background:'#546F01',
                                                  urlWhassap:'#',
                                                  urlVk:'#',
                                                  urlTelegram:'#',
                                                  urlTwitter:'#',
                                                  urlFacebook:'#',
                                                  urlShare:'#',
                                                }
                                              ]
                                        }
                                    }
                                ]
                            },
                            {
                                elem:'support-button',
                                mix:{block:'button-OC'},
                                tag:'button',
                                content:[
                                    {
                                        tag:'img',
                                        attrs:{
                                            src:'/img/regions-modal/heart-white.png'
                                        }
                                    },
                                    'Проголосовать'
                                ]
                            },
                            // если статус на голосовании
                            {
                                elem:'support-button',
                                elemMods:{vote:'true'},
                                mix:{block:'button-OC'},
                                tag:'button',
                                content:[
                                    {
                                        tag:'img',
                                        attrs:{
                                            src:'/img/regions-modal/thumbs-up.png'
                                        }
                                    },
                                    'Поддерживаю'
                                ]
                            },
                        ]
                    },
                    {
                        elem:'bottom',
                        content:[
                            {
                                elem: "comments",
                                content: [
                                  {
                                    block: "comments-OC",
                                    content: [
                                      {
                                        elem: "comments",
                                        commentsContent: [
                                          {
                                            avatarUrl: "/img/actual-info-OC/zatu4ka2.jpg",
                                            userName: "Зубенко Михаил Петрович",
                                            userText:
                                              "Вор в законе, Шумиловка городок.Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок",
                                          },
                                          {
                                            avatarUrl: "/img/comments-OC/avatar_plug.png",
                                            userName:
                                              "Зубенко Михаил Петрович Зубенко Михаил Петрович Зубенко Михаил Петрович",
                                            userText: "Вор в законе, Шумиловка городок",
                                          },
                                          {
                                            avatarUrl: "/img/comments-OC/avatar_plug.png",
                                            userName: "Зубенко Михаил Петрович",
                                            userText: "Вор в законе, Шумиловка городок",
                                          },
                                          {
                                            avatarUrl: "/img/comments-OC/avatar_plug.png",
                                            userName: "Зубенко Михаил Петрович",
                                            userText: "Вор в законе, Шумиловка городок",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    block: "comment-textarea-OC",
                                    mix: {
                                      block: "news-content",
                                      elem: "comment-textarea",
                                    },
                                  },
                                  {
                                    block: "button-OC",
                                    mix: {
                                      block: "region-modal",
                                      elem: "comment-button",
                                    },
                                    content: "Отправить",
                                  },
                                  {
                                    elem: "url",
                                    content: [
                                      "Ссылка ",
                                      {
                                        elem: "source-url",
                                        tag: "a",
                                        attrs: {
                                          href: "#",
                                        },
                                        content: "ссылка на новость",
                                      },
                                    ],
                                  },
                                ],
                              },
                        ]
                    },
                ]
            }
        }
    ]
});