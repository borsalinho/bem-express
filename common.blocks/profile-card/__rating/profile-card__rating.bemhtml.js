block('profile-card').elem('rating')(

    content()(function() {
        return this.ctx.content.map(function(item){
            let ratingBody;
            

            if (item.noRating) {
                ratingBody = [
                    
                    {   
                        elem:'rating-text',
                        tag:'span',
                        content:'Оценить:'
                    },
                    {
                        elem:'rating-body',
                        tag:'span',
                        content:[
                            {
                                tag:'input',
                                attrs:{
                                    type:'radio',
                                    id:'star-3',
                                    name:'rating',
                                    value:'3'
                                }
                             },
                             {
                                 tag:'label',
                                 attrs:{
                                     for:'star-3',
                                     title:'Оценка *3*'
                                 }
                             },
                             {
                                 tag:'input',
                                 attrs:{
                                     type:'radio',
                                     id:'star-2',
                                     name:'rating',
                                     value:'2'
                                 }
                              },
                              {
                                  tag:'label',
                                  attrs:{
                                      for:'star-2',
                                      title:'Оценка *2*'
                                  }
                              },
                              {
                                 tag:'input',
                                 attrs:{
                                     type:'radio',
                                     id:'star-1',
                                     name:'rating',
                                     value:'1'
                                 }
                              },
                              {
                                  tag:'label',
                                  attrs:{
                                      for:'star-1',
                                      title:'Оценка *1*'
                                  }
                              },
                        ]
                    }
                ];
            }
            if (item.Rating_1) {
                ratingBody = [
                    {
                        elem:'rating-result-body',
                        tag:'span',
                        content:[
                            {
                                tag:'span',
                                cls:'active'
                            },
                            {
                                tag:'span',
                            },
                            {
                                tag:'span',
                            }
                        ]
                    }
                ];
            }
            if (item.Rating_2) {
                ratingBody = [
                    {
                        elem:'rating-result-body',
                        tag:'span',
                        content:[
                            {
                                tag:'span',
                                cls:'active'
                            },
                            {
                                tag:'span',
                                cls:'active'
                            },
                            {
                                tag:'span',
                            }
                        ]
                    }
                ];
            }
            if (item.Rating_3) {
                ratingBody = [
                    {
                        elem:'rating-result-body',
                        // tag:'span',
                        content:[
                            {
                                tag:'span',
                                cls:'active'
                            },
                            {
                                tag:'span',
                                cls:'active'
                            },
                            {
                                tag:'span',
                                cls:'active'
                            }
                        ]
                    }
                ];
            }
            

            return [
                ratingBody
            ];
        });
    }),
);