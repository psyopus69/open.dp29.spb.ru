import React from "react";
import payServices from "../../MOCK/payServices";
import {PropTypes} from "prop-types";
import {mockPageInfo} from "../../MOCK/staticSets";
import staticFunctions from "../../FUNC/staticFunc";
import {TimeWork} from "./elements/timeWork.jsx";

const PagePayServices = (props) => {
  const {renderCleanLink} = props;
  const {phones} = mockPageInfo;
  const {cleanNum, checkInArOfObjByKeyAndVal} = staticFunctions;
  const selectClick = (nameCat) => {
    const hh = document.querySelectorAll(`div.payServiceItem`);
    if (nameCat === `allWant`) {
      for (let i = 0; i < hh.length; i++) {
        if (hh[i].classList.contains(`hide`)) {
          hh[i].classList.remove(`hide`);
          hh[i].classList.remove(`listItem`);
          hh[i].classList.add(`listItemRootSecond`);
        }
      }
      return;
    }
    for (let i = 0; i < hh.length; i++) {
      if (hh[i].classList.contains(nameCat) === false) {
        if (hh[i].classList.contains(`hide`) === false) {
          hh[i].classList.remove(`listItemRoot`);
          hh[i].classList.remove(`listItemRootSecond`);
          hh[i].classList.add(`hide`);
        }
      } else {
        if (hh[i].classList.contains(`hide`)) {
          hh[i].classList.remove(`hide`);
        }
        if (hh[i].parentNode.classList.contains(`listItemRoot`) === false) {
          hh[i].classList.add(`listItemRoot`);
        }
      }

    }
  };
  return <div className={`componentPagePayServices`}>
    <div className={`blockName inline`}>Платные Услуги</div>
    <div className={`blockNameBigWidth`}>В поликлинике предоставляется широкий спектр платных услуг.<div>
      <div className={`blockContent`}>Ознакомтесь с {renderCleanLink({
        name: `условиями`,
        to: `/conditions`,
        paramName: `condId`,
        paramValue: `payRecord`,
        anchor: `logoTimeWork`,
      })}.</div>
      <div className={`blockContent`}>Действует {renderCleanLink({
        name: `система скидок`,
        to: `/conditions`,
        paramName: `condId`,
        paramValue: `salePayServices`,
        anchor: `logoTimeWork`,
      })}.</div></div></div>
    <div>Консультация по платным услугам:</div>
    <div><div>Дпо29: <a target={`_blank`} rel="noreferrer" href={`tel:${cleanNum(phones.payServices[checkInArOfObjByKeyAndVal(phones.payServices, `branch`, `29`)].phone)}`}>{phones.payServices[checkInArOfObjByKeyAndVal(phones.payServices, `branch`, `29`)].phone}</a>
    </div><div>Дпо61: <a target={`_blank`} rel="noreferrer" href={`tel:${cleanNum(phones.payServices[checkInArOfObjByKeyAndVal(phones.payServices, `branch`, `61`)].phone)}`}>{phones.payServices[checkInArOfObjByKeyAndVal(phones.payServices, `branch`, `61`)].phone}</a>
    </div></div>
    <TimeWork scheduleWork={mockPageInfo.schedule.work} osmpNeed={false} />
    <div className={`blockContent`}>
      <div className={`payServicesFilter`}>
        Применить фильтр:
        <select defaultValue={`DEFAULT`} onChange={(e) => {
          selectClick(e.currentTarget.value);
        }}>
          <option value="DEFAULT" disabled="disabled">Выберите Специальность</option>
          <option value={`allWant`}>Все категории</option>;
          {payServices.groups.map((el, index) => {
            return <option value={el} key={`payServOption:${index}:${el}`}>{el.replace(/_/g, ` `)}</option>;
          })}
        </select>
      </div>
    </div>
    <div className={`paySPservicesList`}>
      {payServices.list.map((el, index) => {
        return <div className={`payServiceItem ${el.spec}`} key={`${index}:${el.name}:${el.spec}`}>
          <table><tbody><tr>
            <td>{el.spec.replace(/_/g, ` `)}</td>
          </tr><tr>
            <td>{el.name}</td>
          </tr><tr>
            <td>{el.cost} руб.</td>
          </tr><tr>
            <td>{el.code}</td>
          </tr>
          </tbody></table>
        </div>;
      })}
    </div>
  </div>;
};
PagePayServices.propTypes = {
  renderCleanLink: PropTypes.func.isRequired,
};

export {
  PagePayServices,
};
