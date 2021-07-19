block("problems-EC")({
    content: () => [
      
        {
            elem:'a',
            tag:'section',
            content:{
                cls:'container',
                content:{
                    elem:'row',
                    cls:'row',
                    content:[
                        {   
                            elem:'left-col',
                            cls:'col-xl-7',
                            content:[
                                {
                                    elem:'a-title',
                                    tag:'h1',
                                    content:'Сохраните окружающий мир Республики Саха'
                                },
                                
                                {   
                                    elem:'a-button',
                                    mix:{
                                        block:'button-EC'
                                    },
                                    tag:'button',
                                    attrs:{
                                        href:'#'
                                    },
                                    content:'Оставить заявку'
                                }
                            ]
                        },
                        {
                            cls:'col-xl-5 d-flex justify-content-end align-items-end',
                            content:{
                                elem:'a-img',
                                tag:'img',
                                attrs:{
                                    src:'/img/main-EC/banner-img.png'
                                }
                            }
                        }
                    ]
                    
                }
                
            }
        },
        {
            elem:'b',
            tag:'section',
            content:{
                cls:'container',
                content:[
                        {
                            elem:'b-title',
                            tag:'h2',
                            content:'Экологические проблемы'
                        },
                        {
                            elem:'b-row',
                            cls:'row',
                            content:[
                                {
                                    cls:'col-md-4',
                                    content:{
                                        elem:'region-select',
                                        mix:{block:'selectize'},
                                        js:true,
                                        tag:'select',
                                        attrs:{
                                        id:'problems-EC__region'
                                        },
                                        content:[
                                        {
                                            tag:'option',
                                            attrs:{
                                            value:''
                                            },
                                            content:''
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 11'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 22'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 33'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 333'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 3333'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 33333'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 3334433'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 334434433'
                                        },
                                        ]
                                    }
                                },
                                {
                                    cls:'col-md-4',
                                    content:{
                                        elem:'settlement-select',
                                        mix:{block:'selectize'},
                                        js:true,
                                        tag:'select',
                                        attrs:{
                                        id:'problems-EC__settlement'
                                        },
                                        content:[
                                            {
                                                tag:'option',
                                                attrs:{
                                                value:''
                                                },
                                                content:'Населенный пункт'
                                            },
                                            {
                                                tag:'option',
                                                content:'вариант 1'
                                            },
                                            {
                                                tag:'option',
                                                content:'вариант 2'
                                            },
                                            {
                                                tag:'option',
                                                content:'вариант 3'
                                            },
                                        ]
                                    }
                                },
                                {
                                    cls:'col-md-4',
                                    content:{
                                        elem:'category-select',
                                        mix:{block:'selectize'},
                                        js:true,
                                        tag:'select',
                                        attrs:{
                                        id:'problems-EC__category'
                                        },
                                        content:[
                                        {
                                            tag:'option',
                                            attrs:{
                                            value:''
                                            },
                                            content:'Категория'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 2'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 2'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 1'
                                        },
                                        {
                                            tag:'option',
                                            content:'вариант 2'
                                        },
                                        ]
                                    }
                                }
                                
                            ]
                        }
                ]
            }
        }
                    
    ],
  });
  