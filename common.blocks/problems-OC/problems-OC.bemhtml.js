block('problems-OC')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            
            let statusMark;
            if(item.checked){
                statusMark= [{
                        elem:'status',
                        tag:'img',
                        attrs:{
                            src:'/img/main-OC__actual/checked.png'
                        }
                    }
                ]
            }
            if(item.noChecked){
                statusMark= [{
                    elem:'status',
                    tag:'img',
                    attrs:{
                        src:'/img/main-OC__actual/nochecked.png'
                    }
                    }
                ]
            }

            // let marginTop;
            // if(item.mT){
            //     marginTop = ['elem:"asdasd"']
            // }

            return [ 
                {
                    cls:'col-sm-6 col-lg-3',
                    elem:item.mt,
                    // marginTop,
                    content:{
                        elem:'card',
                        mix:{block:'card-OC'},
                        content:[                        
                            {   
                                elem:'data',
                                content:item.data
                            },
                            {
                                elem:'title',
                                content:item.title
                            },
                            {
                                elem:'text',
                                content:item.text
                            },
                            {
                                elem:'bottom',
                                content:[
                                    {
                                        elem:'comment-img',
                                        tag:'img',
                                        attrs:{
                                            src:'img/main-OC__actual/comment.png'
                                        }
                                    },
                                    '12' 
                                    ,
                                    {
                                        elem:'viewed-img',
                                        tag:'img',
                                        attrs:{
                                            src:'img/main-OC__actual/eye.png'
                                        }
                                    },
                                    '12'   
                                    ,
                                    statusMark,
                                ]
                            }
                        ]
                    }
                }
                   
            ]
        });
    }),
);