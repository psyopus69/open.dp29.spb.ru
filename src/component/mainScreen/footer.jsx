import React from "react";
import {PropTypes} from "prop-types";
import {TimeWork} from "../pages/elements/timeWork.jsx";
import {mockPageInfo} from "../../MOCK/staticSets";
import {PhonesOperators} from "../pages/elements/phonesOperators.jsx";
import staticFunctions from "../../FUNC/staticFunc";
import PageCounter from "../pages/elements/pageCounter.jsx";
import {apiCounter} from "../../API/api";

const allJsCallback = (menuId, addMenuId) => { //  cleanAllSelected not work because async dom vue when it start, so not know, what it made, whatever go clean cicle here
  const {colorSelected, selectedCssClassName} = staticFunctions;
  const h = document.querySelectorAll(`.${selectedCssClassName}`);
  for (let i = 0; i < h.length; i++) {
    h[i].classList.remove(selectedCssClassName);
  }
  colorSelected(document.querySelector(`#root table.menuMain${(addMenuId === undefined || addMenuId === null) ? `` : addMenuId} td#mainMenu_${menuId}`));
  colorSelected(document.querySelector(`#root .footer table.footerTableLinks tr td div#menuFooter_${menuId}`));
};
const {schedule, phones} = mockPageInfo;
const Footer = (props) => {
  const {renderCustomLink} = props;
  const {checkClassByPass, checkClassBySearch} = staticFunctions;
  return <div className={`footer`}>
    <table className={`mainFTable`}><tbody>
      <tr>
        <td>
          <div className={`textName`}><img src={`assets/img/svg/home.svg`} alt={`About`} /><div/>
          </div>
          <div className={`footerItemsAbout`}>
            <div><img src={`assets/img/svg/we.svg`} alt={`О нас`} />Мы - Детская поликлиника Калининского района города Санкт-Петербурга.</div>
            <div><img src={`assets/img/svg/locationIn.svg`} alt={`Расположение`} />Прикрепленное населения - 25000 человек.</div>
            <div><img src={`assets/img/svg/branches.svg`} alt={`Коллектив`} />Наш Коллектив насчитывает 240 различных специалистов.</div>
            <div><img src={`assets/img/svg/health.svg`} alt={`Наша цель`} />Мы работаем на благо Вашего здоровья!</div>
            <div><img src={`assets/img/svg/footerTime.svg`} alt={`Время работы`} /><TimeWork scheduleWork={schedule.work} msg={`Поликлиника открыта`} /></div>
            <div><PhonesOperators msg={{msg: `Регистратура 29`, br: true}} branch={`29`} phones={phones.operatorsMainRegs} /></div>
            <div><PhonesOperators msg={{msg: `Регистратура 61`, br: true}} branch={`61`} phones={phones.operatorsMainRegs} /></div>
            <div><PhonesOperators msg={{msg: `Горячая линия 29`, br: true}} branch={`29Hot`} phones={phones.operatorsMainRegs} /></div>
            <div><PhonesOperators msg={{msg: `Горячая линия 61`, br: true}} branch={`61Hot`} phones={phones.operatorsMainRegs} /></div>
            <div><PhonesOperators msg={{msg: `Администрация ДПО 29 `, br: true, addHtml: <React.Fragment><br/>(с 09-00 до 17-00)</React.Fragment>}} branch={`29`} phones={phones.administration} /></div>
            <div><PhonesOperators msg={{msg: `Администрация ДПО 61 `, br: true, addHtml: <React.Fragment><br/>(с 09-00 до 17-00)</React.Fragment>}} branch={`61`} phones={phones.administration} /></div>
          </div>
        </td>
        <td>
          <div className={`textName`}><img src={`assets/img/svg/link2.svg`} alt={`links`} /><div/></div>
          <table className={`footerTableLinks`}><tbody>
            <tr><td><div className={checkClassByPass(`/contacts`, ` menuSelected`)} id={`menuFooter_contacts`}>{renderCustomLink({
              name: `Контакты`,
              to: `/contacts`,
              anchor: `logoTimeWork`,
              callback: () => {
                allJsCallback(`contacts`);
              },
            })}</div></td></tr>
            <tr><td><div className={checkClassBySearch(`/conditions`, `condId`, `admissionСonditions`, `menuSelected`)} id={`menuFooter_conditions`}>{renderCustomLink({
              name: `Условия приема`,
              to: `/conditions`,
              paramName: `condId`,
              paramValue: `receptionStatement`,
              anchor: `logoTimeWork`,
              callback: () => {
                allJsCallback(`conditions`, null);
              }
            })}</div></td></tr>
            <tr><td><div className={checkClassByPass(`/recording`, ` menuSelected`)} id={`menuFooter_recording`}>{renderCustomLink({
              name: `Запись`,
              to: `/recording`,
              anchor: `logoTimeWork`,
              callback: () => {
                allJsCallback(`recording`, `Add`);
              }
            })}</div></td></tr>
            <tr><td><div className={checkClassByPass(`/schedule`, ` menuSelected`)} id={`menuFooter_schedule`}>{renderCustomLink({
              name: `Расписание`,
              to: `/schedule`,
              anchor: `logoTimeWork`,
              callback: () => {
                allJsCallback(`schedule`, `Add`);
              }
            })}</div></td></tr>
            <tr><td><div className={checkClassByPass(`/payServices`, ` menuSelected`)} id={`menuFooter_payServices`}>{renderCustomLink({
              name: `Платные услуги`,
              to: `/payServices`,
              anchor: `logoTimeWork`,
              callback: () => {
                allJsCallback(`payServices`, `Add`);
              }
            })}</div></td></tr>
            <tr><td><div className={`menuMainChild`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=97`} target={`blank`} >Написать Главному врачу</a> </div></td></tr>
            <tr><td><div className={`menuMainChild`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=99`} target={`blank`} >Оставить отзыв</a></div></td></tr>
            <tr><td><div className={`menuMainChild`}><a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=6`} target={`blank`} >Оценка качества</a></div></td></tr>
          </tbody></table>
        </td>
        <td>
          <div className={`textName`}><img src={`assets/img/svg/share.svg`} alt={`share`} /><div/></div>
          <div className={`footerThirdMainTd`}>
            <div className={`footerDotted`}>Поделиться</div>
            <table className={`footerTableLinks`}><tbody>
              <tr>
                <td>
                  <div><a href="https://vk.com/share.php?url=https://dp29.spb.ru/" rel="noreferrer" target="_blank"><img src={`assets/img/svg/vk4.svg`} alt={`share`} /></a></div>
                </td></tr>
              <tr><td>
                <div><a href={`https://telegram.me/share/url?url=https://dp29.spb.ru/&text=Моя поликлиника`} rel="noreferrer" target="_blank"><img src={`assets/img/svg/telegram.svg`} alt={`share`} /></a></div>
              </td></tr>
              <tr><td>
                <div><a href="whatsapp://send?text=https://dp29.spb.ru/" rel="noreferrer" target="_blank"><img src={`assets/img/svg/whatsapp.svg`} alt={`share`} /></a></div>
              </td></tr>
              <tr><td>
                <div><a href={`viber://forward?text=https://dp29.spb.ru`} rel="noreferrer" target="_blank" ><img src={`assets/img/svg/viber.svg`} alt={`share`} /></a></div>
              </td></tr>
              <tr><td>
                <div><a href="https://www.facebook.com/sharer/sharer.php?u=#url" rel="noreferrer" target="_blank"><img src={`assets/img/svg/facebook.svg`} alt={`share`} /></a></div>
              </td>
              </tr>
              <tr><td>
                <div><a href="https://twitter.com/intent/tweet?url=https://dp29.spb.ru&text=%D0%9C%D0%BE%D1%8F%20%D0%BF%D0%BE%D0%BB%D0%B8%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0&via=" rel="noreferrer" target="_blank"><img src={`assets/img/svg/twitter.svg`} alt={`share`} /></a></div>
              </td>
              </tr>
            </tbody></table>
          </div>
        </td>
        <td>
          <div className={`textName`}><img src={`assets/img/svg/vk1.svg`} alt={`vk`} /><div/></div>
          <div className={`footerItemsAbout`}>
            <div id="vk_groups" />
            <div>
            </div>
          </div>
        </td>
      </tr>
      <tr><td colSpan={`4`} className={`footOne footerInfoLocation`}>
        <PageCounter api={apiCounter} autostart={true} method={{
          sql: `getCount`,
          params: `&pageName=reactMain`,
        }} />
        195274, Санкт-Петербург,
        ул. Демьяна Бедного,дом 18,корпус 3.,
        Е-mail: <a href="mailto:pd29@zdrav.spb.ru?subject=Сообщение с сайта СПб ГБУЗ ДГП29">pd29@zdrav.spb.ru.
        </a>
      </td></tr>
      <tr className={`footerCopyrightTr`}><td colSpan={`4`} className={`footOne`}>
        <div className={`copyRight`}><img src={`assets/img/svg/copyright3.svg`} alt={`copyright`} /> Copyright 2020</div>
      </td></tr>
    </tbody></table>
  </div>;
};
Footer.propTypes = {
  renderCustomLink: PropTypes.func.isRequired,
};
export {
  Footer,
};
