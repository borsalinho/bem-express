block('about-OC')({
    content: () => [
        {   
            elem:'a',
            tag:'section',
            content:{
                cls:'container',
                content:[{
                        elem:'card',
                        mix:{block:'card-OC'},
                        content:[
                            {   
                                elem:'title',
                                tag:'h1',
                                content:'История проекта'
                            },
                            {   
                                elem:'row',
                                cls:'row',
                                content:[
                                    {   
                                        
                                        cls:'col-lg-6',
                                        content:{
                                            tag:'a',
                                            attrs:{
                                                href:'/img/about-OC/history_size_max.png'
                                            },
                                            content:{
                                                block:'about-OC',
                                                elem:'image',
                                                tag:'img',
                                                attrs:{
                                                    src:'/img/about-OC/history_size_min.png'
                                                },
                                            }
                                        }
                                        
                                    },
                                    {   
                                        elem:'text-a',
                                        tag:'p',
                                        cls:'col-lg-6',
                                        content:[
                                        'В 2013 году по инициативе Главы городского округа «город Якутск» Айсена Сергеевича Николаева был создан первый в России краудсорсинговый интернет-портал OneclickYakutsk, как эффективный инструмент для прямого взаимодействия граждан и органов власти.',
                                        {tag: 'br'},
                                        {tag: 'br'},
                                        'Учитывая положительный опыт внедрения портала в городе Якутске, назрела необходимость вывести его на республиканский уровень, существенно расширив и усовершенствовав его функционал на территории всей Якутии.',
                                        {tag: 'br'},
                                        {tag: 'br'},
                                        'OneClick Yakutia – это уникальный и современный цифровой продукт, который может стать средством решения многих проблем в жизни граждан.'
                                        ]
                                    },
                                    
                                ]
                            }
        
                        ]
                    },
                ]
            },
        },
        {
            elem:'b',
            tag:'section',
            content:{
                cls:'container',
                content:
                    {
                        elem:'card',
                        mix:{block:'card-OC'},
                        content:[
                            {
                            elem:'title',
                            tag:'h2',
                            content:'Как это работает'
                            },
                            {
                                elem:'row',
                                cls:'row',
                                content:[
                                    {
                                        cls:'col-lg-6',
                                        content:[
                                            {   
                                                elem:'title',
                                                elemMods:{ font:'14' },
                                                content:'Связь с органами государственной власти'
                                            },
                                            {
                                                elem:'text-b',
                                                tag:'p',
                                                content:'С помощью платформы жители Якутии могут напрямую связываться с представителями муниципальных образований, исполнительными органами государственной власти, сообщать о волнующих проблемах, а также предлагать идеи по улучшению жизни в своих населённых пунктах.'
                                            }
                                        ]
                                    },
                                    {
                                        cls:'col-lg-6',
                                        content:{
                                            block:'about-OC',
                                            elem:'image',
                                            elemMods:{type:'b'},
                                            tag:'img',
                                            attrs:{
                                                src:'img/about-OC/how-it-work-hands.png'
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                elem:'row',
                                cls:'row',
                                content:[
                                    {
                                        cls:'col-lg-6 order-2 order-lg-1',
                                        content:{
                                            block:'about-OC',
                                            elem:'image',
                                            elemMods:{type:'b'},
                                            tag:'img',
                                            attrs:{
                                                src:'img/about-OC/how-it-work-men.png'
                                            }
                                        }
                                    },
                                    {
                                        cls:'col-lg-6 order-1 order-lg-2',
                                        content:[
                                            {   
                                                elem:'title',
                                                elemMods:{ font:'14' },
                                                content:'Оперативное реагирование на запросы'
                                            },
                                            {
                                                elem:'text-b',
                                                tag:'p',
                                                content:['Оставляйте запросы нажав на кнопку «создать заявку». Заполните все поля в открывшемся окне.',
                                                {tag: 'br'},
                                                'Платформа принимает заявки по всей республике.',
                                                {tag: 'br'},
                                                'Все обращения принимаются в работу в течение суток и направляются в ответственные органы власти.',
                                                {tag: 'br'},
                                                'Вы можете отслеживать статус исполнения обращений в личном кабинете.',
                                                {tag: 'br'},
                                                'Yakutia.click – решаем проблемы республики в один клик.']
                                            }
                                        ]
                                    },
                                    
                                ]
                            }
                        ]
                    }
            }
        }
        
    ]
});