block('modal-problems-OC')(

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
                                    elem:'',
                                    content:[
                                        {
                                            
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }),
);