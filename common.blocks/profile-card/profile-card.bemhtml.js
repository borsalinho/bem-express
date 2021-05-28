block('profile-card')({
    
    content: () => [
        {
            elem:'tree-mob',
            content:[
                
                {
                    tag:'img',
                    attrs:{
                        src:'/img/profile-card/chevron-left.png'
                    }
                },
                {
                    tag:'span',
                    content:'Назад'
                },
            ]
        },
        {
            elem:'tree',
            content:[
                {
                    elem:'path',
                    tag:'span',
                    content:{
                        tag:'a',
                        content:'Список обращений'
                    }
                },
                {
                    tag:'img',
                    attrs:{
                        src:'/img/profile-card/prev-next.png'
                    }
                },
                {
                    elem:'path',
                    elemMods:{active:'true'},
                    tag:'span',
                    content:'Обращение №62453'
                },
            ]
        },
        {
            elem:'status',
            content:[
                {   
                    // на выбор один

                    inWork:true,
                    // answered:true,
                    // clarifed:true,
                    // completed:true,
                }
            ]
        },
        {
            elem:'body',
            mix:{block:'card-OC'},
            content:[
                {
                    elem:'body-top',
                    content:[
                        {
                            elem:'body-title',
                            tag:'h6',
                            content:'Распитие спиртных напитков в общественном месте'
                        },
                        {
                            elem:'body-status',
                            content:{
                                block:'status',
                                content:[
                                    {
                                        inWork:true
                                    }
                                ]
                            }
                        }
                        
                    ]
                },
                {
                    elem:'body-data',
                    content:'29 июля 2020, 07:48'
                },
                {
                    elem:'body-unsubscribe',
                    tag:'button',
                    content:'Отписаться от проблемы'
                },
                {
                    elem:'body-text',
                    tag:'p',
                    content:'Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея.'
                },
                {
                    elem:'elements',
                    content:[
                        {   
                            content:'Вложения:'
                        }
                    ]
                }
            ]
        },
        {
            elem:'answer',
            content:[
                {
                    data:'27 июня 2021, 07:38',
                    text:'Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея'
                },
                {
                    data:'27 июня 2021, 07:38',
                    text:'Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея'
                }
            ]
        },
        {   
            elem:'row',
            cls:'row',
            content:[
                {   
                    elem:'col',
                    cls:'col-lg-6',
                    content:[
                        {
                            elem:'no-problem',
                            tag:'button',
                            content:'Проблема самоустранилась'
                        },
                        {
                            tag:'br'
                        },
                        {
                            elem:'go-archive',
                            tag:'button',
                            content:'Подтвердить решение и отравить в архив',
                        },
                        {
                            tag:'br'
                        },
                        {
                            elem:'change-status',
                            js:true,
                            tag:'button',
                            content:'Отменить статус:"Решено"',
                        }
                    ]
                },
                {
                    elem:'col',
                    cls:'col-lg-6 d-flex flex-column align-items-lg-end align-items-start',
                    content:[
                        {
                            elem:'stars',
                            content:[
                                {   
                                    elem:'stars-text',
                                    tag:'span',
                                    content:'Оценить:'
                                },
                                {
                                    elem:'star',
                                },
                                {
                                    elem:'star',
                                },
                                {
                                    elem:'star',
                                }
                            ]
                        },
                        {   
                            block:'share-OC',
                            mix:{block:'profile-card',elem:'share'}
                        }
                    ]
                }
            ]
        },
        {
            elem:'change-card',
            mix:'card-OC',
            content:[
                {
                    elem:'change-title',
                    content:'Отменить статус:"Решено"'
                },
                {
                    elem:'change-text',
                    content:['Укажите причину', {elem:'change-quot',tag:'span',content:'*'}]
                },
                {
                    elem:'change-select',
                    tag:'select'
                },
                {
                    elem:'change-text',
                    content:'Комментарий'
                },
                {
                    elem:'change-textarea',
                    tag:'textarea',
                    attrs:{
                        placeholder:'Введите текст: ограничение 4000 символов'
                    }
                },
                {
                    tag:'br',
                },
                {
                    elem:'change-button',
                    mix:{block:'button-OC'},
                    tag:'button',
                    content:'Отправить'
                },
                
            ]
        },
        {
            block: "comments-OC",
              content: [
                {
                  elem: "title",
                  tag: "h6",
                  content: "Комментарии",
                },
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
            mix:{
                    block: "profile-card",
                    elem: "comment-textarea",
                },
            },
        {
            block: "button-OC",
            mix: {
                block: "profile-card",
                elem: "comment-button",
            },
            content: "Отправить",
        },
    ]
});