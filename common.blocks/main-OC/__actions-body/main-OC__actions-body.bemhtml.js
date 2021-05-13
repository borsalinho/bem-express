block("main-OC").elem("actions-body")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        {
          elem: "action",
          content: [
            {
              elem: "action-text",
              content: item.text,
            },
            {
              elem: "action-category",
              content: [
                {
                  tag: "span",
                  elem: "category-text",
                  content: item.category,
                },
                {
                  tag: "span",
                  elem: "category-img",
                },
              ],
            },
          ],
        },
      ];
    });
  })
);
