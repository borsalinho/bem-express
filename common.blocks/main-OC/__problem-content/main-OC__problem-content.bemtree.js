block("main-OC").elem("problem-content")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        {
          elem: "problem-card",
          mix: {
            block: "card-OC",
          },
          content: [
            {
              elem: "problem-top",
              tag: "p",
              content: [
                "Мониторинг проблем",
                {
                  elem: "problem-data",
                  tag: "span",
                  content: item.data,
                },
              ],
            },
            {
              elem: "problem-body",
              content: [
                {
                  elem: "problem-title",
                  tag: "h2",
                  content: item.title,
                },
                {
                  elem: "problem-text",
                  tag: "p",
                  content: item.text,
                },
                {
                  elem: "problem-elements",
                  content: [
                    {
                      elem: "elements-title",
                      tag: "h6",
                      content: "Вложения",
                    },
                    {
                      elem: "elem",
                    },
                  ],
                },
                {
                  elem: "problem-answer",
                  content: [
                    {
                      elem: "answer-title",
                      tag: "h6",
                      content: "Ответ администратора",
                    },
                    {
                      elem: "answer-text",
                      tag: "p",
                      content: item.answer,
                    },
                  ],
                },
                {
                  elem: "sub-and-share",
                  content: [
                    {
                      cls: "row",
                      content: [
                        {
                          cls: "col-md-6 d-flex",
                          content: [
                            {
                              block: "main-OC",
                              elem: "subscribe",
                              content: {
                                block: "subscribe",
                              },
                            },
                            {
                              block: "status",
                              content: [
                                {
                                  // completed:true,
                                  inWork: true,
                                  // clarifed:true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          cls: "col-md-6 d-flex justify-content-md-end",
                          block: "main-OC",
                          elem: "share",
                          content: {
                            block: "share-OC",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  elem: "problem-comments",
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
                        elem: "problem-comment-textarea",
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
