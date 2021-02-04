import React from "react";
import {PhonesOperators} from "./elements/phonesOperators.jsx";
import {PropTypes} from "prop-types";
import {mockPageInfo} from "../../MOCK/staticSets";
import staticFunctions from "../../FUNC/staticFunc";
import {TimeWork} from "./elements/timeWork.jsx";
import {sqlRequests} from "../../API/sqlRequests";
import {api} from "../../API/api";
import withAsyncData from "../../HOC/withAsyncData";
import {AsyncComponent} from "./elements/asyncComponent.jsx";

const PageContacts = (props) => {
  const {withZeroInt, timeToClose, openClick, cleanNum} = staticFunctions;
  const AsyncComponentWrapped = withAsyncData(AsyncComponent);
  const {} = props;
  return <div id={`componentPageContacts`}
    className={`componentPageContacts`}>
    <div className={`blockContent mainContentDiv`}>
      <table className={`contactsPageMainTable`}><tbody>
        <tr><td colSpan={`2`}>
          <div className={`mainContentDiv blockNameBigWidth`}>
            <div className={`blockNameBigWidth inline`}><TimeWork msg={`Поликлиника открыта `} scheduleWork={mockPageInfo.schedule.work}/></div>
          </div>
        </td></tr>
        <tr><td colSpan={`2`}>Амбулаторный прием {timeToClose()}</td></tr>

        <tr><td colSpan={`2`}><div className={`blockName`}>Санкт-Петербургское государственное бюджетное учреждение здравоохранения {`"`}Детская городская поликлиника №29{`"`}. (СПб ГБУЗ ДГП №29)</div></td></tr>
        <tr><td colSpan={`2`}>Мы ждём Вас по адресам:</td></tr>
        <tr className={`mainContInfo`}>
          <td>
            <b>Дпо 29</b>
            <table><tbody>
              <tr><td>
            Адрес (почтовый адрес): 195274, г.Санкт-Петербург, ул. Демьяна Бедного, д.18, корпус 3.
              </td></tr>
              <tr><td>
                <a target={`_blank`} href={`https://www.google.com/maps/dir//%D1%83%D0%BB.+%D0%94%D0%B5%D0%BC%D1%8C%D1%8F%D0%BD%D0%B0+%D0%91%D0%B5%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE,+18+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+3,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+195274/@60.0422005,30.3815585,18.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x469634a0ae0c395b:0x872ead04bbba6897!2m2!1d30.381605!2d60.042163?hl=ru-RU`} >
                Схема проезда</a>
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Регистратура: `,
                }} phones={mockPageInfo.phones.operatorsMainRegs} branch={`29`} />
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Горячая линия: `,
                }} phones={mockPageInfo.phones.operatorsMainRegs} branch={`29Hot`} />
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Вызов врача: `,
                  addHtml: <React.Fragment><br/>Пн-Пт{` `}
                    <small>
                  (с {withZeroInt(mockPageInfo.schedule.phoneHome.startTh)}<sup><small>00</small></sup> до {withZeroInt(mockPageInfo.schedule.phoneHome.endTh)}<sup><small>00</small></sup>)
                    </small>: </React.Fragment>,
                }} phones={mockPageInfo.phones.operatorsHomeRegs} branch={`29`} />
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Сб/Вс/Праздники `,
                  addHtml: <React.Fragment>
                    <small>
                    (с {withZeroInt(mockPageInfo.schedule.phoneHome.startTh)}<sup><small>00</small></sup> до {withZeroInt(mockPageInfo.schedule.phoneHome.endTh)}<sup><small>00</small></sup>)
                    </small>: </React.Fragment>,
                }} phones={mockPageInfo.phones.operatorsHomeRegs} branch={`weekend`} />
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{msg: `Администрация: `,
                  addHtml: <React.Fragment><br/>(с 09-00 до 17-00): </React.Fragment>}} branch={`29`} phones={mockPageInfo.phones.administration} />
              </td></tr>
              <tr><td>
          Е-mail: <a href="mailto:pd29@zdrav.spb.ru?subject=Сообщение с сайта СПб ГБУЗ ДГП29(ДПО29)">pd29@zdrav.spb.ru.</a>
              </td></tr>
              <tr><td>
          Сайт: <a href={`https://dp29.spb.ru`} >dp29.spb.ru </a>
              </td></tr>
            </tbody></table>
          </td>
          <td>
            <b>Дпо 61</b>
            <table><tbody>
              <tr><td>
            Адрес (почтовый адрес): 195297, г.Санкт-Петербург, ул. Тимуровская, д.17, корпус 2.
              </td></tr>
              <tr><td>
                <a target={`_blank`} href={`https://www.google.com/maps/dir//%D0%A2%D0%B8%D0%BC%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0,+17+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+2,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/@60.0422637,30.4059584,17.79z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4696335aa728c2b7:0xe28b5aa07f64ae07!2m2!1d30.406774!2d60.042433!3e0`} >
              Схема проезда</a>
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Регистратура: `,
                }} phones={mockPageInfo.phones.operatorsMainRegs} branch={`61`} />
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Горячая линия: `,
                }} phones={mockPageInfo.phones.operatorsMainRegs} branch={`61Hot`} />
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Вызов врача: `,
                  addHtml: <React.Fragment><br/>Пн-Пт{` `}
                    <small>
                  (с {withZeroInt(mockPageInfo.schedule.phoneHome.startTh)}<sup><small>00</small></sup> до {withZeroInt(mockPageInfo.schedule.phoneHome.endTh)}<sup><small>00</small></sup>)
                    </small>: </React.Fragment>,
                }} phones={mockPageInfo.phones.operatorsHomeRegs} branch={`61`} />
                <PhonesOperators needDivPhone={true} msg={{
                  msg: `Сб/Вс/Праздники `,
                  addHtml: <React.Fragment>
                    <small>
                    (с {withZeroInt(mockPageInfo.schedule.phoneHome.startTh)}<sup><small>00</small></sup> до {withZeroInt(mockPageInfo.schedule.phoneHome.endTh)}<sup><small>00</small></sup>)
                    </small>: </React.Fragment>,
                }} phones={mockPageInfo.phones.operatorsHomeRegs} branch={`weekend`} />
              </td></tr>
              <tr><td>
                <PhonesOperators needDivPhone={true} msg={{msg: `Администрация: `,
                  addHtml: <React.Fragment><br/>(с 09-00 до 17-00): </React.Fragment>}} branch={`61`} phones={mockPageInfo.phones.administration} />
              </td></tr>
              <tr><td>
            Е-mail: <a href="mailto:glavdpo61@mail.ru?subject=Сообщение с сайта СПб ГБУЗ ДГП29(ДПО61)">glavdpo61@mail.ru.</a>
              </td></tr>
              <tr><td>
            Сайт: <a href={`https://dp29.spb.ru`} >dp29.spb.ru </a>
              </td></tr>
            </tbody></table>
          </td>
        </tr>
        <tr><td colSpan={`2`}><div id={`goodPhones`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Полезные Телефоны</div>
          <div className="sf-accordion__content hide">
            <p>Единая региональная информационно-справочная служба Санкт-Петербурга: <a href={`tel:+122`} rel="noreferrer" target="_blank">122</a>
            </p>
            <p>Единый номер горячей линии по России: <a href={`tel:8-800-2000-112`} rel="noreferrer" target="_blank">8-800-2000-112</a>
            </p>
            <p>Справочные службы Здоровье города
              <li>о медицинских услугах:<a href={`tel:${cleanNum(`635-55-63`)}`} rel="noreferrer" target="_blank">635-55-63</a>,</li>
              <li>о медицинских лекарственных препаратах: <a href={`tel:${cleanNum(`635-55-66`)}`} rel="noreferrer" target="_blank">635-55-66</a></li>
            </p>
            <p>Горячая линия Комитета по здравоохранению: <a href={`tel:${cleanNum(`635-55-67`)}`} rel="noreferrer" target="_blank">635-55-67</a>
            </p>
            <p>Администрация Калининского района Санкт-Петербурга : <a href={`tel:${cleanNum(`576-99-01`)}`} rel="noreferrer" target="_blank">576-99-01</a>
            </p>
            <p>Горячие линии по вопросам получения социальной помощи на дому в Калининском районе
              <li>для пожилых: <a href={`tel:${cleanNum(`576-99-01`)}`} rel="noreferrer" target="_blank">576-99-01</a></li>
              <li>для инвалидов и детей-инвалидов: <a href={`tel:${cleanNum(`242-32-14`)}`} rel="noreferrer" target="_blank">242-32-14</a></li>
              <li>для детей и семей с детьми: <a href={`tel:${cleanNum(`290-86-76`)}`} rel="noreferrer" target="_blank">290-86-76</a>, <a href={`tel:${cleanNum(`242-36-85`)}`} rel="noreferrer" target="_blank">242-36-85</a></li>
              <li>предоставление мер соцподдержки: <a href={`tel:${cleanNum(`417-47-04`)}`} rel="noreferrer" target="_blank">417-47-04</a></li>
            </p>
            <p>Единый консультационный центр Роспотребнадзора: <a href={`tel:${cleanNum(`8-800-100-00-04`)}`} rel="noreferrer" target="_blank">8-800-100-00-04</a>, <a href={`tel:${cleanNum(`8-800-555-49-43`)}`} rel="noreferrer" target="_blank">8-800-555-49-43</a>
            </p>
            <p>Горячая линия Роспотребнадзор в Санкт-Петербурге : <a href={`tel:${cleanNum(`575-81-03`)}`} rel="noreferrer" target="_blank">575-81-03</a>, <a href={`tel:${cleanNum(`712-29-81`)}`} rel="noreferrer" target="_blank">712-29-81</a>
            </p>
            <p>Минздрав россии: <a href={`tel:${cleanNum(`8-800-200-0-200`)}`} rel="noreferrer" target="_blank">8-800-200-0-200</a>
            </p>
            <p>Линия Росздравнадзора по отсутствию в аптеках медицинских масок и противовирусных препаратов: <a href={`tel:${cleanNum(`8-800-550-99-03`)}`} rel="noreferrer" target="_blank">8-800-550-99-03</a>
            </p>
            <p>Информационно-справочная служба системы социальной защиты населения (гирц) : <a href={`tel:${cleanNum(`241-20-57`)}`} rel="noreferrer" target="_blank">241-20-57</a>
            </p>
            <p>Центр организации социального обслуживания: <a href={`tel:${cleanNum(`576-05-76`)}`} rel="noreferrer" target="_blank">576-05-76</a>
            </p>
            <p>Комитет по здравоохранению спб : <a href={`tel:${cleanNum(`635-55-77<`)}`} rel="noreferrer" target="_blank">635-55-77</a>
            </p>
            <p>Круглосуточная «горячая линия» для беременных: <a href={`tel:${cleanNum(`+7(952)288-03-20`)}`} rel="noreferrer" target="_blank">+7(952)288-03-20</a>
            </p>
            <p>Центр городских волотёров: <a href={`tel:${cleanNum(`245-32-20`)}`} rel="noreferrer" target="_blank">245-32-20</a>, <a href={`tel:${cleanNum(`571-03-13`)}`} rel="noreferrer" target="_blank">571-03-13</a>
            </p>
            <p>Федеральнаая служба по труду и занятости : <a href={`tel:${cleanNum(`8-800-707-88-41`)}`} rel="noreferrer" target="_blank">8-800-707-88-41</a>
            </p>
            <p>Российский красный крест : <a href={`tel:${cleanNum(`+7(962)68-68-112`)}`} rel="noreferrer" target="_blank">+7(962)68-68-112</a>, <a href={`tel:${cleanNum(`571-10-91`)}`} rel="noreferrer" target="_blank">571-10-91</a>
            </p>
            <p>Районный центр волонтеров: <a href={`tel:${cleanNum(`+7(931)391-01-37`)}`} rel="noreferrer" target="_blank">+7(931)391-01-37</a>, <a href={`tel:${cleanNum(`+7(921)959-13-34`)}`} rel="noreferrer" target="_blank">+7(921)959-13-34</a>
            </p>
          </div>
        </div></td></tr>
        <tr><td colSpan={`2`}><div id={`juridicalInfo`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Юридическая информация</div>
          <div className="sf-accordion__content hide">
            <div><a href={`assets/managersSpace/contactsPage/pdf/EGRUL.pdf`} target={`_blank`} >Сведения о юридическом лице</a></div>
            <div><a href={`assets/managersSpace/contactsPage/pdf/licence_2019.pdf`} target={`_blank`} >Лицензия</a></div>
            <div><a href={`assets/managersSpace/contactsPage/pdf/OGRN.jpg`} target={`_blank`} >Свидетельство о регистрации</a></div>
            <div id={`openValues`} className="sf-accordion__panel">
              <div className="sf-accordion__trigger-panel" onClick={(e) => {
                openClick(e);
              }}>Показатели доступности и качества МП</div>
              <div className="sf-accordion__content hide">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p><strong>N п/п</strong></p>
                      </td>
                      <td><strong>Критерии доступности и качества медицинской помощи (единицы измерения)</strong></td>
                      <td><strong>2019</strong> <strong>год</strong></td>
                      <td><strong>2020</strong> <strong>год</strong></td>
                      <td>
                        <p><strong>2021 год</strong></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>1</p>
                      </td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>
                        <p>5</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <p><strong>1. Критерии качества медицинской помощи</strong></p>
                      </td>
                    </tr>
                    <tr>
                      <td>1.1</td>
                      <td>Удовлетворенность населения медицинской помощью (процентов от числа опрошенных)</td>
                      <td>70</td>
                      <td>70</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td>1.2</td>
                      <td>Смертность населения в трудоспособном возрасте (число умерших в трудоспособном возрасте на 100
                      тыс. человек населения)
                      </td>
                      <td>416,3</td>
                      <td>416,3</td>
                      <td>416,3</td>
                    </tr>
                    <tr>
                      <td>1.3</td>
                      <td>Доля умерших в трудоспособном возрасте на дому в общем количестве умерших в трудоспособном
                      возрасте
                      </td>
                      <td>21,5</td>
                      <td>21,5</td>
                      <td>21,5</td>
                    </tr>
                    <tr>
                      <td>1.4</td>
                      <td>Материнская смертность (на 100 тыс. человек, родившихся живыми)</td>
                      <td>17,6</td>
                      <td>17,6</td>
                      <td>17,6</td>
                    </tr>
                    <tr>
                      <td>1.5</td>
                      <td>Младенческая смертность (на 1000 человек, родившихся живыми)</td>
                      <td>3,9</td>
                      <td>3,8</td>
                      <td>3,8</td>
                    </tr>
                    <tr>
                      <td>1.6</td>
                      <td>Доля умерших в возрасте до 1 года на дому в общем количестве умерших в возрасте до 1 года</td>
                      <td>9,0</td>
                      <td>9,0</td>
                      <td>9,0</td>
                    </tr>
                    <tr>
                      <td>1.7</td>
                      <td>Смертность&nbsp;&nbsp; детей&nbsp;&nbsp; в&nbsp;&nbsp; возрасте
                      0-4 &nbsp;лет&nbsp;&nbsp;&nbsp; (на 1000 родившихся живыми)
                      </td>
                      <td>4,6</td>
                      <td>4,6</td>
                      <td>4,6</td>
                    </tr>
                    <tr>
                      <td>1.8</td>
                      <td>Смертность&nbsp;&nbsp; населения&nbsp;&nbsp; (число&nbsp;&nbsp; умерших&nbsp;&nbsp; на&nbsp;&nbsp;&nbsp; 1000&nbsp;&nbsp; человек</td>
                      <td>11,6</td>
                      <td>11,6</td>
                      <td>11,6</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>населения)</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>1.9</td>
                      <td>Доля умерших в возрасте 0-4 лет на дому в общем количестве умерших в возрасте 0-4 лет</td>
                      <td>10,0</td>
                      <td>10,0</td>
                      <td>10,0</td>
                    </tr>
                    <tr>
                      <td>1.10</td>
                      <td>Смертность детей в возрасте 0-17 лет (на 100 тыс. человек населения соответствующего возраста)
                      </td>
                      <td>62,0</td>
                      <td>60,0</td>
                      <td>60,0</td>
                    </tr>
                    <tr>
                      <td>1.11</td>
                      <td>Доля умерших в возрасте 0-17 лет на дому в общем количестве умерших в возрасте 0-17 лет</td>
                      <td>10,5</td>
                      <td>10,5</td>
                      <td>10,5</td>
                    </tr>
                    <tr>
                      <td>1.12</td>
                      <td>
                      Доля впервые выявленных заболеваний при профилактических медицинских осмотрах и диспансеризации в
                      общем количестве

                        <p>впервые в жизни зарегистрированных заболеваний в течение года</p>
                      </td>
                      <td>58,0</td>
                      <td>59,5</td>
                      <td>59,5</td>
                    </tr>
                    <tr>
                      <td>1.13</td>
                      <td>
                      Доля пациентов со злокачественными новообразованиями,

                        <p>состоящих на учете с момента установления диагноза пять лет и более, в общем числе пациентов со
                        злокачественными новообразованиями, состоящих на учете</p>
                      </td>
                      <td>56,0</td>
                      <td>56,2</td>
                      <td>56,2</td>
                    </tr>
                    <tr>
                      <td>1.14</td>
                      <td>Доля впервые выявленных случаев онкологических заболеваний на ранних стадиях (I и II стадии) в
                      общем количестве выявленных случаев онкологических заболеваний в течение года
                      </td>
                      <td>58,0</td>
                      <td>59,5</td>
                      <td>59,5</td>
                    </tr>
                    <tr>
                      <td>1.15</td>
                      <td>
                      Доля пациентов со злокачественными новообразованиями, выявленных активно, в общем количестве
                      пациентов со

                        <p>злокачественными новообразованиями, взятых под диспансерное наблюдение</p>
                      </td>
                      <td>30,0</td>
                      <td>30,0</td>
                      <td>30,0</td>
                    </tr>
                    <tr>
                      <td>1.16</td>
                      <td>Доля лиц, инфицированных вирусом иммунодефицита человека, получающих антиретровирусную терапию, в
                      общем количестве лиц, инфицированных вирусом иммунодефицита человека
                      </td>
                      <td>80</td>
                      <td>85</td>
                      <td>90</td>
                    </tr>
                    <tr>
                      <td>1.17</td>
                      <td>
                      Доля впервые выявленных случаев фиброзно-кавернозного

                        <p>туберкулеза в общем количестве выявленных случаев туберкулеза в течение года</p>
                      </td>
                      <td>0,6</td>
                      <td>0,6</td>
                      <td>0,6</td>
                    </tr>
                    <tr>
                      <td>1.18</td>
                      <td>Доля пациентов с инфарктом миокарда, госпитализированных в первые 12 часов от начала заболевания,
                      в общем количестве госпитализированных пациентов с инфарктом миокарда
                      </td>
                      <td>41,0</td>
                      <td>41,0</td>
                      <td>41,0</td>
                    </tr>
                    <tr>
                      <td>1.19</td>
                      <td>Доля пациентов с острым инфарктом миокарда, которым проведено стентирование коронарных артерий, в
                      общем количестве пациентов с острым инфарктом миокарда, имеющих показания к его проведению
                      </td>
                      <td>63</td>
                      <td>63</td>
                      <td>63</td>
                    </tr>
                    <tr>
                      <td>1.20</td>
                      <td>
                      Доля пациентов с острым и повторным инфарктом миокарда, которым выездной бригадой скорой медицинской
                      помощи проведен тромболизис, в общем количестве пациентов с острым &nbsp;и

                        <p>повторным&nbsp;&nbsp; инфарктом&nbsp;&nbsp; миокарда,&nbsp;&nbsp; имеющих&nbsp;&nbsp; показания&nbsp;&nbsp; к&nbsp; &nbsp;его</p>
                      </td>
                      <td>0,3</td>
                      <td>0,3</td>
                      <td>0,3</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>проведению, которым оказана медицинская помощь выездными бригадами скорой медицинской помощи</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>1.21</td>
                      <td>
                      Доля пациентов с острым инфарктом миокарда, которым проведена тромболитическая терапия, в общем
                      количестве

                        <p>пациентов с острым инфарктом миокарда, имеющих показания к ее проведению</p>
                      </td>
                      <td>0,9</td>
                      <td>0,9</td>
                      <td>0,9</td>
                    </tr>
                    <tr>
                      <td>1.22</td>
                      <td>
                      Доля пациентов с острыми цереброваскулярными болезнями, госпитализированных в первые шесть часов от
                      начала

                        <p>заболевания, в общем количестве госпитализированных в первичные сосудистые отделения или
                        региональные сосудистые центры пациентов с острыми цереброваскулярными болезнями</p>
                      </td>
                      <td>30,0</td>
                      <td>30,0</td>
                      <td>30,0</td>
                    </tr>
                    <tr>
                      <td>1.23</td>
                      <td>Доля пациентов с острым ишемическим инсультом, которым проведена тромболитическая терапия, в общем
                      количестве пациентов с острым ишемическим инсультом, госпитализированных в первичные сосудистые
                      отделения или региональные сосудистые центры
                      </td>
                      <td>5,0</td>
                      <td>5,0</td>
                      <td>5,0</td>
                    </tr>
                    <tr>
                      <td>1.24</td>
                      <td>
                      Количество обоснованных жалоб, в том числе на отказ в оказании медицинской помощи, предоставляемой в
                      рамках

                        <p>Территориальной программы (доля от числа зарегистрированных обращений)</p>
                      </td>
                      <td>0,07</td>
                      <td>0,07</td>
                      <td>0,07</td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <p><strong>2. Критерии доступности медицинской помощи</strong></p>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="3">2.1</td>
                      <td>
                      Обеспеченность населения врачами (на 10 тыс. человек

                        <p>населения), в том числе оказывающими медицинскую помощь в амбулаторных и стационарных
                        условиях</p>
                      </td>
                      <td>38,9</td>
                      <td>38,7</td>
                      <td>38,7</td>
                    </tr>
                    <tr>
                      <td>в амбулаторных условиях</td>
                      <td>20,5</td>
                      <td>20,4</td>
                      <td>20,4</td>
                    </tr>
                    <tr>
                      <td>в стационарных условиях</td>
                      <td>12,9</td>
                      <td>12,8</td>
                      <td>12,8</td>
                    </tr>
                    <tr>
                      <td rowSpan="3">2.2</td>
                      <td>
                      Обеспеченность населения средним медицинским персоналом (на 10 тыс. человек населения), в том числе
                      оказывающим

                        <p>медицинскую помощь в амбулаторных и стационарных условиях</p>
                      </td>
                      <td>91,8</td>
                      <td>92,88</td>
                      <td>92,88</td>
                    </tr>
                    <tr>
                      <td>в амбулаторных условиях</td>
                      <td>52,4</td>
                      <td>52,94</td>
                      <td>52,94</td>
                    </tr>
                    <tr>
                      <td>в стационарных условиях</td>
                      <td>33,4</td>
                      <td>33,94</td>
                      <td>33,94</td>
                    </tr>
                    <tr>
                      <td>2.3</td>
                      <td>Доля расходов на оказание медицинской помощи в условиях дневных стационаров в общих расходах на
                      Территориальную программу (процент)
                      </td>
                      <td>5,59</td>
                      <td>5,58</td>
                      <td>5,58</td>
                    </tr>
                    <tr>
                      <td>2.4</td>
                      <td>Доля расходов на оказание медицинской помощи в амбулаторных условиях в неотложной форме в общих
                      расходах на Территориальную программу (процент)
                      </td>
                      <td>1,76</td>
                      <td>1,72</td>
                      <td>1,72</td>
                    </tr>
                    <tr>
                      <td>2.5</td>
                      <td>Доля охвата диспансеризацией взрослого населения, подлежащего диспансеризации</td>
                      <td>88</td>
                      <td>96</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>2.6</td>
                      <td>Доля охвата профилактическими медицинскими осмотрами взрослого населения</td>
                      <td>75</td>
                      <td>80</td>
                      <td>85</td>
                    </tr>
                    <tr>
                      <td>2.7</td>
                      <td>Доля охвата профилактическими медицинскими осмотрами детей (процент от общего количества детей,
                      подлежащих профилактическим осмотрам)
                      </td>
                      <td>97,5</td>
                      <td>97,5</td>
                      <td>97,5</td>
                    </tr>
                    <tr>
                      <td>2.8</td>
                      <td>Доля пациентов, получивших специализированную медицинскую помощь в стационарных условиях в
                      медицинских организациях, подведомственных федеральным органам исполнительной власти, в общем числе
                      пациентов, которым была оказана медицинская помощь в стационарных условиях в рамках Территориальной
                      программы ОМС
                      </td>
                      <td>15,4</td>
                      <td>15,5</td>
                      <td>15,5</td>
                    </tr>
                    <tr>
                      <td>2.9</td>
                      <td>Доля посещений выездной патронажной службой на дому для оказания паллиативной медицинской помощи
                      взрослому населению в общем количестве посещений по паллиативной медицинской помощи взрослому
                      населению (процент)
                      </td>
                      <td>72,0</td>
                      <td>73,0</td>
                      <td>73,0</td>
                    </tr>
                    <tr>
                      <td>2.10</td>
                      <td>Доля женщин, которым проведено экстракорпоральное оплодотворение, в общем количестве женщин с
                      бесплодием (процент)
                      </td>
                      <td>35,0</td>
                      <td>35,0</td>
                      <td>35,0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>Закон Санкт-Петербурга от 26.12.2017 N 880-159 {`"`}О Территориальной программе государственных гарантий бесплатного оказания гражданам медицинской помощи в Санкт-Петербурге на 2018 год и на плановый период 2019 и 2020 годов` (принят ЗС СПб 20.12.2017){`"`} -
              <a href={`assets/managersSpace/contactsPage/pdf/zakon_spb_ot_19.12.2018_no_779-168_-_o_territorialnoy_programme_gosud.garantiy_na_2019_god.pdf`} target={`_blank`} rel={`nofollow`}>Скачать</a></div>
            <div>Территориальная программа государственных гарантий бесплатного оказания гражданам медицинской помощи. <a href={`assets/managersSpace/contactsPage/pdf/zakon_spb_ot_19.12.2018_no_779-168_-_o_territorialnoy_programme_gosud.garantiy_na_2019_god.pdf`} target={`_blank`} rel={`nofollow`}>Скачать</a></div>
            <div>Программа государственных гарантий бесплатного оказания гражданам медицинской помощи.  <a href={`assets/managersSpace/contactsPage/pdf/prog_gosgar_2020.pdf`} target={`_blank`} rel={`nofollow`}>Скачать</a></div>
            <div>Учредители СПб ГБУЗ {`" `}Детская городская поликлиника № 29 {`"`}:</div>
            <div>
              Комитет по здравоохранению Санкт-Петербурга
              Адрес: 191023, Санкт-Петербург, Малая Садовая ул., д. 1
              Единая информационно-справочная служба: (812) 63-555-64
              Приемная: (812) 571-3406
              Медицинская справочная служба: (812) 63-555-63
              Дежурный врач-инспектор: (812) 571-09-06
              E-mail kzdrav@gov.spb.ru
              http://zdrav.spb.ru
            </div>
            <div>
              Комитет имущественных отношений Санкт-Петербурга
              Фактический адрес Комитета: 191144, Санкт-Петербург, ул. Новгородская, д.20, литера А.
              Юридический адрес Комитета и почтовый адрес для корреспонденции: 191144, Санкт-Петербург, ул. Новгородская, д.20, литера А.
              Отдел документационного обеспечения Комитета имущественных отношений Санкт-Петербурга
              Время работы Отдела в рабочие дни с 9 до 18 часов (в пятницу до 17 часов). Обед с 12.30 до 13.20.
              576-75-15 – справки по регистрации входящей корреспонденции;
              576-25-15
              576-49-55
              576-22-77 – справки по письмам граждан;
              576-22-69
              576-49-10 – факс.
              Интернет сайт http://www.commim.spb.ru/
            </div>
          </div>
        </div>
        </td></tr>
        <tr><td colSpan={`2`}><div id={`rulesAndDuties`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Права и обязанности граждан</div>
          <div className="sf-accordion__content hide">
            <div>Перечень оснований для отказа в оплате медицинской помощи (уменьшении оплаты медицинской помощи). Приложение №8 к приказу ФФОМС от 28.02.2019 №36. <a href={`assets/managersSpace/contactsPage/pdf/perechen_osn_otkaz_v_med_pomoshi.pdf`} target={`_blank`}>Скачать</a></div>
            <h1><strong>&nbsp;Пациент имеет право на:</strong></h1>
            <p>1) выбор врача и выбор медицинской организации в соответствии с настоящим Федеральным законом;</p>
            <p>2) профилактику, диагностику, лечение, медицинскую реабилитацию в медицинских организациях в условиях, соответствующих санитарно-гигиеническим требованиям;</p>
            <p>3) получение консультаций врачей-специалистов;</p>
            <p>4) облегчение боли, связанной с заболеванием и (или) медицинским вмешательством, доступными методами и лекарственными препаратами;</p>
            <p>5) получение информации о своих правах и обязанностях, состоянии своего здоровья, выбор лиц, которым в интересах пациента может быть передана информация о состоянии его здоровья;</p>
            <p>6) получение лечебного питания в случае нахождения пациента на лечении в стационарных условиях;</p>
            <p>7) защиту сведений, составляющих врачебную тайну;</p>
            <p>8) отказ от медицинского вмешательства;</p>
            <p>9) возмещение вреда, причиненного здоровью при оказании ему медицинской помощи;</p>
            <p>10) допуск к нему адвоката или законного представителя для защиты своих прав;</p>
            <p>11) допуск к нему священнослужителя, а в случае нахождения пациента на лечении в стационарных условиях — на предоставление условий для отправления религиозных обрядов, проведение которых возможно в стационарных условиях, в том числе на предоставление отдельного помещения, если это не нарушает внутренний распорядок медицинской организации.</p>
            <h1><strong>Обязанности граждан в сфере охраны здоровья:</strong></h1>
            <p>1) Граждане обязаны заботиться о сохранении своего здоровья.</p>
            <p>2) Граждане в случаях, предусмотренных законодательством Российской Федерации, обязаны проходить медицинские осмотры, а граждане, страдающие заболеваниями, представляющими опасность для окружающих, в случаях, предусмотренных законодательством Российской Федерации, обязаны проходить медицинское обследование и лечение, а также заниматься профилактикой этих заболеваний.</p>
            <p>3) Граждане, находящиеся на лечении, обязаны соблюдать режим лечения, в том числе определенный на период их временной нетрудоспособности, и правила поведения пациента в медицинских организациях.</p>
          </div>
        </div>
        </td></tr>
        <tr><td colSpan={`2`}><div id={`structure`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Структурные подразделения</div>
          <div className="sf-accordion__content hide">
            <table>
              <tbody>
                <tr>
                  <th>Структурное подразделение</th>
                  <th>Руководитель</th>
                  <th>Должность</th>
                  <th>Телефон</th>
                  <th>Сайт</th>
                  <th>E-mail</th>
                  <th>Положение</th>
                </tr>
                <tr>
                  <td>Отдел кадров</td>
                  <td>Протасова Наталия Владимировна</td>
                  <td>Начальник отдела кадров</td>
                  <td>(812)559-07-21</td>
                  <td>-</td>
                  <td>pd29@zdrav.spb.ru</td>
                  <td>
                    <a href="" target={`_blank`}>Скачать</a>
                  </td>
                </tr>
                <tr>
                  <td>Бухгалтерия</td>
                  <td>Плеханова Людмила Викторовна</td>
                  <td>Главный бухгалтер</td>
                  <td><a href={`tel://88125739847`} rel={`nofollow`} target={`"_blank`}>(812)573-98-47</a></td>
                  <td>-</td>
                  <td>dgp29buh@mail.ru</td>
                  <td>
                    <a href="" target={`_blank`}>Скачать</a>
                  </td>
                </tr>
                <tr>
                  <td>Администрация</td>
                  <td>Гордеева Ольга Викторовна</td>
                  <td>И. О. Главного врача</td>
                  <td>(812)559-07-21</td>
                  <td>-</td>
                  <td>pd29@zdrav.spb.ru</td>
                  <td>
                    <a href="" target={`_blank`}>Скачать</a>
                  </td>
                </tr>
                <tr>
                  <td>Административно-хозяйственная часть</td>
                  <td>Семичев Кирилл Николаевич</td>
                  <td>Зам. гл. врача по технике</td>
                  <td>(812)559-07-21</td>
                  <td>-</td>
                  <td>pd29@zdrav.spb.ru</td>
                  <td>
                    <a href="" target={`_blank`}>Скачать</a>
                  </td>
                </tr>
                <tr>
                  <td>Дошкольно Школьное Отделение 29</td>
                  <td>Музыченко Ольга Юрьевна</td>
                  <td>Заведующая отделением</td>
                  <td>(812)559-07-21</td>
                  <td>-</td>
                  <td>pd29@zdrav.spb.ru</td>
                  <td>
                    <a href="" target={`_blank`}>Скачать.</a>
                  </td>
                </tr>
                <tr>
                  <td>Дошкольно Школьное Отделение 61</td>
                  <td>Сукнева Нина Анатольевна</td>
                  <td>Заведующая отделением</td>
                  <td>(812)559-07-21</td>
                  <td>-</td>
                  <td>pd29@zdrav.spb.ru</td>
                  <td>
                    <a href="" target={`_blank`}>Скачать.</a>
                  </td>
                </tr>
                <tr>
                  <td>Консультативно - диагностический центр</td>
                  <td>Гарлыева Аина Юсуповна</td>
                  <td>Заведующая отделением</td>
                  <td>(812)559-07-21</td>
                  <td>-</td>
                  <td>pd29@zdrav.spb.ru</td>
                  <td>
                    <a href="" target={`_blank`}>Скачать.</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </td></tr>
        <tr><td colSpan={`2`}><div id={`drugsInfo`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Лекарственные препараты</div>
          <div className="sf-accordion__content hide">
            <div>Перечень лекарственных препаратов, отпускаемых населению в соответствии с Перечнем групп населения и категорий заболеваний, при амбулаторном лечении которых лекарственные средства и изделия медицинского назначения отпускаются по рецептам врачей бесплатно, а также в соответствии с Перечнем групп населения, при амбулаторном лечении которых лекарственные средства отпускаются по рецептам врачей с 50-процентной скидкой. <a href={`assets/managersSpace/contactsPage/pdf/perechen_ls_s_50-skidkoj.pdf`} rel={`nofollow`} target={`_blank`}>Скачать</a></div>
            <div>Перечень жизненно необходимых и важнейших лекарственных препаратов РФ на 2020 год. <a href={`assets/managersSpace/contactsPage/pdf/spisok_lp.pdf`} target={`_blank`}>Скачать</a></div>
            <div>Перечень лекарственных препаратов для медицинского применения, в том числе лекарственных препаратов для медицинского применения, назначаемых по решению врачебных комиссий медицинских организаций. <a href={`assets/managersSpace/contactsPage/pdf/perechen_po_resheniyu_komissij.pdf`} rel={`nofollow`} target={`_blank`}>Скачать</a></div>
            <div>Перечень лекарственных препаратов, предназначенных для обеспечения лиц, больных гемофилией, муковисцидозом, гипофизарным нанизмом, болезнью Гоше, злокачественными новообразованиями лимфоидной, кроветворной и родственных им тканей, рассеянным склерозом, лиц после трансплантации органов и (или) тканей. <a href={`assets/managersSpace/contactsPage/pdf/perechen_ls_dlya_gemofilii.pdf`} rel={`nofollow`} target={`_blank`}>Скачать</a></div>
            <div>Льготное лекарственное обеспечение в СПб. <a href={`http://zdrav.spb.ru/ru/for-people/lgotnie_lekarstva/`} target={`_blank`}>Скачать</a></div>
          </div>
        </div>
        </td></tr>
        <tr><td colSpan={`2`}><div id={`insuranceInfo`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Страховые компании</div>
          <div className="sf-accordion__content hide"><AsyncComponentWrapped method={{
            sql: sqlRequests.selectContactsPageContent,
          }} autostart={true} api={api} /></div>
        </div>
        </td></tr>
        <tr><td colSpan={`2`}><div id={`medicineValuesInfo`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Информация о медицинской деятельности медицинской организации</div>
          <div className="sf-accordion__content hide">
            Подразделение оказывает первичную медико-санитарную помощь гражданам по территориально-участковому принципу, предусматривающему формирование групп обслуживаемого населения по месту жительства, месту работы или учебы с учетом положений статьи 21 федерального закона «Об основах охраны здоровья граждан Российской Федерации»
          </div>
        </div>
        </td></tr>
        <tr><td colSpan={`2`}><div id={`medicineProfilesInfo`} className="sf-accordion__panel">
          <div className="sf-accordion__trigger-panel" onClick={(e) => {
            openClick(e);
          }}>Информация о видах медицинской помощи</div>
          <div className="sf-accordion__content hide">
            <label>Профили оказания медицинской помощи</label>
            <p> аллергология и иммунология
            </p>
            <p title="вакцинация (проведение профилактических прививок)" className="tag">
              вакцинация (проведение профилактических прививок)
            </p>
            <p title="гастроэнтерология" className="tag">
              гастроэнтерология
            </p>
            <p title="детская кардиология" className="tag">
              детская кардиология
            </p>
            <p title="детская урология-андрология" className="tag">
              детская урология-андрология
            </p>
            <p title="детская хирургия" className="tag">
              детская хирургия
            </p>
            <p title="детская эндокринология" className="tag">
              детская эндокринология
            </p>
            <p title="инфекционные болезни" className="tag">
              инфекционные болезни
            </p>
            <p title="клиническая лабораторная диагностика" className="tag">
              клиническая лабораторная диагностика
            </p>
            <p title="лечебная физкультура" className="tag">
              лечебная физкультура
            </p>
            <p title="медико-социальная помощь" className="tag">
              медико-социальная помощь
            </p>
            <p title="медицинская реабилитация" className="tag">
              медицинская реабилитация
            </p>
            <p title="медицинская статистика" className="tag">
              медицинская статистика
            </p>
            <p title="медицинские осмотры профилактические" className="tag">
              медицинские осмотры профилактические
            </p>
            <p title="медицинский массаж" className="tag">
              медицинский массаж
            </p>
            <p title="неврология" className="tag">
              неврология
            </p>
            <p title="неотложная медицинская помощь" className="tag">
              неотложная медицинская помощь
            </p>
            <p title="организация сестринского дела" className="tag">
              организация сестринского дела
            </p>
            <p title="оториноларингология (за исключением кохлеарной имплантации)" className="tag">
              оториноларингология (за исключением кохлеарной имплантации)
            </p>
            <p title="офтальмология" className="tag">
              офтальмология
            </p>
            <p title="педиатрия" className="tag">
              педиатрия
            </p>
            <p title="пульмонология" className="tag">
              пульмонология
            </p>
            <p title="сестринское дело" className="tag">
              сестринское дело
            </p>
            <p title="сестринское дело в педиатрии" className="tag">
              сестринское дело в педиатрии
            </p>
            <p title="травматология и ортопедия" className="tag">
              травматология и ортопедия
            </p>
            <p title="ультразвуковая диагностика" className="tag">
              ультразвуковая диагностика
            </p>
            <p title="управление сестринской деятельностью" className="tag">
              управление сестринской деятельностью
            </p>
            <p title="физиотерапия" className="tag">
              физиотерапия
            </p>
            <p title="функциональная диагностика" className="tag">
              функциональная диагностика
            </p>
            <p title="экспертиза временной нетрудоспособности" className="tag">
              экспертиза временной нетрудоспособности
            </p>
            <p title="экспертиза качества медицинской помощи" className="tag">
              экспертиза качества медицинской помощи
            </p>
          </div>
        </div>
        </td></tr>
        <tr><td colSpan={`2`}><div className={`blockName`}>Полезные ссылки:</div></td></tr>
        <tr><td colSpan={`2`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=99`} target={`blank`} >Написать в поликлинику</a></td></tr>
        <tr><td colSpan={`2`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=96`} target={`blank`} >Оставить отзыв</a></td></tr>
        <tr><td colSpan={`2`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=97`} target={`blank`} >Написать Главному врачу</a></td></tr>
        <tr><td colSpan={`2`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=6`} target={`blank`} >Оценка качества</a></td></tr>
        <tr><td colSpan={`2`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=95`} target={`blank`} >Обращение</a></td></tr>
        <tr><td colSpan={`2`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=94`} target={`blank`} >Благодарность</a></td></tr>
      </tbody></table>
    </div>
  </div>;
};
PageContacts.propTypes = {
  renderCleanLink: PropTypes.func.isRequired,
  renderCustomLink: PropTypes.func.isRequired,
};

export {
  PageContacts,
};
