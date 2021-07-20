block("problems-EC")({
    content: () => [
      
        {
            elem:'a',
            tag:'section',
            content:{
                cls:'container',
                content:{
                    elem:'row',
                    cls:'row',
                    content:[
                        {   
                            elem:'left-col',
                            cls:'col-xl-7',
                            content:[
                                {
                                    elem:'a-title',
                                    tag:'h1',
                                    content:'Сохраните окружающий мир Республики Саха'
                                },
                                {
                                    tag:'a',
                                    attrs:{
                                        href:'#problems-form-EC'
                                    },
                                    content:{   
                                        elem:'a-button',
                                        mix:{
                                            block:'button-EC'
                                        },
                                        tag:'button',
                                        content:'Оставить заявку'
                                    }
                                }
                                
                            ]
                        },
                        {
                            cls:'col-xl-5 d-flex justify-content-end align-items-end',
                            content:{
                                elem:'a-img',
                                tag:'img',
                                attrs:{
                                    src:'/img/main-EC/banner-img.png'
                                }
                            }
                        }
                    ]
                    
                }
                
            }
        },
        {
            elem:'b',
            tag:'section',
            content:{
                cls:'container',
                content:[
                        {
                            elem:'b-title',
                            tag:'h2',
                            content:'Экологические проблемы'
                        },
                        {
                            elem:'b-row',
                            cls:'row',
                            content:[
                                {
                                    cls:'col-md-4',
                                    content:{
                                        elem:'region-select',
                                        mix:{block:'selectize'},
                                        js:true,
                                        tag:'select',
                                        attrs:{
                                        id:'problems-EC__region'
                                        },
                                        content:[
                                        {
                                            tag:'option',
                                            attrs:{
                                            value:''
                                            },
                                            content:''
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 11'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 22'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 33'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 333'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 3333'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 33333'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 3334433'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 334434433'
                                        },
                                        ]
                                    }
                                },
                                {
                                    cls:'col-md-4',
                                    content:{
                                        elem:'settlement-select',
                                        mix:{block:'selectize'},
                                        js:true,
                                        tag:'select',
                                        attrs:{
                                        id:'problems-EC__settlement'
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
                                                content:'вариант 1'
                                            },
                                            {
                                                tag:'option',
                                                content:'вариант 2'
                                            },
                                            {
                                                tag:'option',
                                                content:'вариант 3'
                                            },
                                        ]
                                    }
                                },
                                {
                                    cls:'col-md-4',
                                    content:{
                                        elem:'category-select',
                                        mix:{block:'selectize'},
                                        js:true,
                                        tag:'select',
                                        attrs:{
                                        id:'problems-EC__category'
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
                                            content:'вариант 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 2'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 2'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 2'
                                        },
                                        ]
                                    }
                                }
                                
                            ]
                        },
                        {
                            elem:'b-row-2',
                            cls:'row',
                            content:[
                                {   
                                    elem:'b-col',
                                    cls:'col-lg-auto col-6 order-1 mb-2',
                                    content:{
                                        cls:'d-flex',
                                        content:[
                                            {
                                                elem:'select-next',
                                                content:'Показать:'
                                            },
                                            {
                                                elem:'select-show',
                                                content:{
                                                    elem:'selectize-control',
                                                    mix:{block:'selectize'},
                                                    js:true,
                                                    tag:'select',
                                                    attrs:{
                                                        id:'problems-EC__selectize-control'
                                                    },
                                                    content:[
                                                        {
                                                            tag:'option',
                                                            attrs:{
                                                                selected:'selected'
                                                            },
                                                            content:'Все'
                                                        },
                                                        {
                                                            tag:'option',
                                                            content:'Популярные'
                                                        },
                                                        {
                                                            tag:'option',
                                                            content:'За день'
                                                        },
                                                        {
                                                            tag:'option',
                                                            content:'За неделю'
                                                        },
                                                        {
                                                            tag:'option',
                                                            content:'За месяц'
                                                        },
                                                        {
                                                            tag:'option',
                                                            content:'За год'
                                                        },
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    elem:'b-col',
                                    cls:'col-lg col-6 order-2 mb-2',
                                    content:{
                                        cls:'d-flex justify-content-end',
                                        content:{
                                            block:'search-OC',
                                            mix:{
                                                block:'problems-EC',
                                                elem:'search'
                                            },
                                            attrs:{
                                                // тут необходимые атрибуты
                                            },
                                            content:[
                                                {
                                                    placeholder:'Поиск'
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    elem:'b-col',
                                    cls:'col-lg col-6 order-3 mb-2',
                                    content:{
                                        cls:'d-flex justify-content-lg-end',
                                        content:[
                                            {
                                                elem:'select-next',
                                                content:'Показать:'
                                            },
                                            {
                                                elem:'select-show',
                                                content:{
                                                    elem:'selectize-card',
                                                    mix:{block:'selectize'},
                                                    js:true,
                                                    tag:'select',
                                                    attrs:{
                                                        id:'problems-EC__selectize-card'
                                                    },
                                                    content:[
                                                        {
                                                            tag:'option',
                                                            attrs:{
                                                                selected:'selected'
                                                            },
                                                            content:'9 карточек'
                                                        },
                                                        {
                                                            tag:'option',
                                                            content:'18 карточек'
                                                        },
                                                        {
                                                            tag:'option',
                                                            content:'36 карточек'
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    elem:'b-col',
                                    cls:'col-lg-auto col-6 order-4 mb-2',
                                    content:{
                                        cls:'d-flex align-items-start justify-content-end',
                                        content:{
                                            elem:'default-settings',
                                            tag:'button',
                                            content:'Сбросить настройки'
                                        }
                                    }
                                }
                            ]
                        },
                        {   
                            block:'problems-card-EC',
                            cls:'row',
                            content:[
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1 во дворах сломали дорожное полотно. По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                    text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться? Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                },
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1 во дворах сломали дорожное полотно. По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                    text: "Просим оказать содействие в ремонт. ",
                                },
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1 во дворах сломали дорожное полотно. ",
                                    text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться? Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                },
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1. ",
                                    text: "Просим оказать содействие в ремонт. ",
                                },
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1 во дворах сломали дорожное полотно. По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                    text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться? Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                },
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1 во дворах сломали дорожное полотно. По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                    text: "Просим оказать содействие в ремонт. ",
                                },
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1 во дворах сломали дорожное полотно. ",
                                    text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться? Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                },
                                {   
                                    data: "29 июня 2020, 07:48",
                                    position:"с.Майя",
                                    title:
                                        "По Пояркова 3/1. ",
                                    text: "Просим оказать содействие в ремонт. ",
                                },
                            ]
                        },
                        {
                            elem:'b-bottom',
                            content:{
                                block:'pagination-OC',
                                content:
                                    [
                                        
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
                        }
                ]
            }
        },
        {
            elem:'c',
            tag:'section',
            content:[
                {
                    cls:'container',
                    content:{
                        elem:'c-title',
                        tag:'h2',
                        content:'Карта экологических проблем'
                    }
                },
                {
                    content:'Тут будет карта'
                }     
            ]
        },
        {
            elem:'e',
            attrs:{
                id:"problems-form-EC"
            },
            tag:'section',
            content:{
                cls:'container',
                content:[
                    {
                        elem:'e-title',
                        tag:'h2',
                        content:'Оставить заявку'
                    },
                    {
                        block:'form-EC',
                        content:[
                            {
                                elem:'title',
                                content:'ЗАЯВИТЕЛЬ'
                            },
                            {
                                elem:'row',
                                cls:'row',
                                content:[
                                    {   
                                        elem:'col',
                                        cls:'col-lg-6',
                                        content:{
                                            cls:'row',
                                            content:[
                                                {
                                                    elem:'col',
                                                    elemMods:{mt:'20'},
                                                    cls:'col-12',
                                                    content:[
                                                        {
                                                            elem:'col-name',
                                                            content:[
                                                                'Ф.И.О.',
                                                                {   
                                                                    elem:'quot',
                                                                    tag:'span',
                                                                    content:'*'
                                                                }
                                                            ]
                                                        },
                                                        {   
                                                            elem:'input',
                                                            tag:'input',
                                                            attrs:{
                                                                placeholder:'Название'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem:'col',
                                                    elemMods:{mt:'20'},
                                                    cls:'col-xl-5',
                                                    content:[
                                                        {
                                                            elem:'col-name',
                                                            content:[
                                                                'Дата рождения',
                                                                {   
                                                                    elem:'quot',
                                                                    tag:'span',
                                                                    content:'*'
                                                                }
                                                            ]
                                                        },
                                                        {   
                                                            elem:'input',
                                                            tag:'input',
                                                            attrs:{
                                                                placeholder:'__.__.____'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem:'col',
                                                    elemMods:{mt:'20'},
                                                    cls:'col-xl-7',
                                                    content:[
                                                        {
                                                            elem:'col-name',
                                                            content:[
                                                                'Номер телефона',
                                                                {   
                                                                    elem:'quot',
                                                                    tag:'span',
                                                                    content:'*'
                                                                }
                                                            ]
                                                        },
                                                        {   
                                                            elem:'input',
                                                            tag:'input',
                                                            attrs:{
                                                                placeholder:'+7-('
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {   
                                        elem:'col',
                                        cls:'col-lg-6',
                                        content:{
                                            cls:'row',
                                            content:[
                                                {
                                                    elem:'col',
                                                    elemMods:{mt:'20'},
                                                    cls:'col-12',
                                                    content:[
                                                        {
                                                            elem:'col-name',
                                                            content:[
                                                                'Введите ваш e-mail',
                                                                {   
                                                                    elem:'quot',
                                                                    tag:'span',
                                                                    content:'*'
                                                                }
                                                            ]
                                                        },
                                                        {   
                                                            elem:'input',
                                                            tag:'input',
                                                            attrs:{
                                                                placeholder:'Ваш e-mail'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem:'col',
                                                    elemMods:{mt:'20'},
                                                    cls:'col-12',
                                                    content:[
                                                        {   
                                                            elem:'checkbox',
                                                            tag:'input',
                                                            attrs:{
                                                                type:'checkbox'
                                                            }
                                                        },'Согласие на обработку персональных данных'
                                                    ]
                                                },
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                elem:'title',
                                elemMods:{mt:'30'},
                                content:'ПРОБЛЕМА'
                            },
                            {
                                cls:'row',
                                content:[
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-12',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Название проблемы',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'input',
                                                tag:'input',
                                                attrs:{
                                                    placeholder:'Название'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-lg-6',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Выберите категорию',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'problems-category',
                                                mix:{block:'selectize'},
                                                tag:'select',
                                                js:true,
                                                attrs:{
                                                    id:'form-EC__problems-category'
                                                },
                                                content:[
                                                    {
                                                        tag:'option',
                                                        content:''
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар1'
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-lg-6',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Тип нарушения',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'problems-type',
                                                mix:{block:'selectize'},
                                                tag:'select',
                                                js:true,
                                                attrs:{
                                                    id:'form-EC__problems-type'
                                                },
                                                content:[
                                                    {
                                                        tag:'option',
                                                        content:''
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар1'
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    // начало. Показвать только если выбрана категория "заявка на проведение лабарторных работ"
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-12',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Лабаратория, в которую планируется доставить пробы',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'problems-lab',
                                                mix:{block:'selectize'},
                                                tag:'select',
                                                js:true,
                                                attrs:{
                                                    id:'form-EC__problems-lab'
                                                },
                                                content:[
                                                    {
                                                        tag:'option',
                                                        content:''
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар1'
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    // конец
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-lg-6',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Регион',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'problems-region',
                                                mix:{block:'selectize'},
                                                tag:'select',
                                                js:true,
                                                attrs:{
                                                    id:'form-EC__problems-region'
                                                },
                                                content:[
                                                    {
                                                        tag:'option',
                                                        content:''
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар1'
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-lg-6',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Населенный пункт',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'problems-location',
                                                mix:{block:'selectize'},
                                                tag:'select',
                                                js:true,
                                                attrs:{
                                                    id:'form-EC__problems-location'
                                                },
                                                content:[
                                                    {
                                                        tag:'option',
                                                        content:''
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар1'
                                                    },
                                                    {
                                                        tag:'option',
                                                        content:'вар2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-12 mt-20 d-flex justify-content-sm-end',
                                        content:{
                                            elem:'map-point',
                                            tag:'a',
                                            content:'Отменить на карте'
                                        }
                                    },
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-12',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Описание проблемы',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'textarea',
                                                tag:'textarea',
                                                attrs:{
                                                    placeholder:'Введите текст: Ограничение 4000 символов'
                                                }
                                            }
                                        ]
                                    },
                                    {   
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-12',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:'Добавьте фото/видео материалы',
                                                
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
                                            }
                                        ]
                                    },
                                    {
                                        elem:'col',
                                        elemMods:{mt:'20'},
                                        cls:'col-12',
                                        content:[
                                            {
                                                elem:'col-name',
                                                content:[
                                                    'Материалы с облачных сервисов',
                                                    {   
                                                        elem:'quot',
                                                        tag:'span',
                                                        content:'*'
                                                    }
                                                ]
                                            },
                                            {   
                                                elem:'input',
                                                tag:'input',
                                                attrs:{
                                                    placeholder:'Добавить ссылку'
                                                }
                                            },
                                            {
                                                elem:'add-url',
                                                content:{
                                                    tag:'a',
                                                    attrs:{
                                                        id:'id'
                                                    },
                                                    content:'Добавить еше'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem:'col',
                                        elemMods:{mt:'40'},
                                        cls:'col-12 d-flex justify-content-end',
                                        content:{
                                            elem:'button',
                                            mix:{block:'button-EC'},
                                            tag:'button',
                                            content:'Отправить заявку'
                                        }
                                    }
                                ]
                            },
                            
                            
                        ]
                    }  
                ]
            }
        }         
    ],
  });
  