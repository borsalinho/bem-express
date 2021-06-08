block('problems-OC')({
    content: () => [
        {   
            elem:'a',
            content:{
                elem:'a-content',
                cls:'container',
                content:[
                    {
                        elem:'category',
                        content:[
                            {
                                elem:'category-title',
                                tag:'h2',
                                content:'Категории'
                            },
                            {
                                block:'search-OC',
                                content:[
                                    {
                                        placeholder:'Поиск по категориям'
                                    }
                                ]
                            }
                        ]
                        
                    },
                    {
                        elem:'menu',
                        js:true,
                        content:[
                            {
                                img:'img/problems-OC/car.png',
                                text:'Автомобильные дороги',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/park.png',
                                text:'Благоустройство',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/park-2.png',
                                text:'Дворы и территории общего пользования',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/medic.png',
                                text:'Медицина',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/tree.png',
                                text:'Многоквартирные дома',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/delete.png',
                                text:'Мусор',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/ruler.png',
                                text:'Образование',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/bus.png',
                                text:'Общественный транспорт',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/russia.png',
                                text:'Плата за ЖКУ',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/tower.png',
                                text:'Связь и телевидение',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/shield.png',
                                text:'Социальное обслуживание и защита',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/desktop.png',
                                text:'Портал услуг',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/forest.png',
                                text:'Лесное хозяйство',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/stock.png',
                                text:'Экономика и бизнес',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/faucet.png',
                                text:'Водоснабжение',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/tools.png',
                                text:'Газоснабжение',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/dashboard.png',
                                text:'Информационные технологии',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/church.png',
                                text:'Культура',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/binder.png',
                                text:'МФЦ “Мои документы”',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/plant.png',
                                text:'Природа, Экология',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/crane.png',
                                text:'Строительство',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/document.png',
                                text:'Иное',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/boiler.png',
                                text:'Теплоснабжение',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/shop.png',
                                text:'Торговля',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/gym.png',
                                text:'Физическая культура и спорт',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/risk.png',
                                text:'Электроснабжение',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/paw.png',
                                text:'Ветеринария',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            
                            {
                                img:'img/problems-OC/cafe.png',
                                text:'Общественное питание',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/park-3.png',
                                text:'Парки культуры и отдыха',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/dead.png',
                                text:'Погребение и похоронное дело ',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            {
                                img:'img/problems-OC/wheat.png',
                                text:'Сельское хозяйство и охота',
                                icon:'img/problems-OC/chevron-bottom.png'
                            },
                            
                        ]
                    },
                    {
                        elem:'tags',
                        content:[
                            // Автомобильные дороги
                            {
                                elem:'tags-item',
                                elemMods:{visible:'true'},
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#Дорожная инфраструктура'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Дорожная разметка'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Дорожные знаки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Дорожные работы'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Иное'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Обочины'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Организация дорожного движения'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Освещение дорог'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Остановки общественного транспорта'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Парковки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Пещеходные переходы'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Ремонт дорог'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Светофоры'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Среда для инвалидов'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Тротуары'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Уборка снега'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Ямы, выбоины'
                                    }
                                ]
                            },
                            // Благоустройство
                            {
                                elem:'tags-item',
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#Внутридворовая инфраструктура для отдыха'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Внутридворовые дорожная инфраструктура'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Внутридвороые дорожные покрытия'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Дворовая территория'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Детские площадки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Зеленые насаждения'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Иное'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Контейнерные площадки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Общественные территории и пешеходные зоны'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Отсутствие наружного освещения'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Парки, скверы'
                                    },
                                ]
                            },
                            // Дворы и территории общего пользования
                            {
                                elem:'tags-item',
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#Брошенный автомобиль'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Вырубка деревьев'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Детские площадки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Зеленые насаждения'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Иное'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Канализационные люки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Пешеходная инфраструктура'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Размещение рекламы'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Самострой'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Уборка снега'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Угроза падения льда с крыш'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Уличное освещение'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Ямы, выбоины'
                                    },
                                ]
                            },
                            // медицина
                            {
                                elem:'tags-item',
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#Аптеки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Безбарьерная среда для инвалидов'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Врачи-специалисты'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Вызов врача на дом'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Вызов скорой помощи'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Дезинфекция'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Запись на приём к врачу'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Иное'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Консультация'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Коррупция в здравоохранении'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Лекарственные препараты'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Льготы'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Медицинская карта'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Медицинское оборудование'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Молочная кухня'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Нарушение нормативов/правил'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Прикрепление к медицинской организации'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Содержание помещений медицинских учреждений'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Справочные службы'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Строительство учреждений'
                                    },
                                ]
                            },
                            // Многоквартирные дома
                            {
                                elem:'tags-item',
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#Аварийное состояние'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Авария на трубопроводе'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Антенна'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Вентиляция'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Внутридомовое имущество'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Внутридомовые коммуникации'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Водоснабжение'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Газопровод'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Засор общедомовых систем'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Иное'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Информирование'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Инфраструктура для инвалидов'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Кадастровый учет'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Капитальный ремонт'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Кровля'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Лифт'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Места общего пользования'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Незаконное проживание'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Некорректное поведение сотрудников УК'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Общедомовые приборы учета'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Объемы потребления коммунальных услуг'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Оплата коммунальных услуг'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Освещение'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Отопление'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Отсутствие контакта с диспетчерскими службами УК'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Перепланировка'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Подвалы и чердаки'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Пожарная сигнализация'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Реклама'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Ремонт подъезда'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Стены и фасады'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#ТСЖ, ЖСК, ТСН'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Уборка'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Управляющие организации'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Электрооборудование'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Электроснабжение'
                                    },
                                    
                                ]
                            },
                            // Мусор
                            {
                                elem:'tags-item',
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#Внедрение раздельного накопления отходов'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Закрытие или приостановление деятельности полигона'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Иное'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Контейнерные площадки, мусорные контейнеры'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Несоблюдение экологических требований при обращении с отходами'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Предложения по обращению с отходами'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Свалки мусора в лесу'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Свалки мусора во дворах'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Свалки мусора на дорогах'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Строительство объектов по обращению с отходами'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Территориальная схема обращения с отходами'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Уборка мусора во дворах'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Уборка мусора на дорогах'
                                    },
                                ]
                            },
                            // Образование
                            {
                                elem:'tags-item',
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#Безопасность образовательных организаций'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Вопросы функционирования образовательных организаций'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Выплаты обучающимся в образовательных организациях'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Заболевания в образовательных организациях'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Заработная плата и социальные выплаты в образовательных организациях'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Защита прав детей'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Иное'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Итоговая аттестация в образовательных организациях'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Лицензирование образовательных организаций'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Нарушения при проведении экзаменов'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Незаконный сбор денег в образовательных организациях'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Некорректное поведение сотрудника образовательной организации'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Оплата за услуги образовательных организаций'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Питание в образовательных организациях'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Поступление в образовательные организации'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Создание условий для образования детей с инвалидностью'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Трудоустройство в образовательную организацию'
                                    },
                                    {
                                        elem:'tag-name',
                                        content:'#Электронный дневник'
                                    },
                                    
                                ]
                            },
                            // Общественный транспорт
                            {
                                elem:'tags-item',
                                content:[
                                    {
                                        elem:'tag-name',
                                        content:'#'
                                    },
                                    
                                ]
                            },
                        ]
                    }
                ]
            }
        },
        {
            elem:'b',
            content:{
                elem:'b-content',
                cls:'container',
                content:[
                    {
                        elem:'recent-appeals',
                        content:[
                            {
                                elem:'r-a-top',
                                cls:'row',
                                content:[
                                    {
                                        cls:'col-6 d-flex justify-content-start',
                                        content:{
                                            elem:'r-a-title',
                                            tag:'h1',
                                            content:'Последние обращения'
                                        },
                                    },
                                    {
                                        cls:'col-6 d-flex justify-content-end align-items-start',
                                        content:{
                                            elem:'r-a-create',
                                            tag:'button',
                                            content:'Создать заявку'
                                        }
                                    }
                                    
                                ]
                            },
                            
                            {
                                elem:'r-a-body',
                                content:{
                                    block: "problems-card",
                                    cls: "row",
                                    content: [
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title:
                                            "По Пояркова 3/1 во дворах сломали дорожное полотно. По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться? Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            // completed:true,
                                            inWork: true,
                                            // clarifed:true,
                                        },
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title: "По Пояркова 3/1 во ",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            completed: true,
                                            // inWork:true,
                                            // clarifed:true,
                                        },
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title: "По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            // completed:true,
                                            // inWork:true,
                                            clarifed: true,
                                        },
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title: "По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            // completed:true,
                                            inWork: true,
                                            // clarifed:true,
                                        },
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title:
                                            "По Пояркова 3/1 во дворах сломали дорожное полотно. По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться? Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            // completed:true,
                                            inWork: true,
                                            // clarifed:true,
                                        },
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title: "По Пояркова 3/1 во ",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            completed: true,
                                            // inWork:true,
                                            // clarifed:true,
                                        },
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title: "По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            // completed:true,
                                            // inWork:true,
                                            clarifed: true,
                                        },
                                        {
                                            data: "29 июня 2020, 07:48",
                                            title: "По Пояркова 3/1 во дворах сломали дорожное полотно.",
                                            text: "Просим оказать содействие в ремонт. Во дворе свалка и не вывозят мусор куда жаловаться?",
                                            // completed:true,
                                            inWork: true,
                                            // clarifed:true,
                                        },
                                    ],
                                }
                                
                            }
                        ]
                    }
                ]
            }
        },
        {
            elem:'c',
            content:{
                elem:'c-content',
                cls:'container',
                content:{
                    block:'pagination-OC'
                }
            }
        },
        // временный контейнер 
        {
            cls:'container',
            content:
            // для открытых карточек
            {
                block:'problem-content',
                content:[
                    {
                        data: "30 декабря 2020",
                        title: "Детская площадка",
                        text: "Здравствуйте. Вот такая у нас площадка по улице Хабарова 19/3 и хабарова 19/4. В центре площадки большой камень о который боишься как бы ребёнок не споткнулся. Очень просим помощи вашей. Наша управа никак не реагирует.",
                        answer:
                          "Полностью с вами согласна Илларион Опять с начала зимнего сезона ни разу не чистили бордюры по ул.Ломоносова, опять это не дорога, а желоб для бобслея. Убедительно просим напр... Каждый год одно  и то же!",
                      },
                ]
            }
        }
        
    ]
});