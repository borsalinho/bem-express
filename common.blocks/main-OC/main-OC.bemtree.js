block('main-OC')({
    content: () => [
        {   
            cls:'a',
            tag:'section',
            content:[{
                block:'main-slider-OC',
                js:true,
                goods:[
                    {
                        title:'Платформа мониторинга проблем в Якутии',
                        image:'/img/main-slider-OC/application-banner.svg',
                        text:'Заметили проблему в своем населенном пункте? Сообщите о ней через сервис «Мониторинг проблем» и следите за устранением! Вам ответят в течение одного рабочего дня!',
                        button:'Создать заявку',
                        url:'/about',
                        monitoringElemData:true,
                    },
                    {
                        title:'тут будет второй слайдер',
                        image:'/img/main-slider-OC/application-banner.svg',
                        text:'Заметили проблему в своем населенном пункте? Сообщите о ней через сервис «Мониторинг проблем» и следите за устранением! Вам ответят в течение одного рабочего дня!',
                        button:'Создать заявку',
                        url:'/about'
                    },
                    {
                        title:'тут будет третий слайдер',
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
        }
    ]
});