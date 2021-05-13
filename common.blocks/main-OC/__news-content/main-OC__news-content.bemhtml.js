block("main-OC").elem("news-content")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        {
          elem: "news-card",
          mix: {
            block: "card-OC",
          },
          content: [
            {
              elem: "news-top",
              tag: "p",
              content: [
                "Новости",
                {
                  elem: "news-data",
                  tag: "span",
                  content: item.data,
                },
              ],
            },
            {
              elem: "news-body",
              content: [
                {
                  elem: "news-title",
                  tag: "h2",
                  content: item.title,
                },
                {
                  elem: "news-img-body",
                  content: {
                    elem: "news-img",
                    tag: "img",
                    attrs: {
                      src: item.imgUrl,
                    },
                  },
                },
                {
                  elem: "news-source",
                  content: [
                    "Источник",
                    {
                      elem: "news-source-url",
                      tag: "a",
                      attrs: {
                        href: "#",
                      },
                      content: "ссылка на Источник",
                    },
                  ],
                },
                {
                  elem: "news-text",
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
                  elem: "news-comments",
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
                        block: "main-OC",
                        elem: "news-comment-textarea",
                      },
                    },
                    {
                      block: "button-OC",
                      mix: {
                        block: "main-OC",
                        elem: "problem-comment-button",
                      },
                      content: "Отправить",
                    },
                    {
                      elem: "news-url",
                      content: [
                        "Ссылка",
                        {
                          elem: "news-source-url",
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
