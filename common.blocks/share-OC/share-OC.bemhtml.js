block("share-OC")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        return [
            {
                elem:'title',
                tag:'h6',
                content:'Поделиться:'
            },
            {
                elem:'icons',
                content:[
                    {
                        elem:'url',
                        tag:'a',
                        attrs:{
                            href:item.urlWhassap
                        },
                        content:{
                            elem:'icon',
                            attrs:{
                                style:'background:url("/img/share-OC/whatsapp.png") center no-repeat'+ item.background
                            },
                        }
                    },
                    {
                        elem:'url',
                        tag:'a',
                        attrs:{
                            href:item.urlVk
                        },
                        content:{
                            elem:'icon',
                            attrs:{
                                style:'background:url("/img/share-OC/vk.png") center no-repeat'+ item.background
                            },
                        }
                    },
                    {
                        elem:'url',
                        tag:'a',
                        attrs:{
                            href:item.urlTelegram
                        },
                        content:{
                            elem:'icon',
                            attrs:{
                                style:'background:url("/img/share-OC/telegram.png") center no-repeat'+ item.background
                            },
                        }
                    },
                    {
                        elem:'url',
                        tag:'a',
                        attrs:{
                            href:item.urlTwitter
                        },
                        content:{
                            elem:'icon',
                            attrs:{
                                style:'background:url("/img/share-OC/twitter.png") center no-repeat'+ item.background
                            },
                        }
                    },
                    {
                        elem:'url',
                        tag:'a',
                        attrs:{
                            href:item.urlFacebook
                        },
                        content:{
                            elem:'icon',
                            attrs:{
                                style:'background:url("/img/share-OC/facebook.png") center no-repeat'+ item.background
                            },
                        }
                    },
                    {
                        elem:'url',
                        tag:'a',
                        attrs:{
                            href:item.urlShare
                        },
                        content:{
                            elem:'icon',
                            attrs:{
                                style:'background:url("/img/share-OC/link.png") center no-repeat'+ item.background
                            },
                        }
                    },
                ]
            }
        ];
      });
    }),
  );
  