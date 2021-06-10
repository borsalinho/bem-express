block("contests-OC").elem("comp-slider")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        return [
          {
            cls:'col-xl-4 col-md-6 mb-4',
            content:{
              elem:'slide',
              mix:{block:'card-OC'},
              attrs:{
                  style:'background:url('+item.img+') right 20px bottom 20px no-repeat'
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
          }
          
        ];
      });
    })
  );
  