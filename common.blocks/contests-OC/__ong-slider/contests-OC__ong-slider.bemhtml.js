block("contests-OC").elem("ong-slider")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        return [
          {
            elem:'slide',
            attrs:{
                style:'background:url('+item.img+') right 20px bottom 10px no-repeat'
            },
            content:[
                {
                    elem:'slide-title',
                    tag:'h6',
                    content:item.title
                },
                {
                    elem:'slide-text',
                    tag:'p',
                    content:item.text
                },
                {
                    elem:'slide-button',
                    mix:'button-OC',
                    tag:'button',
                    attrs:{
                        href:item.url
                    },
                    content:'Подбробнее'
                }
            ]
        },
        ];
      });
    })
  );
  