block('footer').content()(function() {
    return this.ctx.content.map(function (item) {
        return [
            {
                cls: "container",
                content: [
                  { 
                    elem:'row',
                    cls: "row",
                    content: [
                      {
                        elem:'col',
                        elemMods:{mb:'md-20'},
                        cls: "col-xl-2 col-md-3",
                        content: [
                          {
                            cls: "row",
                            content: [
                              {   
                                block:'footer',
                                elem:'col',
                                cls: "col-md-12 col-5",
                                content:{
                                    block:item.logoBlock,
                                    mix: {
                                        block: "footer",
                                        elem: "elem",
                                    },
                                }
                              },
                              {
                                cls: "col-md-12 col-7 justify-content-end justify-content-md-start d-flex",
                                content: {
                                  block: "logo-messangers-OC",
                                  mix: {
                                    block: "footer",
                                    elem: "elem",
                                  },
                                  content: [
                                    {
                                      tag: "a",
                                      elem: "border",
                                      attrs: {
                                        href: "https://www.instagram.com/oneclickyakutia/",
                                      },
                                      content: {
                                        tag: "img",
                                        attrs: {
                                          src: "/img/logo-messangers-OC/logo-inst-blue.png",
                                          alt: "Логотип OneClick Yakutia в Instagram",
                                          title: "Страница OneClick Yakutia в Instagram",
                                        },
                                      },
                                    },
                                    {
                                      tag: "a",
                                      elem: "border",
                                      attrs: {
                                        href: "https://t.me/one_click_yakutia",
                                      },
                                      content: {
                                        tag: "img",
                                        attrs: {
                                          src: "/img/logo-messangers-OC/logo-telegramm-blue.png",
                                          alt: "Логотип OneClick Yakutia в Twitter",
                                          title: "Страница OneClick Yakutia в Twitter",
                                        },
                                      },
                                    },
                                    {
                                      tag: "a",
                                      elem: "border",
                                      attrs: {
                                        href: "https://dnevniki.ykt.ru/OneClickYakutia",
                                      },
                                      content: {
                                        tag: "img",
                                        attrs: {
                                          src: "/img/logo-messangers-OC/dnevniki-blue.png",
                                          alt: "Логотип OneClick Yakutia в VK",
                                          title: "Страница OneClick Yakutia в VK",
                                          style:"margin-left:2px;margin-top:1px"
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            block: "link-OC",
                            attrs: {
                              href: "tel:+79142707113",
                            },
                            content: "+7 (914)-2-707-113",
                          },
                          {
                            tag: "br",
                          },
                          {
                            block: "link-OC",
                            attrs: {
                              href: "mailto:info@yakutia.click",
                            },
                            content: "info@yakutia.click",
                          },
                          {
                            tag: "br",
                          },
                          {
                            block: "link-OC",
                            attrs: {
                              href: "https://yandex.ru/maps/-/CGtbBGpy",
                            },
                            content: "проспект Ленина, 1",
                          },
                        ],
                      },
                      { 
                        elem:'col',
                        elemMods:{mb:'md-20'},
                        cls: "col-xl-5 col-md-5",
                        content: [
                          {
                            block: "footer",
                            elem: "elem",
                            content: {
                              block: "link-OC",
          
                              attrs: {
                                href: "https://www.sakha.gov.ru/",
                              },
                              content: "Администрация Главы и Правительства РС(Я)",
                            },
                          },
                          {
                            block: "footer",
                            elem: "elem",
                            content: {
                              block: "link-OC",
                              attrs: {
                                href: "http://iltumen.ru/",
                              },
                              content:
                                "Государственное Собрание (Ил Тумэн) Республики Саха (Якутия)",
                            },
                          },
                          {
                            block: "footer",
                            elem: "elem",
                            content: {
                              block: "link-OC",
                              attrs: {
                                href: "https://e-yakutia.ru",
                              },
                              content: "Портал государственных и муниципальных услуг",
                            },
                          },
                          {
                            block: "",
                            content: {
                              block: "link-OC",
                              attrs: {
                                href: "http://src-sakha.ru/",
                              },
                              content:
                                "Центр стратегических исследований при Главе Республики Саха (Якутия)",
                            },
                          },
                          {
                            block: "link-OC",
                            attrs: {
                              href: "mailto:src@sakha.gov.ru",
                            },
                            content: "src@sakha.gov.ru",
                          },
                        ],
                      },
                      { 
                        elem:'col',
                        cls: "col-xl-5 col-md-4",
                        content: [
                          {
                            block: "footer",
                            elem: "elem",
                            content: {
                              block: "link-OC",
                              attrs: {
                                href: "https://vshim.ru/",
                              },
                              content:
                                "Высшая школа инновационного менеджмента при Главе Республики Саха (Якутия)",
                            },
                          },
                          {
                            block: "footer",
                            elem: "elem",
                            content: {
                              block: "link-OC",
                              attrs: {
                                href: "http://tpykt.ru/",
                              },
                              content: "Технопарк «Якутия»",
                            },
                          },
          
                          {
                            block: "footer",
                            elem: "elem",
                            content: {
                              block: "modal-xl-OC",
                              content: [
                                {
                                  buttonName: "Политика конфидиальности",
                                  modalTarget: "#privacyPolicyOC",
                                  modalId: "privacyPolicyOC",
                                  modalContent: "privacy-policy-OC",
                                },
                              ],
                            },
                          },
          
                          {
                            block: "footer",
                            elem: "elem",
                            content: {
                              block: "modal-xl-OC",
                              content: [
                                {
                                  buttonName: "Лицензионное соглашение",
                                  modalTarget: "#licencePolicyOC",
                                  modalId: "licencePolicyOC",
                                  modalContent: "license-agreement-OC",
                                },
                              ],
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
            },
        ];
    }
    
    
)});