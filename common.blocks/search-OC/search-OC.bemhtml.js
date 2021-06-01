block("search-OC")(
    tag()('span'),
    content()(function () {
      return this.ctx.content.map(function (item) {
        return [
            {   
                elem:'icon',
                tag:"img",
                attrs:{
                    src:'/img/header-OC/header-OC-search.png'
                }
            },
            {   
                elem:'input',
                tag:'input',
                attrs:{
                    placeholder:item.placeholder
                }
            }
        ];
      });
    })
  );