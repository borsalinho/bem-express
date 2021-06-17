block("regions-card")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        
        let status;
      if (item.selection) {
        status = [
            {
                elem:'status',
                elemMods:{ on: 'selection'},
                content:'Отбор'
            },
        ];
      }
      if (item.vote) {
        status = [
            {
                elem:'status',
                elemMods:{ on: 'the-vote'},
                content:'На голосовании'
            },
        ];
      }
      if (item.notSelected) {
        status = [
            {
                elem:'status',
                elemMods:{ not: 'selected'},
                content:'Не отобрано'
            },
        ];
      }
      if (item.selected) {
        status = [
            {
                elem:'status',
                elemMods:{ selected: 'true'},
                content:'Отобрано'
            },
        ];
      }
      if (item.approved) {
        status = [
            {
                elem:'status',
                elemMods:{ approved: 'true'},
                content:'Одобрено'
            },
        ];
      }
      if (item.inImplementation) {
        status = [
            {
                elem:'status',
                elemMods:{ in: 'implementation'},
                content:'В реализации'
            },
        ];
      }
      if (item.implemented) {
        status = [
            {
                elem:'status',
                elemMods:{ implemented: 'true'},
                content:'Реализовано'
            },
        ];
      }
      if (item.notImplemented) {
        status = [
            {
                elem:'status',
                elemMods:{ not: 'implemented'},
                content:'Не реализовано'
            },
        ];
      }
  
        return [
          {
            cls:'col-sm-6 col-lg-4 col-xl-3',
            content:{
                elem:'card',
                mix:{block:'card-OC'},
                content:[
                    
                    status,
                    {
                        elem: "data",
                        content: item.data,
                    },
                    {
                        elem:'location',
                        content:item.location
                    },
                    {
                        elem: "title",
                        tag: "h3",
                        content: item.title,
                    },
                    {
                        elem: "text",
                        tag: "p",
                        content: item.text,
                    },
                    {
                        elem: "bottom",
                        content: [
                          {
                              elem: "comment-img",
                              tag: "img",
                              attrs: {
                              src: "/img/regions-card/chatting.svg",
                              },
                          },
                          "12",
                          {
                              elem: "viewed-img",
                              tag: "img",
                              attrs: {
                              src: "/img/regions-card/eye.svg",
                              },
                          },
                          "14",
                          {
                            elem: "like-img",
                            tag: "img",
                            attrs: {
                            src: "/img/regions-card/like-heard.svg",
                            },
                          },
                          "18",
                        ]
                    },
                    ],
            } 
          },
        ];
      });
    })
  );
  