block("problem-content")(
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
                  "Мониторинг проблем",
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
                    elem: "text",
                    tag: "p",
                    content: item.text,
                  },
                  {
                    elem: "elements",
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
                    elem: "answer",
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
                                block: "problem-content",
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
                            block: "problem-content",
                            elem: "share",
                            content: {
                              block: "share-OC",
                              content:[
                                { 
                                  background:'#035AA6;',
                                  urlWhassap:'#',
                                  urlVk:'#',
                                  urlTelegram:'#',
                                  urlTwitter:'#',
                                  urlFacebook:'#',
                                  urlShare:'#',
                                }
                              ]
                            },
                          },
                        ],
                      },
                    ],
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
                          block: "problem-content",
                          elem: "comment-textarea",
                        },
                      },
                      {
                        block: "button-OC",
                        tag:'button',
                        mix: {
                          block: "problem-content",
                          elem: "comment-button",
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
  