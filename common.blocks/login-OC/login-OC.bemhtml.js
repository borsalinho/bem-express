block('login-OC')({
    content: () => [
        {
            elem: 'body',
            content:
            [
                {
                    elem:'title',
                    tag:'h2',
                    content:'Вход'
                },
                {
                    elem:'input-title',
                    content:'Номер телефона',
                    tag:'h6',
                },
                {
                    elem:'input-log',
                    tag:'input',
                    attrs:{
                        placeholder:'+7('
                    }
                },
                {
                    elem:'im-no-robot',
                    content:[
                        {   
                            elem:'input',
                            tag:'input',
                            attrs:{
                                type:'checkbox'
                            }
                        },
                        {
                            tag:'span',
                            content:'Я не робот'
                        }
                    ]
                },
                {
                    elem:'button',
                    mix:{block:'button-OC'},
                    tag:'button',
                    content:'Далее'
                },
                {   
                    elem:'pol-and-lic',
                    content:[
                        {
                            tag:'a',
                            attrs:{
                                'data-toggle':'modal',
                                'data-target':'#privacyPolicyOC'
                            },
                            content:'Политика конфиденциальности'
                        },
                        
                            ' и '
                        ,
                        {   
                            tag:'a',
                            attrs:{
                                'data-toggle':'modal',
                                'data-target':'#licencePolicyOC'
                            },   
                            content:'Лицензионное соглашение'
                        }
                    ]
                },
                
            ]
        },
        {
            elem:'verify',
            content:[
                {
                    elem:'back',
                    tag:'a',
                    content:{
                        tag:'img',
                        attrs:{
                            src:'/img/login-OC/chevron-left.png'
                        }
                    }
                },
                {
                    elem:'title',
                    tag:'h2',
                    content:'Вход'
                },
                {
                    elem:'input-title',
                    content:'Введите полученный код из SMS',
                    tag:'h6',
                },
                {
                    elem:'input-log',
                    tag:'input',
                },
                {
                    elem:'repeat',
                    content:{
                        tag:'a',
                        content:'Отправить повторно'
                    }
                },
                {
                    elem:'button',
                    mix:{block:'button-OC'},
                    tag:'button',
                    content:'Войти'
                },
            ]
        }
    ]
});