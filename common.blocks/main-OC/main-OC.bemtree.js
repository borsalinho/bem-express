block('main-OC')({
    content: () => [
        {   
            cls:'a',
            tag:'section',
            content:[{
                block:'main-slider-OC',
                goods:[
                    {
                        text:'тут будет первый слайдер',
                        image:'/img/main-slider-OC/application-banner.svg'
                    },
                    {
                        text:'тут будет второй слайдер',
                        image:'/img/main-slider-OC/application-banner.svg'
                    },
                    {
                        text:'тут будет третий слайдер',
                        image:'/img/main-slider-OC/application-banner.svg'
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