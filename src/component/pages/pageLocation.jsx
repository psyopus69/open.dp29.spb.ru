//  require withCustomState HOC for rerender result of search
import React from "react";
import {PropTypes} from "prop-types";
import locations from "../../MOCK/customersLocation";
import staticFunctions from "../../FUNC/staticFunc";

const getSelectFromAr = (ar) => {
  let selectList = document.createElement(`select`);
  for (let i = 0; i < ar.length; i++) {
    let option = document.createElement(`option`);
    option.value = ar[i];
    option.text = ar[i];
    selectList.appendChild(option);
  }
  return selectList;
};
const selectClick = (node) => {
  const {checkInArOfObjByKeyAndVal} = staticFunctions;
  const inn = checkInArOfObjByKeyAndVal(locations.streets, `name`, node.value.split(` `)[1], null);
  if (inn !== false) {
    document.getElementById(`forSearchHouse1`).innerHTML = ``;
    document.getElementById(`forSearchBody1`).innerHTML = ``;
    document.getElementById(`forSearchHouse1`).appendChild(getSelectFromAr(locations.streets[inn].houses));
    document.getElementById(`forSearchBody1`).appendChild(getSelectFromAr(locations.streets[inn].bodies));
  }
};
let nowSelect;
const PageLocation = (props) => {
  const {checkInArOfObjByKeyAndVal} = staticFunctions;
  const locationSearch = (locIn, setStateCustom) => {
    const {street, house, body} = locIn;
    if (`${street}:${house}:${body}` === nowSelect) {
      return;
    }
    nowSelect = `${street}:${house}:${body}`;
    let inn = checkInArOfObjByKeyAndVal(locations.list, `name`, street.split(` `)[1], true);
    let forSearchTmpAr = [];
    for (let i = inn[0]; i < inn[inn.length - 1] + 1; i++) {
      forSearchTmpAr.push(locations.list[i]);
    }
    const inn2 = checkInArOfObjByKeyAndVal(forSearchTmpAr, `house`, parseInt(house, 10), true);
    let forSearchTmpAr2 = [];
    for (let i = inn2[0]; i < inn2[inn2.length - 1] + 1; i++) {
      forSearchTmpAr2.push(forSearchTmpAr[i]);
    }
    // eslint-disable-next-line no-nested-ternary
    const inn3 = checkInArOfObjByKeyAndVal(forSearchTmpAr2, `body`, body === `-` ? 0 : body.split(`(`)[1] !== undefined ? body : parseInt(body, 10));
    // console.log(`street: ${street}, house: ${house}, body: ${body}, street.split: ${street.split(` `)[1]}`);
    // console.log(`inn: ${inn}; inn2: ${inn2}; inn3: ${inn3};`);
    if (inn3 !== false) {
      setStateCustom(`ДПО №${forSearchTmpAr2[inn3].branch}, участок ${forSearchTmpAr2[inn3].district}`);
    } else {
      setStateCustom(`Дом не найден. Проверьте параметры поиска. Если все указано верно, значит Ваш дом не прикреплен к обслуживанию ` +
      `в нашей поликлинике. Уточните территориальное прикрепление в своей страховой компании.`);
    }
  };
  const {getStateCustom, setStateCustom, renderCleanLink} = props;
  return <div className={`componentPageLocation`}>
    <div className={`blockName inline`}>Проверьте участок прикрепления</div>
    <div className={`blockName`}>Выберите адрес проживания</div>
    <div className={`mainContentDiv`}>
      <div>
        <select defaultValue={`DEFAULT`} onChange={(e) => {
          selectClick(e.currentTarget);
        }} id={`forSearchLocation1`}>
          <option value="DEFAULT" disabled="disabled">Выберите улицу</option>
          {locations.streets.map((el, index) => {
            return <option key={`street:${index}:${el.name}-${el.type}`}>{el.type} {el.name}</option>;
          })}
        </select><br/>
      дом:{` `}
        <b className={`selectLocation`} id={`forSearchHouse1`}/>
      корпус:{` `}
        <b className={`selectLocation`} id={`forSearchBody1`}/><br/>
        <button onClick={() => {
          if (document.querySelector(`#forSearchHouse1 select`) === null) {
            setStateCustom(`Выберите адрес проживания`);
            return;
          }
          locationSearch({
            street: document.querySelector(`#forSearchLocation1`).value,
            house: document.querySelector(`#forSearchHouse1 select`).value,
            body: document.querySelector(`#forSearchBody1 select`).value,
          }, setStateCustom);
        }} >Поиск</button>
      </div>
      {getStateCustom() === -1 ? `` : `Прикрепление: ${getStateCustom()}`}
      <div>
      Ознакомтесь с {renderCleanLink({
          name: `Условиями прикрепления`,
          to: `/conditions`,
          paramName: `condId`,
          paramValue: `addLocation`,
          anchor: `logoTimeWork`,
        })}.
      </div>
    </div>
  </div>;
};
PageLocation.propTypes = {
  // locations: PropTypes.array.isRequired,
  getStateCustom: PropTypes.func.isRequired,
  setStateCustom: PropTypes.func.isRequired,
  renderCleanLink: PropTypes.func.isRequired,
};

export {
  PageLocation,
};
