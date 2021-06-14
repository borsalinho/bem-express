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
                                elem:'a-button',
                                mix:{block:'button-OC'},
                                tag:'button',
                                content:'Посмотреть идею'
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
                                cls:'col-auto-md d-flex justify-content-center justify-content-md-end align-items-center',
                                content:'Сбросить все настройки'
                            }
                        ]
                    },
                    {
                        elem:'statuses',
                        content:[
                            {   
                                elem:'statuses-title',
                                tag:'h6',
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
                    }
                ]
            }
        }
    ]
});