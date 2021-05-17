block("select-OC")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        return [
            {
                elem:'body',
                tag:'select',
                attrs:{
                    placeholder:item.placeholder
                }
            }
        ];
      });
    })
  );
  
