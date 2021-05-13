block("services-slider-OC")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        {
          elem: "item",
          content: {
            elem: "url",
            url: item.url,
            content: [
              {
                elem: "image",
                url: item.image,
              },
              {
                elem: "col",
                content: [
                  {
                    elem: "title",
                    content: item.title,
                  },
                  {
                    elem: "text",
                    content: item.text,
                  },
                ],
              },
            ],
          },
        },
      ];
    });
  }),
  elem("url")(
    tag()("a"),
    attrs()(function () {
      return { href: this.ctx.url };
    })
  ),

  elem("image")(
    tag()("img"),

    attrs()(function () {
      return { "data-lazy": this.ctx.url };
    })
  ),

  elem("title")(tag()("h4")),
  elem("text")(tag()("p"))
);
