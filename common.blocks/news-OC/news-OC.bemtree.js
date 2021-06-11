block('news-OC')({
    content: () => [
        {   
            elem:'a',
            tag:'section',
            content:{
                elem:'a-content',
                cls:'container',
                content:[
                    {
                        elem:'a-top',
                        content:[
                            {   
                                elem:'a-title',
                                tag:'h1',
                                content:'Новости'
                            },
                            {
                                elem:'a-url',
                                tag:'a',
                                attrs:{
                                    href:'news/oneclick'
                                },
                                content:'Новости OneClick Yakutia'
                            }
                        ]
                    },
                    {
                        elem:'a-body',
                        cls:'row',
                        content:[
                            {
                                cls:'col-md-6',
                                content:{
                                    elem:'a-select',
                                    tag:'select'
                                }
                            },
                            {
                                cls:'col-md-6',
                                content:{
                                    elem:'a-select',
                                    tag:'select'
                                }
                            },
                        ]
                    },
                    {
                        elem:'a-bottom',
                        content:[
                            {
                                block:'search-OC',
                                content:[
                                    {
                                        placeholder:'Поиск'
                                    }
                                ]
                            },
                            {
                                elem:'a-button',
                                tag:'button',
                                content:'Сбросить все'
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
                elem:'b-content',
                cls:'container',
                content:{
                    block:"news-card",
                    cls: "row",
                    content: [
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                      {
                        title:
                          "Волонтеры Мирнинского района оказывают посильную помощь в избирательных Волонтеры Мирнинского района оказывают посильную помощь в избирательных",
                        data: "29 июня 2020, 07:48",
                        background: 'url("/img/actual-info-OC/zatu4ka2.jpg")',
                      },
                    ],
                  },
            }
        },
        {
            elem:'c',
            tag:'section',
            content:{
                elem:'c-content',
                cls:'container',
                content:{
                    block:'pagination-OC'
                }
            }
        },
        
        // временный контейнер 
        {
            cls:'container',
            content:{
                block: "news-content",
                content: [
                    {
                    data: "30 декабря 2020",
                    title: "Заголовок новостей",
                    imgUrl: "/img/actual-info-OC/zatu4ka2.jpg",
                    text: "Посадил дед репку, вышла репка и зарезала дедку. Посадил дед репку, вышла репка и зарезала дедку. Посадил дед репку, вышла репка и зарезала дедку. Посадил дед репку, вышла репка и зарезала дедку. Посадил дед репку, вышла репка и зарезала дедку. Посадил дед репку, вышла репка и зарезала дедку. Посадил дед репку, вышла репка и зарезала дедку. Посадил дед репку, вышла репка и зарезала дедку. ",
                    },
                ],
            }
        }
    ]
});