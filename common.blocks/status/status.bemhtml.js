block("status")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      let problemStatus;
      if (item.completed) {
        problemStatus = [
          {
            elem: "value",
            elemMods: { color: "completed" },
            content: "Выполнено",
          },
        ];
      }
      if (item.inWork) {
        problemStatus = [
          {
            elem: "value",
            elemMods: { color: "inWork" },
            content: "В работе",
          },
        ];
      }
      if (item.clarifed) {
        problemStatus = [
          {
            elem: "value",
            elemMods: { color: "clarifed" },
            content: "Разьяснено",
          },
        ];
      }

      return [
        {
          elem: "text",
          tag: "h6",
          content: "Статус:",
        },
        problemStatus,
      ];
    });
  })
);
