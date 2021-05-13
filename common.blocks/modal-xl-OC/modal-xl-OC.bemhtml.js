block("modal-xl-OC")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        {
          elem: "button",
          mix: { block: "link-OC" },
          tag: "a",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": item.modalTarget,
          },
          content: item.buttonName,
        },
        {
          cls: "modal fade",
          attrs: {
            id: item.modalId,
            tabindex: "-1",
            "aria-hidden": "true",
          },
          content: {
            cls: "modal-dialog modal-xl",
            content: {
              block: "modal-xl-OC",
              elem: "content",
              content: [
                {
                  elem: "close",
                  tag: "button",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close",
                  },
                  content: {
                    tag: "span",
                    attrs: {
                      "aria-hidden": "true",
                    },
                    content: {
                      tag: "img",
                      attrs: {
                        src: "/img/modal-OC/modal-close.png",
                        style: "width: 12px;height: 12px;",
                      },
                    },
                  },
                },
                {
                  block: "modal-xl-OC",
                  elem: "body",
                  content: {
                    block: item.modalContent,
                  },
                },
              ],
            },
          },
        },
      ];
    });
  })
);
