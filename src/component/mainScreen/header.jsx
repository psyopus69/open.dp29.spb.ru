import React from "react";
import {PropTypes} from "prop-types";
import {mockPageInfo} from "../../MOCK/staticSets";
import {TimeWork} from "../pages/elements/timeWork.jsx";
import {NameOrganization} from "../pages/elements/nameOrganization.jsx";
import {PhonesOperators} from "../pages/elements/phonesOperators.jsx";
// import {Esir} from "../pages/elements/esir.jsx";
import {InputSearchForm} from "../pages/elements/inputSearchForm.jsx";
import staticFunctions from "../../FUNC/staticFunc";
import withForm from "../../HOC/withForm";

const InputSearchFormWrapped = withForm(InputSearchForm);
const {withZeroInt} = staticFunctions;

const Header = (props) => {
  const {organization, forms} = mockPageInfo;
  const {cleanAllSelected, selectedCssClassName} = staticFunctions;
  const {renderWrappedLink, renderCustomLink} = props;
  const scrollNeed = () => {
    const isSafari = window.safari;
    const isIos = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
    if (isSafari || isIos) {
      document.body.scrollTop = 0;
    } else {
      document.querySelector(`div.logoTimeWork`).scrollIntoView({behavior: `smooth`, block: `start`, inline: `nearest`});
    }
    // window.scroll(0, 0);
  };
  return <div className={`header`}>
    <div onClick={() => {
      scrollNeed();
    }} className={`btnUp hide`} />
    <div className={`headerLogo`}>
      <table>
        <tbody>
          <tr>
            <td>{renderWrappedLink({
              name: `Главная`,
              to: `/`,
            }, NameOrganization, {
              organization,
            }, () => {
              const ar = document.querySelector(`table.footerTableLinks .${selectedCssClassName}`);
              if (ar !== null) {
                ar.classList.remove(selectedCssClassName);
              }
              cleanAllSelected();
            })}
            </td>
            <td className={`telZone`}>
              <table><tbody><tr><td><a target={`_blank`} href={`https://www.google.com/maps/dir//%D1%83%D0%BB.+%D0%94%D0%B5%D0%BC%D1%8C%D1%8F%D0%BD%D0%B0+%D0%91%D0%B5%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE,+18+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+3,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+195274/@60.0422005,30.3815585,18.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x469634a0ae0c395b:0x872ead04bbba6897!2m2!1d30.381605!2d60.042163?hl=ru-RU`} >
                                       ДПО 29</a>
              </td><td><img src={`assets/img/svg/heart.svg`} alt={``}/></td></tr></tbody></table>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsMainRegs} branch={`29`} />
                Регистратура
              </div>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsMainRegs} branch={`29Hot`} />
                Горячая линия
              </div>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsHomeRegs} branch={`29`} />
                Вызов врача<br/>
                <small>
                  (с {withZeroInt(mockPageInfo.schedule.phoneHome.startTh)}<sup><small>00</small></sup> до {withZeroInt(mockPageInfo.schedule.phoneHome.endTh)}<sup><small>00</small></sup>)
                </small>
              </div>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsHomeRegs} branch={`weekend`} />
                Вызов врача
                {mockPageInfo.schedule.phoneWeekend.startD}./{mockPageInfo.schedule.phoneWeekend.endD}.
              </div>
            </td>
            <td className={`telZone`}>
              <table><tbody><tr><td><a target={`_blank`} href={`https://www.google.com/maps/dir//%D0%A2%D0%B8%D0%BC%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0,+17+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+2,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/@60.0422637,30.4059584,17.79z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4696335aa728c2b7:0xe28b5aa07f64ae07!2m2!1d30.406774!2d60.042433!3e0`}>
                ДПО 61</a>
              </td><td><img src={`assets/img/svg/heart.svg`} alt={``}/></td></tr></tbody></table>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsMainRegs} branch={`61`} />
                Регистратура
              </div>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsMainRegs} branch={`61Hot`} />
                Горячая линия
              </div>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsHomeRegs} branch={`61`} />
                Вызов врача<br/>
                <small>
                  (с {withZeroInt(mockPageInfo.schedule.phoneHome.startTh)}<sup><small>00</small></sup> до {withZeroInt(mockPageInfo.schedule.phoneHome.endTh)}<sup><small>00</small></sup>)
                </small>
              </div>
              <div>
                <PhonesOperators phones={mockPageInfo.phones.operatorsHomeRegs} branch={`weekend`} />
                Вызов врача
                {mockPageInfo.schedule.phoneWeekend.startD}./{mockPageInfo.schedule.phoneWeekend.endD}.
              </div>
            </td>
            <td>
              <table className={`headerTrueLinks, headerTrueLinksJsControl`}>
                <tbody>
                  <tr>
                    <td id={`resizeBtn`} onClick={(e) => {
                      const rr = document.querySelector(`body #root`);
                      if (!e.currentTarget.classList.contains(`iconVisuallyImpS`)) {
                        rr.style.fontSize = `1.8em`;
                        e.target.classList.add(`iconVisuallyImpS`);
                      } else {
                        rr.style.fontSize = ``;
                        e.target.classList.remove(`iconVisuallyImpS`);
                      }
                    }}>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className={`headerTrueLinks`}>
                <tbody>
                  <tr className={`gosuslugiBanner`}>
                    <td onClick={(e) => {
                      e.currentTarget.children[0].click();
                    }}>
                      <a href={`https://www.gosuslugi.ru/`} target={`_blank`} />
                    </td>
                  </tr>
                  <tr className={`minzdravBanner`}>
                    <td onClick={(e) => {
                      e.currentTarget.children[0].click();
                    }}>
                      <a href={`http://anketa.rosminzdrav.ru/staticogvjustank/86/1`} rel="nofollow" target={`_blank`} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className={`headerTrueLinks`}>
                <tbody>
                  <tr>
                    <td onClick={(e) => {
                      e.currentTarget.children[0].click();
                    }}>
                      <a href={`https://vk.com/public193053214`} target={`_blank`} />
                    </td>
                    <td onClick={(e) => {
                      e.currentTarget.children[0].click();
                    }}>
                      <a rel="nofollow" href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=99`} target={`_blank`} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <InputSearchFormWrapped callback={cleanAllSelected} needCheck={true} customSubmit={true} fields={forms.search.fields} formIdname={`searchForm`} renderCustomLink={renderCustomLink} />
            </td>
          </tr>
          <tr>
            <td colSpan={`4`}>
              <TimeWork msg={`Мы открыты `} scheduleWork={mockPageInfo.schedule.work}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;
};

Header.propTypes = {
  renderCustomLink: PropTypes.func.isRequired,
  renderWrappedLink: PropTypes.func.isRequired,
};

export {
  Header,
};
