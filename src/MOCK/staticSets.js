import React from "react";
import {PageMain} from "../component/pages/pageMain.jsx";
import {PageSchedule} from "../component/pages/pageSchedule.jsx";
import {PageRecording} from "../component/pages/pageRecording.jsx";
import {PageContacts} from "../component/pages/pageContacts.jsx";
import {PageSearch} from "../component/pages/pageSearch.jsx";
import {PageCovid} from "../component/pages/pageCovid.jsx";
import {PageVakc} from "../component/pages/pageVakc.jsx";
import {PageProf} from "../component/pages/pageProf.jsx";
import {PageLocation} from "../component/pages/pageLocation.jsx";
import {PagePayServices} from "../component/pages/pagePayServices.jsx";
import {PageConditions} from "../component/pages/pageConditions.jsx";
import withCustomState from "../HOC/withCustomState";
import staticFunctions from "../FUNC/staticFunc";
import {sqlRequests} from "../API/sqlRequests";
import {api} from "../API/api";
import withAsyncFabric from "../HOC/withAsyncFabric";
import {TimeWork} from "../component/pages/elements/timeWork.jsx";
import {PageKDC} from "../component/pages/pageKDC.jsx";
import {PageVacancies} from "../component/pages/pageVacancies.jsx";
import {NotUniqueAsyncPage} from "../component/pages/notUniqueAsyncPage.jsx";

