block("problems-card")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      let problemStatus;
      if (item.completed) {
        problemStatus = [
          {
            elem: "status",
            tag: "img",
            attrs: {
              src: "/img/main-OC__actual/checked.png",
            },
          },
        ];
      }
      if (item.inWork) {
        problemStatus = [
          {
            elem: "status",
            tag: "img",
            attrs: {
              src: "/img/main-OC__actual/nochecked.png",
            },
          },
        ];
      }
      if (item.clarifed) {
        problemStatus = [
          {
            elem: "status",
            tag: "img",
            attrs: {
              src: "/img/main-OC__actual/checked.png",
            },
          },
        ];
      }

      return [
        {
          cls: "col-sm-6 col-lg-3",

          content: {
            elem: "card",
            mix: {
              block: "card-OC",
              mods: { mt: "20" },
            },
            content: [
              {
                elem: "data",
                content: item.data,
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
                    elem: "comment-img",
                    tag: "img",
                    attrs: {
                      src: "img/main-OC__actual/comment.png",
                    },
                  },
                  "12",
                  {
                    elem: "viewed-img",
                    tag: "img",
                    attrs: {
                      src: "img/main-OC__actual/eye.png",
                    },
                  },
                  "12",
                  problemStatus,
                ],
              },
            ],
          },
        },
      ];
    });
  })
);
