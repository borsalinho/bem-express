block('main-OC').elem('problem-content')(

    content()(function() {
        return this.ctx.goods.map(function(item){


            return [ 
                {
                    elem:'card',
                    mix:{block:'card-OC'},
                    content:[
                        {
                            elem:'top',
                            content:['Мониторинг проблем',
                                        {   
                                            elem:'data',
                                            tag:'span',
                                            content:'30 июня 2020, 17:00'
                                        }
                                    ]
                        },
                        {
                            elem:'body',
                            content:[
                                {
                                    elem:'title',
                                    tag:'h2',
                                    content:item.title
                                },
                                {
                                    elem:'text',
                                    content:item.text
                                },
                                {
                                    elem:'elements',
                                    content:[
                                        {
                                            elem:'elements-title',
                                            tag:'h6',
                                            content:'Вложения'
                                        },
                                        {
                                            elem:'elem',

                                        }
                                    ]
                                },
                                {
                                    elem:'answer',
                                    content:[
                                        {
                                            elem:'answer-title',
                                            content:'Ответ администратора'
                                        },
                                        {
                                            elem:'answer-text',
                                            content:item.answer
                                        },
                                    ]
                                },
                                {
                                    elem:'sub-and-share',
                                    content:[
                                        {
                                            cls:'row',
                                            content:[
                                                {
                                                    cls:'col-md-6 d-flex',
                                                    content:[
                                                        {   
                                                            block:'main-OC',
                                                            elem:'subscribe',
                                                            content:{
                                                                block:'subscribe',
                                                            }
                                                        },
                                                        {
                                                            block:'status',
                                                            goods:[{
                                                                // completed:true,
                                                                inWork:true,
                                                                // clarifed:true,
                                                            }]
                                                        }
                                                    ]
                                                },
                                                {
                                                    cls:'col-md-6 d-flex justify-content-md-end',
                                                    block:'main-OC',
                                                    elem:'share',
                                                    content:{
                                                        block:'share-OC',
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem:'comments',
                                    content:{
                                        block:'comments-OC',
                                        content:[
                                            {
                                                elem:'title',
                                                tag:'h6',
                                                content:'Комментарии'
                                            },
                                            {
                                                elem:'comments',
                                                commentsContent:[
                                                    {
                                                        avatarUrl:'/img/actual-info-OC/zatu4ka2.jpg',
                                                        userName:'Зубенко Михаил Петрович',
                                                        userText:'Вор в законе, Шумиловка городок.Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок'
                                                    },
                                                    {
                                                        avatarUrl:'/img/comments-OC/avatar_plug.png',
                                                        userName:'Зубенко Михаил Петрович Зубенко Михаил Петрович Зубенко Михаил Петрович',
                                                        userText:'Вор в законе, Шумиловка городок'
                                                    },
                                                    {
                                                        avatarUrl:'/img/comments-OC/avatar_plug.png',
                                                        userName:'Зубенко Михаил Петрович',
                                                        userText:'Вор в законе, Шумиловка городок'
                                                    },
                                                    {
                                                        avatarUrl:'/img/comments-OC/avatar_plug.png',
                                                        userName:'Зубенко Михаил Петрович',
                                                        userText:'Вор в законе, Шумиловка городок'
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }),
);