const mockPageInfo = {
  schedule: {
    work: {
      startD: `Пн`,
      endD: `Пт`,
      startTh: 8,
      endTh: 20,
    },
    phoneHome: {
      startTh: 8,
      endTh: 13,
      startD: `Пн`,
      endD: `Пт`,
    },
    phoneWeekend: {
      startTh: 8,
      endTh: 13,
      startD: `Сб`,
      endD: `Вс`,
    },
    phoneOsmp: {
      startTh: 8,
      endTh: 8,
      startD: `Пн`,
      endD: `Вс`,
    },
  },
  organization: {
    nameO: `Детская городская поликлиника №29`,
  },
  links: {
    mainPage: [
      {
        name: `vk`,
        to: `https://google.com`
      },
      {
        name: `google`,
        to: `https://google.com/google`
      },
      {
        name: `youtube`,
        to: `https://youtube.com`
      },
    ],
    vk: {
      name: `vk`,
      to: `https://google.com`
    },
  },
  messages: {
    warning: {
      mainPage: `WarningMessage from staticSets`,
    },
  },
  slides: {
    pageMain: [
      {
        src: `/assets/img/placeholder_2.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_3.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_4.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_5.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_6.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_7.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_8.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_9.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      },
      {
        src: `/assets/img/placeholder_1.gif`,
        textPar: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam assumenda aut consequatur eius eveniet exercitationem fugiat, labore libero obcaecati, odit praesentium quia similique temporibus velit veniam veritatis. A, sed.`,
        textChild: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at error et itaque modi nobis, sint sit vero voluptatem?`,
      }
    ],
  },
  forms: {
    search: {
      fields: [
        {
          name: ``,
          type: `string`,
          range: 18,
          placeholder: `Я ищу ...`,
          require: {
            schema: {
              min: 2,
              max: 55,
              type: `any`,
            },
          }
        },
      ],
    }
  },
  phones: {
    useful: [
      {
        name: `Регистратура 29`,
        phone: `559-07-21`,
      },
      {
        name: `Регистратура 61`,
        phone: `559-07-21`,
      },
    ],
    warning: [
      {
        name: `Пожар`,
        phone: `01`,
      },
      {
        name: `Миллиция`,
        phone: `02`,
      },
    ],
    operatorsMainRegs: [
      {
        branch: `29`,
        phone: `559-07-22`,
      },
      {
        branch: `29Hot`,
        phone: `8 (994) 415-26-53`,
      },
      {
        branch: `61`,
        phone: `531-18-65`,
      },
      {
        branch: `61Hot`,
        phone: `8 (994) 415-26-54`,
      },
      {
        branch: `osmp`,
        phone: `533-11-00`,
      }
    ],
    operatorsHomeRegs: [
      {
        branch: `29`,
        phone: `559-07-23`,
      },
      {
        branch: `61`,
        phone: `531-75-97`,
      },
      {
        branch: `weekend`,
        phone: `536-19-80`,
      }
    ],
    warningPhones: [
      `49-447-21`, `269-07-21`, `777-97-76`
    ],
    administration: [
      {
        branch: `29`,
        phone: `559-07-21`,
      },
      {
        branch: `61`,
        phone: `573-96-14`,
      },
    ],
    payServices: [
      {
        branch: `29`,
        phone: `8 (994) 415-26-53`,
      },
      {
        branch: `61`,
        phone: `8 (994) 415-26-54`,
      },
    ],
  },
  scheduleTables: [
    {
      name: `ped29`,
      sql: sqlRequests.selectSchedulePed29,
    },
    {
      name: `ped61`,
      sql: sqlRequests.selectSchedulePed61,
    },
    {
      name: `spec`,
      sql: sqlRequests.selectScheduleSpec,
    },
    {
      name: `proc29`,
      sql: sqlRequests.selectScheduleProc29,
    },
    {
      name: `proc61`,
      sql: sqlRequests.selectScheduleProc61,
    },
    {
      name: `kzr29`,
      sql: sqlRequests.selectScheduleKzr29,
    },
    {
      name: `kzr61`,
      sql: sqlRequests.selectScheduleKzr61,
    },
  ],
};
const nameSchedMap = [
  {
    name: `ped`,
    text: `Педиатры`,
  },
  {
    name: `spec`,
    text: `Специалисты`,
  },
  {
    name: `proc`,
    text: `Процедурные кабинеты`,
  },
  {
    name: `kzr`,
    text: `Каб. Здорового Ребенка`,
  },
];
// for php seo variables title && description, if title exist, take it, in other case - get name.
const mockMenus = [
  // for test contour
  // {to: `/index.php`, name: `TestPage`, component: PageMain},
  {
    to: `/`,
    name: `Главная`,
    component: PageMain,
    title: `Главная Страница`,
    description: `Основные новости, важные изменения, предстоящие события, основные ссылки, обратная связь`,
  },
  {
    to: `/index.php`,
    name: `Главная`,
    component: PageMain,
    title: `Главная Страница`,
    description: `Основные новости, важные изменения, предстоящие события, основные ссылки, обратная связь`,
  },
  {
    to: `/search`,
    name: `Поиск`,
    component: PageSearch,
    description: `Найдите всю необходимую информацию. При возникновении любых вопросов, напишите Нам!`,
  },
  {
    to: `/covid`,
    name: ``,
    component: PageCovid,
    img: `svg/covid.svg`,
    anchor: `logoTimeWork`,
    title: `Последние новости Covid-19`,
    description: `&#10148;Все что надо знать о COVID-19: виды тестов, симптомы, правила действия, горячие телефоны, течение болезни, последствия, риски, защита близких и родственников, экспресс-тест, изоляция или карантин, антибиотики, экстренные телефоны`,
  },
  {
    to: `/vakc`,
    name: `Вакцинация`,
    component: PageVakc,
    img: `svg/vack.svg`,
    anchor: `logoTimeWork`,
    description: `Защитите своих детей от следующих заболеваний: Вирусный гепатита «В», туберкулез, пневмококковая инфекция, дифтерия, столбняк, полиомиелит, коклюш, корь, эпидемическый паротит, краснуха, гемофильная инфекция, грипп, гепатита А, ветряная оспа. Без прививок нам бы угрожали: • корь – вероятность смертельного исхода 1 случай из 100, инвалидности 5 случаев из 100;• коклюш – очень высок риск осложнений со стороны дыхательной и нервной систем;• дифтерия – вероятность смертельного исхода 10 случаев из 100;• полиомиелит – риск тяжелой инвалидности;• туберкулез – длительное лечение, тяжелые осложнения;• эпидемический паротит – возможно развитие бесплодия;• краснуха – у не болевших в детстве или непривитых женщин, заболевших во время беременности, может родиться ребенок-инвалид или нежизнеспособный ребенок;`,
  },
  {
    to: `/prof`,
    name: `Проф.осмотры`,
    component: PageProf,
    img: `svg/prof.svg`,
    anchor: `logoTimeWork`,
    description: `Профилактический медицинский осмотр проводится в целях раннего (своевременного) выявления состояний, заболеваний и факторов риска их развития, а также в целях определения групп здоровья и выработки рекомендаций для пациентов. Запись на проф.осмотр производит участковый врач или мед.сестра. &#10010;Проверьте, что надо пройти в Вашем возрасте.`,
  },
  {
    to: `/contacts`,
    name: `Контакты`,
    component: PageContacts,
    img: `svg/contacts.svg`,
    anchor: `logoTimeWork`,
    description: `Поликлиника открыта с 8:00 до 20:00 с Пн по Пт, Скорая (533-11-00) - Ежедневно, круглосуточно! Мы находимся: <a href="https://www.google.com/maps/dir//%D1%83%D0%BB.+%D0%94%D0%B5%D0%BC%D1%8C%D1%8F%D0%BD%D0%B0+%D0%91%D0%B5%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE,+18+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+3,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+195274/@60.0422005,30.3815585,18.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x469634a0ae0c395b:0x872ead04bbba6897!2m2!1d30.381605!2d60.042163?hl=ru-RU">ДПО29</a> - 195274, г.Санкт-Петербург, ул. Демьяна Бедного, д.18, корпус 3. <a href="https://www.google.com/maps/dir//%D0%A2%D0%B8%D0%BC%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0,+17+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+2,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/@60.0422637,30.4059584,17.79z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4696335aa728c2b7:0xe28b5aa07f64ae07!2m2!1d30.406774!2d60.042433!3e0">ДПО61</a> - Адрес: 195297, г.Санкт-Петербург, ул. Тимуровская, д.17, корпус 2.`,
  },
  {
    to: `/location`,
    name: `Прикрепление`,
    component: withCustomState(PageLocation),
    img: `svg/locationMenu.svg`,
    anchor: `logoTimeWork`,
    description: `Проверьте прикрепление для возможности записи к специалистам учреждения. Введите в форму данные вашего адреса проживания и нажмите кнопку Поиск.`
  },
  {
    to: `/recording`,
    name: `Запись`,
    component: PageRecording,
    img: `svg/recording.svg`,
    anchor: `logoTimeWork`,
    description: `Воспользуйтесь возможностями самозаписи. Выберите необходимое подразделение и следуйте дальнейшим инструкциям на сайте.`
  },
  {
    to: `/payServices`,
    name: `Платные услуги`,
    component: PagePayServices,
    img: `svg/payServices.svg`,
    anchor: `logoTimeWork`,
    description: `Полилкиника предоставляет большой спектр платных услуг, воспользуйтесь фильтром для выбора необходимой категории. Справки по телефонам: ДПО29 - 8 (994) 415-26-53, ДПО61 - 8 (994) 415-26-54.`
  },
  {
    to: `/schedule`,
    name: `Расписание`,
    component: withAsyncFabric(PageSchedule),
    propsIn: {
      api,
      tablesSchema: mockPageInfo.scheduleTables,
    },
    img: `svg/schedule.svg`,
    anchor: `logoTimeWork`,
    description: `Воспользуйтесь фильтром для выбора необходимого расписания. Внимательно проверяйте адрес приема специалистов (он указан в графе специальность / фио).`

  },
  {
    to: `/conditions`,
    name: `Условия`,
    component: PageConditions,
    anchor: `logoTimeWork`,
    description: `Условия`,
  },
  {
    to: `/kzr`,
    name: `Кабинет Здорового Ребенка`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Кабинет Здорового Ребенка. `,
  },
  {
    to: `/kdc`,
    name: `Консультационно - Диагностический центр`,
    component: PageKDC,
    anchor: `logoTimeWork`,
    description: `Консультационно - Диагностический центр. `,
  },
  {
    to: `/rehabilitation`,
    name: `Реабилитация`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Реабилитация.`,
  },
  {
    to: `/osmp`,
    name: `Скорая помощь`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Скорая помощь.`,
  },
  {
    to: `/acEnvironment`,
    name: `Доступная среда`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Доступная среда.`,
  },
  {
    to: `/reviews`,
    name: `Отзывы`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Отзывы.`,
  },
  {
    to: `/postReview`,
    name: `Написать Отзыв`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Написать Отзыв.`,
  },
  {
    to: `/vacancies`,
    name: `Вакансии`,
    component: PageVacancies,
    anchor: `logoTimeWork`,
    description: `Страница Вакансий. `,
  },
  {
    to: `/collective`,
    name: `Коллектив`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Коллектив.`,
  },
  {
    to: `/tradeUnion`,
    name: `Профсоюз`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `Профсоюз.`,
  },
  {
    to: `/antiCorruption`,
    name: `АнтиКоррупция`,
    component: NotUniqueAsyncPage,
    anchor: `logoTimeWork`,
    description: `АнтиКоррупция.`,
  }
];
const notUniquePagesSqlMap = [
  {
    path: `/kzr`,
    sql: sqlRequests.selectKZRPageContent,
  },
  {
    path: `/rehabilitation`,
    sql: sqlRequests.selectRehabilitationPageContent,
  },
  {
    path: `/osmp`,
    sql: sqlRequests.selectOSMPPageContent,
  },
  {
    path: `/acEnvironment`,
    sql: sqlRequests.selectAcEnvironmentPageContent,
  },
  {
    path: `/reviews`,
    sql: sqlRequests.selectReviewsPageContent,
  },
  {
    path: `/postReview`,
    sql: sqlRequests.selectPostReviewPageContent,
  },
  {
    path: `/collective`,
    sql: sqlRequests.selectCollectivePageContent,
  },
  {
    path: `/tradeUnion`,
    sql: sqlRequests.selectTradeUnionPageContent,
  },
  {
    path: `/antiCorruption`,
    sql: sqlRequests.selectAntiCorruptionPageContent,
  }
];
const calendar = () => {
  return <React.Fragment>
    <div className={`rubberBlockTable`}>
      <table className={`itemsList`}>
        <tbody>
          <tr>
            <td><strong>Для детей</strong> <strong>с рождения до 2 лет</strong></td>
            <td><strong>Кратность</strong></td>
            <td><strong>Прививки от заболеваний</strong></td>
            <td><strong>Вакцины</strong></td>
          </tr>
          <tr>
            <td>Новорожденные, дети в первые 24 часа жизни</td>
            <td>1-я вакцинация</td>
            <td>Вирусный гепатит В</td>
            <td>Эувакс Регевак</td>
          </tr>
          <tr>
            <td>Новорожденные на 3-7 день жизни</td>
            <td>вакцинация</td>
            <td>Туберкулез</td>
            <td>БЦЖ-М</td>
          </tr>
          <tr>
            <td>Дети в 1 месяц</td>
            <td>2-я вакцинация</td>
            <td>Вирусный гепатит В</td>
            <td>Эувакс Регевак</td>
          </tr>
          <tr>
            <td rowSpan="2">Дети в 2 месяца</td>
            <td>3-я вакцинация</td>
            <td>Вирусный гепатит В для детей из групп риска</td>
            <td>Эувакс Регевак</td>
          </tr>
          <tr>
            <td>1-я вакцинация</td>
            <td>Пневмококковая инфекция</td>
            <td>Синфлорикс Превенар</td>
          </tr>
          <tr>
            <td rowSpan="3">Дети в 3 месяца</td>
            <td>1-я вакцинация</td>
            <td>Дифтерия Коклюш Столбняк</td>
            <td>Инфанрикс Инфанрикс-гекса Пентаксим АДС, АКДС</td>
          </tr>
          <tr>
            <td>1-я вакцинация</td>
            <td>Полиомиелит</td>
            <td>Полимилекс</td>
          </tr>
          <tr>
            <td>1-я вакцинация</td>
            <td>Гемофильная инфекция (для детей из группы риска)</td>
            <td>Пентаксим Инфанрикс-гекса</td>
          </tr>
          <tr>
            <td rowSpan="4">Дети в 4,5 месяца</td>
            <td>2-я вакцинация</td>
            <td>Дифтерия Коклюш Столбняк</td>
            <td>Инфанрикс Инфанрикс-гекса Пентаксим АДС, АКДС</td>
          </tr>
          <tr>
            <td>2-я вакцинация</td>
            <td>Гемофильная инфекция (для детей из группы риска)</td>
            <td>Пентаксим Инфанрикс-гекса</td>
          </tr>
          <tr>
            <td>2-я вакцинация</td>
            <td>Полиомиелит</td>
            <td>Полимилекс</td>
          </tr>
          <tr>
            <td>2-я вакцинация</td>
            <td>Пневмококковая инфекция</td>
            <td>Синфлорикс Превенар</td>
          </tr>
          <tr>
            <td rowSpan="4">Дети в 6 месяцев</td>
            <td>3-я вакцинация</td>
            <td>Дифтерия Коклюш Столбняк</td>
            <td>Инфанрикс Инфанрикс-гекса Пентаксим АДС, АКДС</td>
          </tr>
          <tr>
            <td>3-я вакцинация</td>
            <td>Вирусный гепатит В</td>
            <td>Эувакс Регевак</td>
          </tr>
          <tr>
            <td>3-я вакцинация</td>
            <td>Полиомиелит</td>
            <td>Полимилекс БиВак полио</td>
          </tr>
          <tr>
            <td>3-я вакцинация</td>
            <td>Гемофильная инфекция (для детей из группы риска)</td>
            <td>Пентаксим Инфанрикс-гекса</td>
          </tr>
          <tr>
            <td rowSpan="2">Дети в 12 месяцев</td>
            <td>Вакцинация</td>
            <td>Корь Краснуха Эпидемический паротит</td>
            <td>Комплексные: ММР-II, Дивакцина Моно-вакцины: Корь, Краснуха, Паротит</td>
          </tr>
          <tr>
            <td>4-я вакцинация</td>
            <td>Вирусный гепатит В (для детей из группы риска)</td>
            <td>Эувакс Регевак</td>
          </tr>
          <tr>
            <td>Дети в 15 месяцев (1 год 3 мес)</td>
            <td>Ревакцинация</td>
            <td>Пневмококковая инфекция</td>
            <td>Синфлорикс Превенар</td>
          </tr>
          <tr>
            <td rowSpan="3">Дети в 18 месяцев (1 год 6 мес)</td>
            <td>1-я ревакцинация</td>
            <td>Полиомиелит</td>
            <td>Полимилекс БиВак полио</td>
          </tr>
          <tr>
            <td>1-я ревакцинация</td>
            <td>Дифтерия Коклюш Столбняк</td>
            <td>Инфанрикс Инфанрикс-гекса Пентаксим АДС, АКДС</td>
          </tr>
          <tr>
            <td>Ревакцинация</td>
            <td>Гемофильная инфекция (для детей из группы риска)</td>
            <td>Пентаксим Инфанрикс-гекса</td>
          </tr>
          <tr>
            <td>Дети 20 месяцев (1 год 8 мес)</td>
            <td>2-я ревакцинация</td>
            <td>Полиомиелит</td>
            <td>БиВак полио Полимилекс</td>
          </tr>
        </tbody>
      </table>
      <table className={`itemsList`}>
        <tbody>
          <tr>
            <td><strong>Для детей с 6 до 18 лет</strong></td>
            <td/>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>Дети в 6 лет</td>
            <td>Ревакцинация</td>
            <td>Корь Краснуха Эпидемический паротит</td>
            <td>Комплексные: ММР-II, Дивакцина Моно-вакцины: Корь, Краснуха, Паротит</td>
          </tr>
          <tr>
            <td>Дети в 6-7 лет</td>
            <td>2-я ревакцинация</td>
            <td>Дифтерия Столбняк</td>
            <td>АД-М, АДС-М, Адасель</td>
          </tr>
          <tr>
            <td rowSpan="2">Дети в 14 лет</td>
            <td>3-я ревакцинация</td>
            <td>Дифтерия Столбняк</td>
            <td>АД-М,&nbsp; АДС-М, Адасель</td>
          </tr>
          <tr>
            <td>3-я ревакцинация</td>
            <td>Полиомиелит</td>
            <td>БиВак полио Полимилекс</td>
          </tr>
        </tbody>
      </table>
      <table className={`itemsList`}>
        <tbody>
          <tr>
            <td><strong>В разном возрастном периоде</strong></td>
            <td/>
            <td/>
            <td/>
          </tr>
          <tr>
            <td rowSpan="5">Дети с 1 до 18 лет</td>
            <td>Вакцинация</td>
            <td>Вирусный гепатит В</td>
            <td>Эувакс, Регевак</td>
          </tr>
          <tr>
            <td>Вакцинация</td>
            <td>Краснуха</td>
            <td>Краснуха, ММР-II</td>
          </tr>
          <tr>
            <td>Ревакцинация</td>
            <td>Краснуха</td>
            <td>Краснуха, ММР-II</td>
          </tr>
          <tr>
            <td>Вакцинация</td>
            <td>Корь</td>
            <td>Корь, Дивакцина, ММР-II</td>
          </tr>
          <tr>
            <td>Ревакцинация</td>
            <td>Корь</td>
            <td>Корь, Дивакцина, ММР-II</td>
          </tr>
          <tr>
            <td>Дети с 6 месяцев до 18 лет</td>
            <td>Вакцинация</td>
            <td>Грипп</td>
            <td>Ваксигрип Ультрикс Гриппол Плюс</td>
          </tr>
        </tbody>
      </table>
      <table className={`itemsList`}>
        <tbody>
          <tr>
            <td><strong>Пробы на туберкулез</strong></td>
            <td/>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>Детям до 7 лет</td>
            <td>Туберкулиновая проба</td>
            <td>Туберкулез</td>
            <td>Реакция Манту</td>
          </tr>
          <tr>
            <td>Детям с 8 до 14 лет</td>
            <td>Туберкулиновая проба</td>
            <td>Туберкулез</td>
            <td>Диаскин тест</td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>;
};
const payRecord = (objWithLinkMethods) => {
  const {cleanNum, checkInArOfObjByKeyAndVal, cleanAllSelected, colorMenuByPath} = staticFunctions;
  const {renderCleanLink} = objWithLinkMethods;
  return <React.Fragment>
    <div className={`tA_C`}>
      <div className={`blockNameBigWidth`}>В поликлинике предоставляется широкий спектр {renderCleanLink({
        name: `платных`,
        to: `/payServices`,
        anchor: `logoTimeWork`,
        callback: () => {
          cleanAllSelected();
          colorMenuByPath(`/payServices`);
        }
      })} услуг. Прикрпеление необязательно.<div>
        <div className={`blockContent`}>Действует {renderCleanLink({
          name: `система скидок`,
          to: `/conditions`,
          paramName: `condId`,
          paramValue: `salePayServices`,
          anchor: `logoTimeWork`,
        })}.</div></div></div>
      <div>Консультация по платным услугам:</div>
      <div><div>Дпо29: <a target={`_blank`} rel="noreferrer" href={`tel:${cleanNum(mockPageInfo.phones.payServices[checkInArOfObjByKeyAndVal(mockPageInfo.phones.payServices, `branch`, `29`)].phone)}`}>{mockPageInfo.phones.payServices[checkInArOfObjByKeyAndVal(mockPageInfo.phones.payServices, `branch`, `29`)].phone}</a>
      </div><div>Дпо61: <a target={`_blank`} rel="noreferrer" href={`tel:${cleanNum(mockPageInfo.phones.payServices[checkInArOfObjByKeyAndVal(mockPageInfo.phones.payServices, `branch`, `61`)].phone)}`}>{mockPageInfo.phones.payServices[checkInArOfObjByKeyAndVal(mockPageInfo.phones.payServices, `branch`, `61`)].phone}</a>
      </div></div>
      <TimeWork scheduleWork={mockPageInfo.schedule.work} osmpNeed={false} />
      <div>Текст договора на оказание платной медицинской услуги. <a href={`assets/managersSpace/conditionsPage/pdf/payServiceContract.pdf`} target={`_blank`}>Скачать</a></div>
      <p>Отдел организации платных медицинских услуг Детская городская поликлинкиа № 29 г. Санкт-Петербурга предоставляет полный спектр медицинских услуг, осуществляемых в учреждении, в следующих случаях:</p>
      <p>• по желанию граждан;</p>
      <p>• в рамках договора добровольного медицинского страхования (ДМС) со страховыми компаниями.</p>
      <p>Платные медицинские услуги оказываются на основе договоров, регламентирующих условия и сроки их предоставления, порядок расчетов, права, обязанности и ответственность сторон. Стоимость медицинских услуг, оказываемых нашим учреждением, определяется на основании действующего прейскуранта.</p>
      <p>Способы оплаты услуг: за наличный расчёт. Пациенту выдаётся на руки кассовый чек. Оформляются и выдаются справки установленного образца для получения налогового вычета. Оказание гражданам медицинских услуг на платной основе не исключает в дальнейшем обследование и лечение в рамках программы ОМС. На базе КРБ постоянно консультируют доктора и кандидаты медицинских наук КРБ, профессора различных кафедр Санкт-Петербургских медицинских ВУЗов, СЗГМУ. По окончании консультативного приема на руки выдается консультативное заключение.</p>
    </div>
  </React.Fragment>;
};
const addLocation = (objWithLinkMethods) => {
  const {cleanAllSelected, colorMenuByPath} = staticFunctions;
  const {renderCleanLink} = objWithLinkMethods;
  return <div className={`width50`}>
    Для прикрепления к поликлинике Вы должны проживать на {renderCleanLink({
      name: `обслуживаемой`,
      to: `/location`,
      anchor: `logoTimeWork`,
      callback: () => {
        cleanAllSelected();
        colorMenuByPath(`/location`);
      }
    })} территории. Обратитесь к {renderCleanLink({
      name: `секретарю`,
      to: `/contacts`,
      anchor: `logoTimeWork`,
      callback: () => {
        cleanAllSelected();
        colorMenuByPath(`/contacts`);
      }
    })} учреждения для заполнения{` `}
    {renderCleanLink({
      name: `заявления на прикрепление`,
      to: `/conditions`,
      paramName: `condId`,
      paramValue: `locationStatement`,
      anchor: `logoTimeWork`,
    })} и{` `}
    {renderCleanLink({
      name: `согласия на обработку персональных данных`,
      to: `/conditions`,
      paramName: `condId`,
      paramValue: `privateDataStatement`,
      anchor: `logoTimeWork`,
    })}.
  </div>;
};
const locationStatement = () => {
  return <div><p>ЗАЯВЛЕНИЕ</p><p>
    о выборе медицинской организации</p><p>Я,  ______________________________________________________________________                ,</p><p>прошу прикрепить гражданина ________________________________________________________</p><p>дата рождения  _______________                    г. пол: мужской, женский (нужное подчеркнуть),</p><p>
    законным представителем которого я являюсь:_____________________________________________. </p><p>
    указать основание: а) несовершеннолетний ребенок, б) недееспособность, в)попечительство и т.д.</p><p>Документ, подтверждающий право законного представительства: паспорт родителя :  серия_________    номер   _______________       , выдан  ______________   г. кем выдан   ______________________________</p><p>для оказания первичной медико-санитарной помощи к Государственному бюджетному учреждению здравоохранения «Детской городской поликлинике № 15 Департамента здравоохранения г.Москвы филиал №1» </p><p>
    Страховой медицинский полис (временное свидетельство) № _______________________  , </p><p>
    СНИЛС ребенка_____________________________________</p><p>
    дата выдачи полиса   «             »       г.</p><p>
    Домашний адрес: г. Москва   ___________________________________________________________________  </p><p>
    по постоянной регистрации, по временной регистрации, по месту фактического проживания, без регистрации ( нужное подчеркнуть)</p><p>
    Место регистрации ______________________________________________________________________</p><p>
    Прикреплен к медицинской организации_________________________________</p><p>
    Не прикреплен к медицинской организации (подчеркнуть, если не прикреплен к медицинской организации). Паспорт, свидетельство о рождении или другой документ, удостоверяющий личность ребенка:  серия  _____   №   ___________________________________</p><p>
    выдан « ___   »  ___________   г.    кем выдан  ______________________________________________                                  </p><p>
    (название органа, выдавшего документ)</p><p>
    Настоящим подтверждаю выбор Вашей медицинской организации для получения первичной медико-санитарной помощи гражданином, законным представителем которого я являюсь, и согласие на использование его персональных данных при их обработке в соответствии с действующим законодательством Российской Федерации. С порядком оказания неотложной медицинской помощи на дому по участковому принципу с учетом его территориальной доступности ознакомлен.</p><p>
    «____»_______________ 2020 г.                              Личная подпись___________________________</p><p>
    Дата и время регистрации заявления «_____»_____________2020 г. ________:__________	                        </p></div>;
};
const privateDataStatement = () => {
  return <div><p>
    СОГЛАСИЕ ПАЦИЕНТА НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ </p><p>
    В СПБ ГБУЗ «ДЕТСКАЯ ГОРОДСКАЯ ПОЛИКЛИНИКА №29»</p><p>
  </p><p>
    Я,____________________________________________________________________________</p><p>
    (Ф.И.О. полностью), проживающий по адресу (месту регистрации): _____________________________________________________________________________, паспорт серия и номер__________№_______________, дата выдачи _______________название выдавшего органа_______________________________________________________________________________</p><p>
  </p><p>
    в соответствии с требованиями ст. 9 ФЗ от 27.07.2006 г. О персональных данных №152-ФЗ, подтверждаю свое согласие на обработку в СПб ГБУЗ «Детская Городская поликлиника №29» (далее – Оператор) моих персональных данных, включающих: фамилию, имя, отчество, пол, дату рождения, адрес проживания, контактный телефон, реквизиты полиса ОМС (ДМС), страховой номер индивидуального лицевого счета в Пенсионном фонде России (СНИЛС), паспортные данные, данные о состоянии моего здоровья, заболеваниях, случаях обращения за медицинской помощью, – в медико-профилактических целях, в целях установления медицинского диагноза и оказания медицинских услуг при условии, что их обработка осуществляется лицом, профессионально занимающимся медицинской деятельностью и обязанным сохранять  врачебную  тайну. </p><p>
  </p><p>
    В процессе оказания Оператором мне медицинской помощи я предоставляю право медицинским работникам, передавать мои персональные данные, содержащие сведения, составляющие врачебную тайну, другим должностным лицам Оператора, в интересах моего обследования и лечения.</p><p>
  </p><p>
    Предоставляю Оператору право осуществлять все действия (операции) с моими персональными данными, включая сбор, систематизацию, накопление, хранение, обновление, изменение, использование, обезличивание, блокирование, уничтожение. Оператор вправе обрабатывать мои персональные данные посредством внесения их в электронную базу данных, включения в списки (реестры) и отчетные формы, предусмотренные документами, регламентирующими предоставление отчетных данных (документов) по ОМС (договором ДМС).</p><p>
  </p><p>
    Оператор имеет право во исполнение своих обязательств по работе ОМС (по договору ДМС) на обмен (прием и передачу) моими персональными данными с использованием машинных носителей или по каналам связи, с соблюдением мер, обеспечивающих их защиту от несанкционированного доступа, при условии, что их прием и обработка будут осуществляется лицом, обязанным сохранять профессиональную тайну. Срок хранения моих персональных данных соответствует сроку хранения первичных медицинских документов и составляет двадцать пять лет (для стационара, пять лет – для поликлиники). Передача моих персональных данных иным лицам или иное их разглашение может осуществляться только с моего письменного согласия.</p><p>
  </p><p>
    Настоящее согласие дано мной  «____»__________20____ г. и действует бессрочно. </p><p>
  </p><p>
    Я оставляю за собой право отозвать свое согласие посредством составления соответствующего письменного документа, который может быть направлен мной в адрес Оператора по почте заказным письмом с уведомлением о вручении либо вручен лично под расписку представителю Оператора. В случае получения моего письменного заявления об отзыве настоящего согласия на обработку персональных данных, Оператор обязан прекратить их обработку в течение периода времени, необходимого для завершения  взаиморасчетов по оплате оказанной мне до этого медицинской помощи.</p><p>
  </p><p>
    Подпись субъекта персональных данных   _________________/____________________</p></div>;
};
const receptionStatement = (objWithLinkMethods) => {
  const {cleanAllSelected, colorMenuByPath} = staticFunctions;
  const {renderCleanLink} = objWithLinkMethods;
  return <div>
    <div className={`blockName inline`}>Для {renderCleanLink({
      name: `получения`,
      to: `/recording`,
      anchor: `logoTimeWork`,
      callback: () => {
        cleanAllSelected();
        colorMenuByPath(`/recording`);
      }
    })} медицинского обслуживания Вам необходимо иметь при себе медицинский Полис, а также соблюдать следующие правила:
    </div>
    <div className={`listItem`}>Надеть маску
      <div><img src={`assets/img/svg/mask.svg`} alt={`Mask`} /></div>
    </div>
    <div className={`listItem`}>Продезинфицировать руки в диспенсере на первом этаже
      <div><img src={`assets/img/svg/dispenser.svg`} alt={`Disinfection`} /></div>
    </div>
    <div className={`listItem`}>Соблюдать дистанцию согласно разметке
      <div>
        <img src={`assets/img/svg/healthCare1.svg`} alt={`healthCare`} />
        <img src={`assets/img/svg/dist2.svg`} alt={`markup`} />
        <img src={`assets/img/svg/dist3.svg`} alt={`markup`} />
      </div>
    </div>
    <div className={`inline listItem pTB30`}>Мы заботимся о Вашем здоровье!
      <div>
        <img src={`assets/img/svg/ambulance.svg`} alt={`healthCare`} />
        <img src={`assets/img/svg/healthCare4.svg`} alt={`healthCare`} />
        <img src={`assets/img/svg/healthCare5.svg`} alt={`healthCare`} />
      </div>
    </div>
  </div>;
};
const salePayServices = (objWithLinkMethods) => {
  const {cleanAllSelectedDynamic, selectedCssClassName, colorMenuByPath} = staticFunctions;
  const {renderCleanLink} = objWithLinkMethods;
  return <div className={`width50`}>Страница в разработке. Воспользуйтесь {renderCleanLink({
    name: `справочными`,
    to: `/conditions`,
    paramName: `condId`,
    paramValue: `payRecord`,
    anchor: `logoTimeWork`,
    callback: () => {
      cleanAllSelectedDynamic(selectedCssClassName);
      colorMenuByPath(`/recording`);
    }
  })} системами.</div>;
};
const kdcReceptionStatement = () => {
  return <div>Принимаются все дети, проживающие в Калининском районе!</div>;
};
const rulesForDiagnosticServices = () => {
  return <div><p><strong>Правила подготовки к ультразвуковым исследованиям</strong></p>
    <p>1.&nbsp;&nbsp; &nbsp;УЗ исследования,&nbsp; не требующие специальной подготовки: - Щитовидной железы, слюнных желез. - Молочных желез (при плановом обследовании проводится на 5-10 день менструального цикла). В случае неотложных показаний&nbsp; УЗИ проводится в любой день менструального цикла. - Почек и надпочечников - Органов мошонки - Лимфатических узлов (за исключением абдоминальных) - Мягких тканей - Предстательной железы трансректальным датчиком (ТРУЗИ) - Малого таза у женщин трансвагинальным датчиком (ТВУЗИ) 2.&nbsp;&nbsp; &nbsp;УЗ исследования,&nbsp; требующие&nbsp; подготовки: - органов брюшной полости (ультразвуковое исследование печени, желчного пузыря, селезенки, поджелудочной железы) – натощак. - мочевого пузыря – с наполненным мочевым пузырем. ** - предстательной железы трансабдоминальным датчиком (через брюшную стенку) – с напол-ненным мочевым пузырем.</p>
  </div>;
};
const rulesForRoentgenServices = () => {
  return <div>
    <p><strong>Правила подготовки к рентгенологическим исследованиям</strong></p>
    <p>На рентгенодиагностическом оборудовании выполняются все методы рентгенологических исследований. 1. С предварительной подготовкой производятся исследования желудочно-кишечного тракта (рентгеноскопия пищевода, желудка и 12-типерстной кишки, толстой кишки), а также исследования мочеполовой системы (обзорная рентгенограмма мочеполовой системы, внутривенная урография). Подготовка к исследованию:</p>
    <ul>
      <li>Для выполнения <strong>ирригоскопии</strong> (исследование толстой кишки) и для <strong>исследования мочеполовой системы</strong> накануне вечером и утром в день исследования необходимо сделать очистительные клизмы или принять препарат, очищающий кишечник по схеме (см. инструкцию к препарату).</li>
      <li><strong>Исследование пищевода и желудка</strong> выполняется строго <strong>натощак</strong>, последний прием пищи накануне, не позднее 18 ч.</li>
    </ul>
    <p>2. Без предварительной подготовки, выполняются следующие виды рентгеновских исследований:</p>
    <ul>
      <li>рентгенограмма&nbsp; черепа&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
      <li>рентгенограмма&nbsp; костей лицевого скелета и придаточных пазух носа</li>
      <li>рентгенограмма&nbsp; грудной клетки&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
      <li>рентгенограмма&nbsp; любого отдела позвоночника</li>
      <li>рентгенограмма&nbsp; костей и суставов</li>
    </ul>
    <p><strong>Результаты исследований выдаются сразу!</strong> Пациент получает квалифицированное заключение врача-рентгенолога, рентгеновский снимок на термопленке.</p>
  </div>;
};
const pageConditionSchema = {
  conditions: [
    {
      condId: `calendar`,
      content: calendar,
      name: `Календарь прививок`,
    },
    {
      condId: `payRecord`,
      content: payRecord,
      name: `Запись на платные услуги`,
    },
    {
      condId: `addLocation`,
      content: (objWithLinkMethods) => {
        return addLocation(objWithLinkMethods);
      },
      name: `Условия прикрепления`,
    },
    {
      condId: `locationStatement`,
      content: locationStatement,
      name: `Заявление на прикрепление`,
    },
    {
      condId: `privateDataStatement`,
      content: privateDataStatement,
      name: `Согласие на обработку персональных данных`,
    },
    {
      condId: `receptionStatement`,
      content: receptionStatement,
      name: `Условия приёма`,
    },
    {
      condId: `salePayServices`,
      content: salePayServices,
      name: `Система скидок на платные услуги`,
    },
    {
      condId: `kdcReceptionStatement`,
      content: kdcReceptionStatement,
      name: `Условия приема в кдц`,
    },
    {
      condId: `rulesForDiagnosticServices`,
      content: rulesForDiagnosticServices,
      name: `Правила подготовки к УЗИ исследованиям`,
    },
    {
      condId: `rulesForRoentgenServices`,
      content: rulesForRoentgenServices,
      name: `Правила подготовки к Рентген исследованиям`,
    }
  ],
};
export {
  mockMenus,
  mockPageInfo,
  pageConditionSchema,
  nameSchedMap,
  notUniquePagesSqlMap,
};
