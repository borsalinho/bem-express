block("news-content")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        {
          elem: "card",
          mix: {
            block: "card-OC",
          },
          content: [
            {
              elem: "top",
              tag: "p",
              content: [
                "Новости",
                {
                  elem: "data",
                  tag: "span",
                  content: item.data,
                },
              ],
            },
            {
              elem: "body",
              content: [
                {
                  elem: "title",
                  tag: "h2",
                  content: item.title,
                },
                {
                  elem: "img-body",
                  content: {
                    elem: "img",
                    tag: "img",
                    attrs: {
                      src: item.imgUrl,
                    },
                  },
                },
                {
                  elem: "source",
                  content: [
                    "Источник",
                    {
                      elem: "source-url",
                      tag: "a",
                      attrs: {
                        href: "#",
                      },
                      content: "ссылка на Источник",
                    },
                  ],
                },
                {
                  elem: "text",
                  tag: "p",
                  content: item.text,
                },
                {
                  cls: " d-flex justify-content-md-end",
                  content: {
                    block: "share-OC",
                  },
                },
                {
                  elem: "comments",
                  content: [
                    {
                      block: "comments-OC",
                      content: [
                        {
                          elem: "title",
                          tag: "h6",
                          content: "Комментарии",
                        },
                        {
                          elem: "comments",
                          commentsContent: [
                            {
                              avatarUrl: "/img/actual-info-OC/zatu4ka2.jpg",
                              userName: "Зубенко Михаил Петрович",
                              userText:
                                "Вор в законе, Шумиловка городок.Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок. Вор в законе, Шумиловка городок",
                            },
                            {
                              avatarUrl: "/img/comments-OC/avatar_plug.png",
                              userName:
                                "Зубенко Михаил Петрович Зубенко Михаил Петрович Зубенко Михаил Петрович",
                              userText: "Вор в законе, Шумиловка городок",
                            },
                            {
                              avatarUrl: "/img/comments-OC/avatar_plug.png",
                              userName: "Зубенко Михаил Петрович",
                              userText: "Вор в законе, Шумиловка городок",
                            },
                            {
                              avatarUrl: "/img/comments-OC/avatar_plug.png",
                              userName: "Зубенко Михаил Петрович",
                              userText: "Вор в законе, Шумиловка городок",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      block: "comment-textarea-OC",
                      mix: {
                        block: "news-content",
                        elem: "comment-textarea",
                      },
                    },
                    {
                      block: "button-OC",
                      mix: {
                        block: "news-content",
                        elem: "comment-button",
                      },
                      content: "Отправить",
                    },
                    {
                      elem: "url",
                      content: [
                        "Ссылка",
                        {
                          elem: "source-url",
                          tag: "a",
                          attrs: {
                            href: "#",
                          },
                          content: "ссылка на новость",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
    });
  })
);
