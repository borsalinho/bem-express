block('upload-zone')({
    content: () => [
        {
            elem:'body',
            content:{
                elem:'core',
                content:[
                    {   
                        elem:'icon',
                        tag:'img',
                        attrs:{
                            src:'/img/upload-zone/upload.png'
                        }
                    },
                    'Перетащите файлы или',
                    {   
                        elem:'color-text',
                        tag:'span',
                        content:'выберите на вашем устройстве'
                    }
                ]
            }
        }
    ]
});