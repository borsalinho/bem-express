block('profile-card')({
    
    content: () => [
        {
            elem:'tree',
            content:[
                {
                    elem:'path',
                    tag:'span',
                    content:'Список обращений'
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
                    content:'отписаться от проблемы'
                },
                {
                    elem:'body-text',
                    tag:'p',
                    content:'Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно и то же... Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр...'
                },
                {
                    elem:'elements',
                    content:[

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
                    cls:'col-6',
                    content:[
                        {
                            elem:'no-problem',
                            content:'Проблема самоустранилась'
                        },
                        {
                            elem:'go-archive',
                            content:'Подтвердить решение и отравить в архив',
                        },
                        {
                            elem:'change-status',
                            content:'Отменить статус:"Решено"',
                        }
                    ]
                },
                {
                    elem:'col',
                    cls:'col-6',
                    content:[
                        {
                            elem:'stars'
                        },
                        {
                            block:'share-OC'
                        }
                    ]
                }
            ]
        }
    ]
});