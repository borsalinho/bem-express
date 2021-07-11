block('404')({
    content: () => [
        {   
            elem:'a',
            tag:'section',
            content:{
                cls:'container',
                content:{
                    cls:'d-flex',
                    elem:'div',
                    content:{
                        cls:'my-auto mx-auto',
                        elem:'block',
                        content:{
                            tag:'h1',
                            content:'Упс, что-то пошло не так.'
                        }
                    }
                    
                }
            }
        },
        
    ]
});