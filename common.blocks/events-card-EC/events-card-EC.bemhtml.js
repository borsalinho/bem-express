block("events-card-EC")(
    content()(function () {
      return this.ctx.content.map(function (item) {
  
        return [
          {
            cls: "col-md-6 col-lg-4",
  
            content: {
              elem: "card",
              mix: {
                block: "card-OC",
                mods: { mt: "20" },
              },
              content: [
                  {
                      elem:'top',
                      content:{
                          elem:'top-img',
                          attrs:{
                              style:'background:url('+item.img+');background-size: cover;background-position: center center;'
                          }
                      }
                  },
                  {
                      elem:'body',
                      content:[
                        {
                            elem: "data",
                            content: item.data,
                        },
                        {
                            elem: "format",
                            content:'Формат мероприятия: '+ item.format,
                        },
                        {
                            elem: "position",
                            content:item.position,
                        },
                        {
                            elem: "title",
                            tag: "h3",
                            content: item.title,
                        },
                        {
                            elem: "text",
                            tag: "p",
                            content: item.text,
                        },
                        {
                            elem: "bottom",
                            content: [
                                {
                                    elem: "viewed-img",
                                    tag: "img",
                                    attrs: {
                                        src: "img/events-card-EC/eye.png",
                                    },
                                },
                                "12",
                                {
                                    elem: "comment-img",
                                    tag: "img",
                                    attrs: {
                                        src: "img/events-card-EC/comment.png",
                                    },
                                },
                                "12",
                                {
                                    elem: "like-img",
                                    tag: "img",
                                    attrs: {
                                        src: "img/events-card-EC/like.png",
                                    },
                                },
                                "12",
                                {
                                    elem: "people-img",
                                    tag: "img",
                                    attrs: {
                                        src: "img/events-card-EC/people.png",
                                    },
                                },
                                "12",
                            ],
                        },
                      ]
                  }
                
              ],
            },
          },
        ];
      });
    })
  );
  