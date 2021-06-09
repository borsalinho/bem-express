block("header-OC")({
  content: () => [
    {
      cls: "container d-flex align-items-center position-relative",
      content: [
        {
          block: "header-OC",
          elem: "logo",
          content: {
            block: "logo-OC",
          },
        },
        {
          block: "header-OC",
          elem: "menu",
          tag: "nav",
          content: {
            elem: "menu-list",
            tag: "ul",
            content: [
              {
                elem: "menu-list-item",
                tag: "li",
                content: {
                  block: "link-OC",
                  content: "О платформе",
                  attrs: {
                    href: "/about",
                  },
                },
              },
              {
                elem: "menu-list-item",
                tag: "li",
                content: {
                  tag: "a",
                  content: "Мониторинг проблем",
                  attrs: {
                    href: "/problems",
                  },
                },
              },
              {
                elem: "menu-list-item",
                tag: "li",
                content: {
                  tag: "a",
                  content: "Новости",
                  attrs: {
                    href: "/news",
                  },
                },
              },
              {
                elem: "menu-list-item",
                tag: "li",
                content: {
                  tag: "a",
                  content: "Конкурсы",
                },
              },
              {
                elem: "init-slider",
                tag: "li",
                mix: [
                  {
                    elem: "menu-list-item",
                    elemMods: { mr: "10" },
                  },
                ],
                js: true,
                content: [
                  {
                    tag: "a",
                    content: "Сервисы",
                  },
                  {
                    tag: "span",
                    content: {
                      elem: "arrow",
                      tag: "img",
                      attrs: {
                        src: "img/header-OC/services-arrow.svg",
                      },
                    },
                  },
                ],
              },
              {
                elem: "menu-list-item",
                mix: [{ elem: "pulsar-button" }],
                tag: "li",
                content: {
                  tag: "a",
                  content: "Создать заявку",
                },
              },
            ],
          },
        },
        {
          block: "header-OC",
          elem: "buttons",
          content: [
            {
              elem: "search",
              tag: "span",
              js: true,
              content: [
                {
                  elem: "search-img",
                  tag: "img",
                  attrs: {
                    src: "/img/header-OC/header-OC-search.png",
                  },
                },
                {
                  elem: "search-input",
                  tag: "input",
                  js: true,
                  attrs: {
                    type: "text",
                    placeholder: "Поиск",
                  },
                },
              ],
            },
            {
              elem: "margin",
            },

            {
              elem: "profile",
              content: {
                block: "dropdown-click-OC",
                js: true,
                content: {
                  block: "header-OC",
                  elem: "drop-list",
                  mix: [
                    {
                      block: "dropdown-click-OC",
                      elem: "item",
                    },
                    {
                      block: "card-OC",
                    },
                  ],
                },
              },
            },

            // {
            //     block:'modal-OC',
            //     mix:{
            //         block:'header-OC',
            //         elem:'login',
            //     },
            //     content:[
            //         {
            //             buttonName:'Вход',
            //             modalTarget:'#login',
            //             modalId:'login',
            //             modalContent:'login-OC',
            //         }
            //     ]
            // }
          ],
        },
        {
          elem: "services",
          content: {
            block: "services-slider-header-OC",
            js: true,
            content: [
              {
                image: "/img/header-services-OC/services-abiture.png",
                text: "Родные города и селы 1",
                url: "/about",
              },
              {
                image: "/img/header-services-OC/services-abiture.png",
                text: "Родные города и селы 2",
              },
              {
                image: "/img/header-services-OC/services-abiture.png",
                text: "Родные города и селы 3",
              },
              {
                image: "/img/header-services-OC/services-abiture.png",
                text: "Родные города и селы 4",
              },
              {
                image: "/img/header-services-OC/services-abiture.png",
                text: "Родные города и селы 5",
              },
              {
                image: "/img/header-services-OC/services-abiture.png",
                text: "Родные города и селы 6",
              },
              {
                image: "/img/header-services-OC/services-abiture.png",
                text: "Родные города и селы 7",
              },
            ],
          },
        },
      ],
    },
  ],
});
