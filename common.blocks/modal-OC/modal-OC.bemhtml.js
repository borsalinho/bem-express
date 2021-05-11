block('modal-OC')(

    content()(function() {
        return this.ctx.goods.map(function(item){

            return [ 
                {
                    elem:'button',
                    mix:{ 
                            block:'button-OC',
                        },
                    tag:'button',
                    attrs:{
                       type:'button',
                       'data-toggle':'modal',
                       'data-target':item.modalTarget
                    },
                    content: item.buttonName,
                },
                {
                    cls:'modal fade',
                    attrs:{
                        id:item.modalId,
                        tabindex:'-1',
                        'aria-hidden':'true'
                    },
                    content:{
                        cls:'modal-dialog',
                        content:{
                            block:'modal-OC',
                            elem:'content',
                            content:[
                                {
                                    elem:'close',
                                    tag:'button',
                                    attrs:{
                                        type:'button',
                                        'data-dismiss':'modal',
                                        'aria-label':'Close',
                                    },
                                    content:{
                                        tag:'span',
                                        attrs:{
                                            'aria-hidden':'true'
                                        },
                                        content:{
                                            tag:'img',
                                            attrs:{
                                                src:'/img/modal-OC/modal-close.png',
                                                style:'width: 12px;height: 12px;'
                                            }
                                        }
                                    }
                                },
                                {   
                                    block:'modal-OC',
                                    elem:'body',
                                    content:{
                                        block:item.modalContent
                                    }
                                }
                            ]

                            
                        }
                    }
                    
                }
            ]
        });
    }),
);