//  require withAsyncFabric HOC
import React from "react";
import {PropTypes} from "prop-types";
import {Loading} from "./loading.jsx";
import reactHtmlParser from 'react-html-parser';
import {nameSchedMap} from "../../MOCK/staticSets";
import checkInArOfObjByKeyAndVal from "../../FUNC/checkInArOfObjByKeyAndVal";

const howRenderSchedule = (tables) => {
  return <div>{tables.map((el, index) => {
    return <div id={`scheduleAsync_${el.name}`} className={`scheduleAsyncChildDiv scheduleNoDisp`} key={`schedMapD:${index}:${el.name}:${el.data}`} >
      <div className={`tableSearchScheduleName`}>{nameSchedMap[checkInArOfObjByKeyAndVal(nameSchedMap, `name`, el.name.replace(/[\d]/g, ``))].text}{el.name.replace(/[^\d]/g, ``) === `` ? `` : `, Дпо ${el.name.replace(/[^\d]/g, ``)}`}</div>
      {reactHtmlParser(el.data)}
    </div>;
  })}</div>;
};
const PageSchedule = (props) => {
  const {getAllData, renderAllData, renderCleanLink, renderCustomLink} = props;
  if (getAllData().length === 0) {
    return <Loading msg={``} />;
  }
  const searchClick = (showAll) => {
    if (showAll === true) {
      const hh = document.querySelectorAll(`.scheduleNoDisp`);
      for (let i = 0; i < hh.length; i++) {
        hh[i].classList.remove(`scheduleNoDisp`);
      }
      document.getElementById(`forShowHideJsInShedSearchMSG`).innerText = `Отображены все расписания`;
      return;
    }
    if (document.getElementById(`scheduleDPO1`).value === `DEFAULT` || document.getElementById(`scheduleCategory1`).value === `DEFAULT`) {
      document.getElementById(`forShowHideJsInShedSearchMSG`).innerText = `Укажите ${document.getElementById(`scheduleDPO1`).value === `DEFAULT` ? `Подразделение` : `Категорию`}`;
      return;
    }
    document.getElementById(`forShowHideJsInShedSearchMSG`).innerText = `Вы искали: ДПО №${document.getElementById(`scheduleDPO1`).value}, категория - ${document.getElementById(`scheduleCategory1`).options[document.getElementById(`scheduleCategory1`).selectedIndex].text === `Заведующие` ? `Заведующие` : nameSchedMap[checkInArOfObjByKeyAndVal(nameSchedMap, `name`, document.getElementById(`scheduleCategory1`).value)].text}`;
    const hh = document.getElementsByClassName(`scheduleAsyncChildDiv`);
    for (let i = 0; i < hh.length; i++) {
      hh[i].classList.add(`scheduleNoDisp`);
    }
    if (document.getElementById(`scheduleCategory1`).value === `spec`) {
      let aarH = document.getElementById(`scheduleAsync_${document.getElementById(`scheduleCategory1`).value}`).querySelectorAll(`tr, a`);
      for (let i = 0; i < aarH.length; i++) {
        aarH[i].classList.remove(`scheduleNoDisp`);
      }
      document.getElementById(`scheduleAsync_${document.getElementById(`scheduleCategory1`).value}`).classList.remove(`scheduleNoDisp`);
      aarH = document.getElementById(`scheduleAsync_${document.getElementById(`scheduleCategory1`).value}`).querySelectorAll(`.nas${document.getElementById(`scheduleDPO1`).value === `29` ? `61` : `29`}`);
      for (let i = 0; i < aarH.length; i++) {
        aarH[i].classList.add(`scheduleNoDisp`);
      }
      return;
    }
    document.getElementById(`scheduleAsync_${document.getElementById(`scheduleCategory1`).value}${document.getElementById(`scheduleDPO1`).value}`).classList.remove(`scheduleNoDisp`);
  };
  return <div id={`componentPageSchedule`} className={`componentPageSchedule`}>
    <div className={`blockName inline`}>Доска Расписаний</div>
    <div className={`blockNameBigWidth`}>Используйте Фильтр для выбора необходимого расписания.</div>
    <table className={`selectParamsSearch`}><tbody>
      <tr>
        <td>
          <div>Выберите Подразделение</div>
          <select id={`scheduleDPO1`} defaultValue={`DEFAULT`}>
            <option value="DEFAULT" disabled="disabled">Выберите ДПО</option>
            <option value={`29`}>29</option>
            <option value={`61`}>61</option>
          </select>
        </td>
        <td>
          <div>и Категорию расписания:</div>
          <select id={`scheduleCategory1`} defaultValue={`DEFAULT`}>
            <option value="DEFAULT" disabled="disabled">Выберите Категорию</option>
            <option value={`ped`}>Педиатры</option>
            <option value={`spec`}>Специалисты</option>
            <option value={`proc`}>Проц.Кабинет</option>
            <option value={`kzr`}>Каб. Здорового Ребенка</option>
            <option value={`ped`}>Заведующие</option>
          </select>
        </td>
      </tr>
      <tr>
        <td className={`tA_r`}>(согласно {renderCleanLink({
          name: `прикреплению`,
          to: `/location`,
          anchor: `logoTimeWork`,
        })})
        </td>
      </tr>
      <tr>
        <td colSpan={2} style={{
          textAlign: `center`
        }}>
          Ознакомтесь с правилами подготовки к {renderCustomLink({
            name: `УЗИ`,
            to: `/conditions`,
            paramName: `condId`,
            paramValue: `rulesForDiagnosticServices`,
            anchor: `logoTimeWork`,
          })} и {renderCustomLink({
            name: `Рентген`,
            to: `/conditions`,
            paramName: `condId`,
            paramValue: `rulesForRoentgenServices`,
            anchor: `logoTimeWork`,
          })} исследованиям</td>
      </tr>
    </tbody></table>
    <div className={`scheduleSearchButton`}>
      <button onClick={() => {
        searchClick(null);
      }}>Показать</button>
    </div>
    <div className={`scheduleSearchButton`}>
      <button onClick={() => {
        searchClick(true);
      }}>Показать все Расписания</button>
    </div>
    <div className={`resultsOfScheduleSearch`}>
      <div className={`nameDiv`} id={`forShowHideJsInShedSearchMSG`}/>
      <div id={`forShowHideJsInShedSearch`}>
        {renderAllData(howRenderSchedule)}
      </div>
    </div>
  </div>;
};
PageSchedule.propTypes = {
  getAllData: PropTypes.func.isRequired,
  renderAllData: PropTypes.func.isRequired,
  renderCleanLink: PropTypes.func.isRequired,
  renderCustomLink: PropTypes.func.isRequired,
};

export {
  PageSchedule,
};
