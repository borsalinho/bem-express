({
    shouldDeps: [
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
        // {
        //     mods: { open: [node.data.view] }
        // },
        // {
        //     block: node.data.view
        // }
    ]
})



