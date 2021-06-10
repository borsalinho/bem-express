block('contests-OC')({
    content: () => [
        
        {
            elem:'a',
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
                                    }
                                ]
                            },
                            {
                                elem:'news',
                                mix:'card-OC'
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
                                        text:'Голосование до 17 января 2021 Итоги 18 января 2021',
                                        url:'#'
                                    },
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        text:'Голосование до 17 января 2021 Итоги 18 января 2021',
                                        url:'#'
                                    },
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        text:'Голосование до 17 января 2021 Итоги 18 января 2021',
                                        url:'#'
                                    },
                                    {
                                        img:"img/contests-OC/digital-world.png",
                                        title:'Название конкурса в две строки или больше',
                                        text:'Голосование до 17 января 2021 Итоги 18 января 2021',
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