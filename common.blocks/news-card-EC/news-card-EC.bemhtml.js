block("news-card-EC")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        {
          cls: "col-md-6 col-lg-4 col-xl-3",

          content: {
            elem: "card",
            mix: {
              block: "card-OC",
              mods: { mt: "20" },
            },
            attrs: {
              style:
                "background:url('"+item.background+"') center center no-repeat; background-size: cover;",
            },
            content: [
              {
                elem: "title",
                tag: "h3",
                content: item.title,
              },
              {
                elem: "bottom",
                content: [
                  {
                    elem: "data",
                    content: item.data,
                  },
                  {
                    elem: "viewed",
                    tag: "img",
                    attrs: {
                      src: "img/main-OC__actual/eye.png",
                    },
                  },
                  "565",
                ],
              },
            ],
          },
        },
      ];
    });
  })
);
