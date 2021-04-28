block('main-OC').elem('comments-body')(

    content()(function() {
        return this.ctx.goods.map(function(item){
            return [   
                
                    {
                        elem:'comment',
                        content:[
                            {
                                elem:'comment-name',
                                content:item.name
                            },
                            {
                                elem:'comment-text',
                                content:item.text
                            },
                            {   
                                
                                elem:'comment-category',
                                content:[
                                    {   
                                        tag:'span',
                                        elem:'category-text',
                                        content:item.category
                                    },
                                    {
                                        tag:'span',
                                        elem:'category-img'
                                    }
                                ]
                            }
                        ]
                    },
            ]
        });
    }),
);