import React from "react";
import {PropTypes} from "prop-types";
import staticFunctions from "../../FUNC/staticFunc";


const PageVakc = (props) => {
  const {cleanAllSelectedDynamic, selectedCssClassName, colorMenuByPath} = staticFunctions;
  const {renderCleanLink} = props;
  return <div className={`componentPageVakc`}>
    <div className={`blockName inline`}>Вакцинация</div>
    <div className={`blockTextB1`}>Против инфекционных заболеваний</div>
    <div className={`blockContent`}>
      <div className={`blockTextB1`}>
        Вакцинация (от лат. vaccus корова) – введение медикамента с целью предотвратить заражение
        или ослабить его проявления и негативные последствия.
      </div>
      <div className={`blockTextB1`}>
        <div>В СПб ГБУЗ «Детская городская поликлиника №29» вакцинация
      проводится в соответствии с национальным {renderCleanLink({
          name: `календарем`,
          to: `/conditions`,
          paramName: `condId`,
          paramValue: `calendar`,
          anchor: `logoTimeWork`,
        })} прививок.</div>
        <div>Проводится во всех поликлинических отделениях и
      медицинских кабинетах образовательных учреждений по направлению {renderCleanLink({
          name: `врача-педиатра`,
          to: `/recording`,
          callback: () => {
            cleanAllSelectedDynamic(selectedCssClassName);
            colorMenuByPath(`/recording`);
          },
          anchor: `logoTimeWork`,
        })}.</div>
      </div>
      <div className={`blockTextB2`}>
      По исследованиям Всемирной организации здравоохранения своевременно проведенная вакцинация спасает ежегодно 4 млн. детских жизней.
      </div>
      <div className={`blockTextB1 inline`}>Материал (антиген)</div>
      <div className={`blockTextB2`}>
        <div>В качестве материала (антигена) могут быть использованы:</div>
        <div>• живые, но ослабленные штаммы микробов;</div>
        <div>• убитые (инактивированные) микробы;</div>
        <div>• части микробов, например, белки;</div>
        <div>• синтетические компоненты.</div>
      </div>
      <div className={`blockTextB2`}>По статистике, за последнее столетие продолжительность жизни человека увеличилась, в том числе, благодаря вакцинации.</div>
      <div className={`inline blockName`}>
        <div>Отказываясь прививать своих детей</div>
        <div>Вы подвергаете их большому риску:</div>
      </div>
      <div className={`blockTextB1`}>
        Без прививок, нам бы угрожали:
      </div>
      <div className={`blockTextB2`}>
        <div>• корь – вероятность смертельного исхода 1 случай из 100, инвалидности 5 случаев из 100;</div>
        <div>• коклюш – очень высок риск осложнений со стороны дыхательной и нервной систем;</div>
        <div>• дифтерия – вероятность смертельного исхода 10 случаев из 100;</div>
        <div>• полиомиелит – риск тяжелой инвалидности;</div>
        <div>• туберкулез – длительное лечение, тяжелые осложнения;</div>
        <div>• эпидемический паротит – возможно развитие бесплодия;</div>
        <div>• краснуха – у не болевших в детстве или непривитых женщин, заболевших во время беременности, может родиться ребенок-инвалид или нежизнеспособный ребенок;
        </div>
      </div>
      <div className={`blockName inline`}>
      Инфекции, предупреждаемые прививками:
      </div>
      <div className={`blockTextB1`}>
      Вирусный гепатита «В», туберкулез, пневмококковая инфекция, дифтерия, столбняк, полиомиелит, коклюш, корь, эпидемическый паротит, краснуха, гемофильная инфекция, грипп, гепатита А, ветряная оспа.
      </div>
      <div className={`blockTextB2`}>
      Вы можете сделать бесплатно прививки себе и своим детям в государственной поликлинике по месту прикрепления.
      </div>
      <div className={`blockTextB2`}>
          В Санкт-Петербурге прививочные кабинеты имеются во всех детских и взрослых поликлиниках.
      </div>
      <div className={`blockName inline`}>
          До изобретения прививок инфекции и вирусы являлись главной причиной высокой смертности населения Земли и малой продолжительности жизни человека.
      </div>

      <div className={`blockTextB1`}>
        Календарь прививок</div>
      <div className={`blockTextB2`}>
      Утвержден приказом от 21 марта 2014 г. N 125н об утверждении
        национального{` `}
        {renderCleanLink({
          name: `календаря`,
          to: `/conditions`,
          paramName: `condId`,
          paramValue: `calendar`,
          anchor: `logoTimeWork`,
        })} профилактических прививок и календаря профилактических прививок по эпидемическим показаниям.
      </div>
    </div>
  </div>;
};
PageVakc.propTypes = {
  renderCleanLink: PropTypes.func.isRequired,
  renderCustomLink: PropTypes.func.isRequired,
};

export {
  PageVakc,
};
