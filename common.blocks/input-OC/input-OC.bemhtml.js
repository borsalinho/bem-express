block("input-OC")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        return [
            {
                elem:'body',
                tag:'input',
                attrs:{
                    placeholder:item.placeholder
                }
            }
        ];
      });
    })
  );
  
