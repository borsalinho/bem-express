block('profile-card').elem('status')(

    content()(function() {
        return this.ctx.content.map(function(item){
            let answeredStatus;
            let answeredStatusText;

            let doneStatus;
            let doneStatusText;
            

            if (item.completed) {
                answeredStatus = [
                    {
                        elem:'answered-img',
                    },
                    
                ];
                answeredStatusText = [
                    {   
                        elem:'answered-text',
                        content:'Администратор ответил на вашу заявку'
                    }
                ];

                doneStatus = [
                    {
                        elem:'done-img',
                    },
                ];
                doneStatusText = [
                    {   
                        elem:'done-text',
                        content:'Ваша заявка выполнена и отправлена в архив'
                    }
                ];
            }

            if (item.inWork) {
                answeredStatus = [
                    {
                        elem:'answered-img',
                        elemMods:{disabled:'true'},
                    },
                    
                ];
                answeredStatusText = [
                    {   
                        elem:'answered-text',
                        elemMods:{disabled:'true'},
                        content:'Администратор еще не ответил на вашу заявку'
                    }
                ];

                doneStatus = [
                    {
                        elem:'done-img',
                        elemMods:{disabled:'true'},
                    },
                ];
                doneStatusText = [
                    {   
                        elem:'done-text',
                        elemMods:{disabled:'true'},
                        content:'Ваша заявка еще не выполнена'
                    }
                ];
            }

            if (item.clarifed) {
                answeredStatus = [
                    {
                        elem:'answered-img',
                        
                    },
                    
                ];
                answeredStatusText = [
                    {   
                        elem:'answered-text',
                        content:'Администратор ответил на вашу заявку'
                    }
                ];

                doneStatus = [
                    {
                        elem:'done-img',
                    },
                ];
                doneStatusText = [
                    {   
                        elem:'done-text',
                        content:'Ваша заявка выполнена и отправлена в архив'
                    }
                ];
            }

            if (item.answered) {
                answeredStatus = [
                    {
                        elem:'answered-img',
                    },
                    
                ];
                answeredStatusText = [
                    {   
                        elem:'answered-text',
                        content:'Администратор ответил на вашу заявку'
                    }
                ];

                doneStatus = [
                    {
                        elem:'done-img',
                        elemMods:{disabled:'true'},
                    },
                ];
                doneStatusText = [
                    {   
                        elem:'done-text',
                        elemMods:{disabled:'true'},
                        content:'Ожидает вышего подтверждения'
                    }
                ];
            }

            return [
                {
                    elem:'status-body',
                    content:[
                        {
                            elem:'status-sent',
                            content:[
                                {
                                    elem:'sent-img',
                                    
                                    attrs:{
                                        src:'/img/profile-card/sent.png'
                                    }
                                },
                                {   
                                    elem:'sent-text',
                                    content:'Ваша заявка отправлена. Ожидайте ответа'
                                }
                            ]
                        },
                        {
                            elem:'status-received',
                            content:[
                                {
                                    elem:'received-img',
                                },
                                {   
                                    elem:'received-text',
                                    content:'Ваша заявка получена администратором'
                                }
                            ]
                        },
                        {
                            elem:'status-answered',
                            content:[
                                answeredStatus,
                                answeredStatusText
                            ]
                        },
                        {
                            elem:'status-done',
                            content:[
                                doneStatus,
                                doneStatusText
                            ]
                        },
                    ]
                }
            ];
        });
    }),
);