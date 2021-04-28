block('main-OC')({
    content: () => [
        {   
            elem:'a',
            tag:'section',
            content:[{
                block:'main-slider-OC',
                js:true,
                goods:[
                    {   
                        title:'Платформа мониторинга проблем в Якутии',
                        titletag:'h1',
                        image:'/img/main-slider-OC/application-banner.svg',
                        text:'Заметили проблему в своем населенном пункте? Сообщите о ней через сервис «Мониторинг проблем» и следите за устранением! Вам ответят в течение одного рабочего дня!',
                        button:'Создать заявку',
                        url:'/about',
                        monitoringElemData:true,
                    },
                    {   
                        title:'Второй слайдер',
                        titletag:'h3',
                        image:'/img/main-slider-OC/application-banner.svg',
                        text:'Заметили проблему в своем населенном пункте? Сообщите о ней через сервис «Мониторинг проблем» и следите за устранением! Вам ответят в течение одного рабочего дня!',
                        button:'Создать заявку',
                        url:'/about'
                    },
                    {   
                        title:'Второй слайдер',
                        titletag:'h3',
                        image:'/img/main-slider-OC/application-banner.svg',
                        text:'Заметили проблему в своем населенном пункте? Сообщите о ней через сервис «Мониторинг проблем» и следите за устранением! Вам ответят в течение одного рабочего дня!',
                        button:'Создать заявку',
                        url:'/about'
                    }
                ]
            },
            {
                block:'main-slider-OC',
                elem:'skeleton'
            }
            ]
        },
        {
            elem:'b',
            tag:'section',
            content:{
                cls:'container',
                content:[
                    {
                        cls:'row',
                        content:[
                            {
                                cls:'col-lg-6',
                                content:{
                                    block:'actual-info-OC',
                                    js:true,
                                    goods:[
                                        {
                                            title:'заглавафыва в 2 строки заглавафыва в 2 строки заглавафыва в 2 строки заглавафыва в 2 строки заглавафыва в 2 строки заглавафыва в 2 строки заглавафыва в 2 строки заглавафыва в 2 строки заглавафыва в 2 строки',
                                            text:'описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк описание максимум в 6 строк',
                                            url:'#',
                                            background:'url("/img/actual-info-OC/zatu4ka2.jpg")'
                                        }
                                    ]
                                }
                            },
                            {
                                cls:'col-lg-3 col-sm-6',
                                content:{
                                    block:'main-OC',
                                    elem:'last-actions',
                                }
                            },
                            {
                                cls:'col-lg-3 col-sm-6',
                                content:{
                                    block:'main-OC',
                                    elem:'last-comments',
                                    
                                }   
                            }
                        ]
                    }
                ]
            }
        }
    ],
});