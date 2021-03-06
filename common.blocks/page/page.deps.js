({
    shouldDeps: [
        // Ошибка
        '404',
        // Главные
        'header-OC',
        'footer-OC',
        {
            mods: { view: ['404'] }
        },

        // Главная страница
        {
            mods: { open: ['main-OC'] }
        },
        'main-OC',
        
        // О проектe
        {
            mods: { open: ['about-OC'] }
        },
        'about-OC',
        
        // личный кабинет
        'profile-OC',

        // Мониторинг проблем
        'problems-OC',

        // Новости
        'news-OC',

        // Конкурсы
        'contests-OC',

        // Родные города и села
        'regions',

        // ППМИ
        'regions-concepts',

        // Благоустройство сельских территорий
        'regions-complex',

        // Стратегическая инициатива «Новая модель села. Развитие сельских территорий»
        'regions-village',

        // Экоклик-главная
        'main-EC',
        
        // Экоклик-футер
        'footer-EC',

        // Экоклик-проблемы
        'problems-EC',

        // эффект при наведении на открывающиеся карточки
        'hover-effect'
    ]
})



