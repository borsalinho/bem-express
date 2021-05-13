block('header-OC').elem('drop-list')({
    content: () => [
        
        {   
            elem:'drop-list-item',
            content:[
                {
                    block:'link-OC',
                    attrs:{
                        href:'/profile'
                    },
                    content:[
                        {
                            tag:'img',
                            attrs:{
                                src:'/img/header-OC/header-OC-profile-user.png'
                            }
                        },
                        {   
                            tag:'span',
                            content:'Мой профиль'
                        }
                    ]
                }
                
            ]
            
        },
        {   
            elem:'drop-list-item',
            content:[
                {
                    block:'link-OC',
                    attrs:{
                        href:'#'
                    },
                    content:[
                        {
                            tag:'img',
                            attrs:{
                                src:'/img/header-OC/header-OC-profile-mail.png'
                            }
                        },
                        {   
                            tag:'span',
                            content:'Мои обращения'
                        }
                    ]
                }
                
            ]
            
        },{   
            elem:'drop-list-item',
            content:[
                {
                    block:'link-OC',
                    attrs:{
                        href:'#'
                    },
                    content:[
                        {
                            tag:'img',
                            attrs:{
                                src:'/img/header-OC/header-OC-profile-bookmark.png'
                            }
                        },
                        {   
                            tag:'span',
                            content:'Мои подписки'
                        }
                    ]
                }
                
            ]
            
        },{   
            elem:'drop-list-item',
            content:[
                {
                    block:'link-OC',
                    attrs:{
                        href:'#'
                    },
                    content:[
                        {
                            tag:'img',
                            attrs:{
                                src:'/img/header-OC/header-OC-profile-log-out.png'
                            }
                        },
                        {   
                            tag:'span',
                            content:'Выйти'
                        }
                    ]
                }
            ]
        },
        
    ]
});
