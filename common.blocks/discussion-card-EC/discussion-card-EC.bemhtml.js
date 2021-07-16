block("discussion-card-EC")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        let termTo;
        if (item.term){
            termTo = [
                {
                    elem:'term',
                    content: item.term
                }
            ]
        }
        return [
          {
            cls: "col-md-6 col-lg-4 col-xl-3",
  
            content: {
              elem: "card",
              mix: {
                block: "card-OC",
                mods: { mt: "20" },
              },
              content:[
                termTo,
                {
                    elem: "data",
                    content: item.data,
                },
                {
                    elem:'from',
                    content: item.from,
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
                        
                    ],
                },
              ]
            },
          },
        ];
      });
    })
  );
  