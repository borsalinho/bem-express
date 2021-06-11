block('contests-OC')({
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
                            elem:'col-left',
                            cls:'col-lg-5',
                            content:[
                                {
                                    elem:'a-title',
                                    tag:'h1',
                                    content:'Конкурсы на платформе yakutia.click'
                                },
                                {
                                    elem:'a-text',
                                    tag:'p',
                                    content:'Все конкурсы платформы yakutia.click в одном месте'
                                }
                            ]
                        },
                        {
                            elem:'col-right',
                            cls:'col-lg-7 d-flex',
                            content:[
                                {
                                    elem:'a-img',
                                    tag:'img',
                                    attrs:{
                                        src:'img/contests-OC/banner.png'
                                    }
                                },
                                
                            ]
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
                        elem:'ongoing',
                        content:[
                            {
                                elem:'ong-body',
                                content:[
                                    {
                                        elem:'ong-title',
                                        tag:'h6',
                                        content:'Текущие конкурсы'
                                    },
                                    {
                                        elem:'ong-slider',
                                        mix: { block: "slick-slider-dots" },
                                        js:true,
                                        content:[
                                            {
                                                img:"img/contests-OC/digital-world.png",
                                                title:'Название конкурса в две строки или больше',
                                                text:'Голосование до 17 января 2021 Итоги 18 января 2021',
                                                url:'#'
                                            },
                                            {
                                                img:"img/contests-OC/digital-world.png",
                                                title:'Название конкурса в две строки или больше Название конкурса в две строки или больше',
                                                text:'Голосование до 17 января 2021 Итоги 18 января 2021',
                                                url:'#'
                                            }
                                            
                                        ]
                                    },
                                    {
                                        elem:'ong-skeleton'
                                    }
                                ]
                            },
                            {
                                elem:'news',
                                mix:'card-OC',
                                content:[
                                    {
                                        elem:'news-top',
                                        js:true,
                                        content:[
                                            {
                                                elem:'news-tab',
                                                elemMods:{active:'true'},
                                                // tag:'span',
                                                content:'Новости конкурсов'
                                            },
                                            {
                                                elem:'news-tab',
                                                // tag:'span',
                                                content:'Предстоящие конкурсы'
                                            },
                                        ]
                                    },
                                    {
                                        elem:'news-body',
                                        elemMods:{active:'true'},
                                        content:[
                                            {
                                                elem:'news-card',
                                                content:[
                                                    {
                                                        elem:'n-c-title',
                                                        tag:'h6',
                                                        content:'Конкурс “Цифровой трон” продлен до 17 января 2021'
                                                    },
                                                    {
                                                        elem:'n-c-url',
                                                        tag:'a',
                                                        attrs:{
                                                            src:'#'
                                                        },
                                                        content:'Перейти'
                                                    }
                                                ]
                                            },
                                            {
                                                elem:'news-card',
                                                content:[
                                                    {
                                                        elem:'n-c-title',
                                                        tag:'h6',
                                                        content:'Конкурс “Цифровой трон” продлен до 17 января 2021'
                                                    },
                                                    {
                                                        elem:'n-c-url',
                                                        tag:'a',
                                                        attrs:{
                                                            src:'#'
                                                        },
                                                        content:'Перейти'
                                                    }
                                                ]
                                            },
                                            {
                                                elem:'news-card',
                                                content:[
                                                    {
                                                        elem:'n-c-title',
                                                        tag:'h6',
                                                        content:'Конкурс “Цифровой трон” продлен до 17 января 2021'
                                                    },
                                                    {
                                                        elem:'n-c-url',
                                                        tag:'a',
                                                        attrs:{
                                                            src:'#'
                                                        },
                                                        content:'Перейти'
                                                    }
                                                ]
                                            },
                                            {
                                                elem:'news-card',
                                                content:[
                                                    {
                                                        elem:'n-c-title',
                                                        tag:'h6',
                                                        content:'Конкурс “Цифровой трон” продлен до 17 января 2021'
                                                    },
                                                    {
                                                        elem:'n-c-url',
                                                        tag:'a',
                                                        attrs:{
                                                            src:'#'
                                                        },
                                                        content:'Перейти'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem:'news-body',
                                        content:[
                                            {
                                                elem:'news-card',
                                                content:[
                                                    {
                                                        elem:'n-c-title',
                                                        tag:'h6',
                                                        content:'Конкурс “Цифровой трон” продлен до 17 января 2021'
                                                    },
                                                    {
                                                        elem:'n-c-url',
                                                        content:'Описание'
                                                    }
                                                ]
                                            },
                                            
                                            
                                            
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem:'completed',
                        content:[
                            {
                                elem:'completed-title',
                                tag:'h6',
                                content:'Прошедщие конкурсы'
                            },
                            {
                                elem:'comp-slider',
                                cls:'row',
                                content:[
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        url:'#'
                                    },
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        url:'#'
                                    },
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        url:'#'
                                    },
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        url:'#'
                                    },
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        url:'#'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        
    ]
});