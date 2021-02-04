import React from "react";
import {PropTypes} from "prop-types";
import staticFunctions from "../../FUNC/staticFunc";
import {mockPageInfo} from "../../MOCK/staticSets";
import {PhonesOperators} from "./elements/phonesOperators.jsx";

const PageRecording = (props) => {
  const {colorMenuByPath, uncolorMenuByPath} = staticFunctions;
  const {renderCleanLink} = props;
  return <div id={`componentPageRecord`}
    className={`componentPageRecord`}>
    <div className={`blockName inline`}>Запись на приём</div>
    <div className={`blockTextB1`}>
      Перед приёмом ознакомтесь с {renderCleanLink({
        name: `условиями`,
        to: `/conditions`,
        paramName: `condId`,
        paramValue: `receptionStatement`,
        anchor: `logoTimeWork`,
      })} оказания медицинской помощи в СПб ГБУЗ Детская городска поликлиника №29.
    </div>
    <div className={`blockTextFullSize`}>
      <table className={`recordingLinks`}><tbody>
        <tr><td>
        Электронная самозапись:
        </td></tr>
        <tr><td>
          <div>Сайт самозаписи периодически превышает допустимое время отклика. <a target={`_blank`} rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=92`} >Сообщите</a> о сбое.</div>
          <div><a target={`_blank`} href={`https://gorzdrav.spb.ru/service-free-schedule#%5B%7B%22district%22:%224%22%7D,%7B%22lpu%22:%22300%22%7D%5D`}>Самозапись Дпо29</a></div>
          <div><a target={`_blank`} href={`https://gorzdrav.spb.ru/service-free-schedule#%5B%7B%22district%22:%224%22%7D,%7B%22lpu%22:%22301%22%7D%5D`}>Самозапись Дпо61</a></div>
        </td></tr>
        <tr><td>
          Отмена записи:
        </td></tr>
        <tr><td>
          <div><a target={`_blank`} href={`https://gorzdrav.spb.ru/service-cancel#%5B%7B%22district%22:%224%22%7D,%7B%22lpu%22:%22300%22%7D%5D`}>Отмена Записи Дпо29</a></div>
          <div><a target={`_blank`} href={`https://gorzdrav.spb.ru/service-cancel#%5B%7B%22district%22:%224%22%7D,%7B%22lpu%22:%22301%22%7D%5D`}>Отмена Записи Дпо61</a></div>

        </td></tr>
        <tr><td>
        Платные услуги:
        </td></tr>
        <tr><td>
          {renderCleanLink({
            name: `Запись`,
            to: `/conditions`,
            paramName: `condId`,
            paramValue: `payRecord`,
            anchor: `logoTimeWork`,
          })} на {renderCleanLink({
            name: `платные услуги`,
            to: `/payServices`,
            callback: () => {
              uncolorMenuByPath(`/recording`);
              colorMenuByPath(`/payServices`);
            },
            anchor: `logoTimeWork`,
          })}
        </td></tr>
        <tr><td>Запись по телефону:</td></tr>
        <tr><td>
          <PhonesOperators phones={mockPageInfo.phones.operatorsMainRegs} msg={{
            msg: `Регистратура Дпо29: `,
          }} branch={`29`} />
          <PhonesOperators phones={mockPageInfo.phones.operatorsMainRegs} msg={{
            msg: `Регистратура Дпо61: `,
          }} branch={`61`} />
        Кол-центр Калининского района: <a href={`tel:5739904`} rel="noreferrer" target="_blank">573-99-04</a>
        </td></tr>
      </tbody></table>
      <div className={`listItem inline`}>При посещении поликлиники у Вас будет измерена температура
        <div><img src={`assets/img/svg/thermometer.svg`} alt={`temperature`} /><img src={`assets/img/svg/fever.svg`} alt={`temperature`} /></div>
      </div>
      <div className={`blockName inline`}>Также необходимо:
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
      <div className={`inline listItem listItemName pTB30`}>Мы заботимся о Вашем здоровье!
        <div>
          <img src={`assets/img/svg/ambulance.svg`} alt={`healthCare`} />
          <img src={`assets/img/svg/healthCare4.svg`} alt={`healthCare`} />
          <img src={`assets/img/svg/healthCare5.svg`} alt={`healthCare`} />
        </div>
      </div>
    </div>
  </div>;
};
PageRecording.propTypes = {
  renderCleanLink: PropTypes.func.isRequired,
  renderCustomLink: PropTypes.func.isRequired,
};

export {
  PageRecording,
};
