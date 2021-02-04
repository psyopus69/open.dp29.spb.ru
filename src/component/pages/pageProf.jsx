import React from "react";
import {PropTypes} from "prop-types";
import staticFunctions from "../../FUNC/staticFunc";

const PageProf = (props) => {
  const {cleanAllSelectedDynamic, selectedCssClassName, colorMenuByPath} = staticFunctions;
  const {renderCleanLink} = props;
  const pOnclick = (el) => {
    // if (e.currentTarget.parentNode.querySelector(`table`).classList.contains(`hideTableProfList`) === false) {
    //   e.currentTarget.parentNode.querySelector(`table`).classList.add(`hideTableProfList`);
    //   return;
    // }
    // if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(`.hideTableProfList`).length > 1) {
    //   const allT = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(`.tableWithProfDesc`);
    //   for (let i = 0; i < allT.length; i++) {
    //     if (allT[i].classList.contains(`hideTableProfList`) === false) {
    //       allT[i].classList.add(`hideTableProfList`);
    //     }
    //   }
    // }
    // e.currentTarget.parentNode.querySelector(`table`).classList.remove(`hideTableProfList`);
    // if (el.classList.contains(`hideTableProfList`) === false) {
    //   el.classList.add(`hideTableProfList`);
    //   return;
    // }
    const toDel = document.querySelectorAll(`table.tableWithProfDesc`);
    for (let i = 0; i < toDel.length; i++) {
      if (toDel[i].classList.contains(`hideTableProfList`) === false) {
        toDel[i].classList.add(`hideTableProfList`);
      }
    }
    el.classList.remove(`hideTableProfList`);
  };
  return <div className={`componentPageProf`}>
    <div className={`blockName inline`}>Профилактические осмотры</div>
    <div className={`blockTextB1`}>Комплекс медицинских обследований</div>
    <div className={`blockContent`}>
      <div className={`blockTextB1`}>Профилактический медицинский осмотр проводится в целях раннего (своевременного) выявления состояний,
        заболеваний и факторов риска их развития, а также в целях определения групп здоровья и выработки рекомендаций для пациентов.</div>
      <div className={`blockTextB1`}>{renderCleanLink({
        name: `Запись`,
        to: `/recording`,
        callback: () => {
          cleanAllSelectedDynamic(selectedCssClassName);
          colorMenuByPath(`/recording`);
        },
        anchor: `logoTimeWork`,
      })} на проф.осмотр производит участковый врач или мед.сестра.</div>
      <div className={`blockName inline`}>Проф.осмотр включает в себя:</div>
      <div className={`blockTextB1`}>Выберите возраст:</div>
      <div className={`blockTextB1 profDivList`}>
        <table className={`profListMapTbl`}><tbody><tr>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.nov`));
          }}>Новорожденный</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon1`));
          }}>1 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon2`));
          }}>2 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon3`));
          }}>3 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon4`));
          }}>4 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon5`));
          }}>5 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon6`));
          }}>6 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon7`));
          }}>7 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon8`));
          }}>8 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon9`));
          }}>9 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon10`));
          }}>10 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon11`));
          }}>11 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.mon12`));
          }}>12 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year1mon3`));
          }}>1 г 3 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year1mon6`));
          }}>1 г 6 м</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year2`));
          }}>2 г</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year3`));
          }}>3 г</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year4`));
          }}>4 г</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year5`));
          }}>5 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year6`));
          }}>6 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year7`));
          }}>7 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year8`));
          }}>8 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year9`));
          }}>9 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year10`));
          }}>10 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year11`));
          }}>11 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year12`));
          }}>12 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year13`));
          }}>13 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year14`));
          }}>14 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year15`));
          }}>15 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year16`));
          }}>16 л</a></td>
          <td><a onClick={(event) => {
            event.preventDefault();
            pOnclick(document.querySelector(`.year17`));
          }}>17 л</a></td>
        </tr></tbody></table>
        <table className={`tableWithProfDesc hideTableProfList nov`}>
          <tbody>
            <tr>
              <td>
                <h2>Новорожденный</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td>
                        <p>• Неонатальный скрининг на врожденный гипотиреоз • Фенилкетонурию • Адреногенитальный
                    синдром • Муковисцидоз и галактоземию* • Аудиологический скрининг**</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>* - Неонатальный скрининг на врожденный гипотиреоз, фенилкетонурию, адреногенитальный синдром,
                    муковисцидоз и галактоземию проводится детям в возрасте до 1 месяца включительно в случае
                    отсутствия сведений о его проведении.</p>
                        <p>** - Аудиологический скрининг проводится детям в возрасте до 3 месяцев включительно в случае
                    отсутствия сведений о его проведении.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon1`}>
          <tbody>
            <tr>
              <td>
                <h2>1 месяц</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Невролог • Детский хирург • Офтальмолог • Детский стоматолог</p>
                      </td>
                      <td>
                        <p>• Ультразвуковое исследование органов брюшной полости (комплексное) • Ультразвуковое
                    исследование почек • Ультразвуковое исследование тазобедренных суставов • Эхокардиография •
                    Нейросонография • Аудиологический скрининг**</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>** - Аудиологический скрининг проводится детям в возрасте до 3 месяцев включительно в случае
                    отсутствия сведений о его проведении.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon2`}>
          <tbody>
            <tr>
              <td>
                <h2>2 месяца</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon3`}>
          <tbody>
            <tr>
              <td>
                <h2>3 месяца</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Травматолог-ортопед</p>
                      </td>
                      <td>
                        <p>• Аудиологический скрининг**</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>** - Аудиологический скрининг проводится детям в возрасте до 3 месяцев включительно в случае
                    отсутствия сведений о его проведении.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon4`}>
          <tbody>
            <tr>
              <td>
                <h2>4 месяца</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon5`}>
          <tbody>
            <tr>
              <td>
                <h2>5 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon6`}>
          <tbody>
            <tr>
              <td>
                <h2>6 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon7`}>
          <tbody>
            <tr>
              <td>
                <h2>7 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon8`}>
          <tbody>
            <tr>
              <td>
                <h2>8 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon9`}>
          <tbody>
            <tr>
              <td>
                <h2>9 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon10`}>
          <tbody>
            <tr>
              <td>
                <h2>10 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon11`}>
          <tbody>
            <tr>
              <td>
                <h2>11 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList mon12`}>
          <tbody>
            <tr>
              <td>
                <h2>12 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Невролог • Детский хирург • Оториноларинголог • Травматолог-ортопед</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи • Электрокардиография</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year1mon3`}>
          <tbody>
            <tr>
              <td>
                <h2>1 год 3 месяца</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year1mon6`}>
          <tbody>
            <tr>
              <td>
                <h2>1 год 6 месяцев</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year2`}>
          <tbody>
            <tr>
              <td>
                <h2>2 года</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог • Психиатр детский*</p>
                      </td>
                      <td/>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>* - Осмотр врачом-психиатром детским осуществляется в отношении детей, включенных в группу риска
                    возникновения или наличия нарушений психического развития.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year3`}>
          <tbody>
            <tr>
              <td>
                <h2>3 года</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Невролог • Детский хирург • Детский стоматолог • Офтальмолог •
                    Оториноларинголог • Акушер-гинеколог*** • Детский уролог-андролог***</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>*** - Медицинский осмотр врача - детского уролога-андролога проходят мальчики,
                    врача-акушера-гинеколога - девочки.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year4`}>
          <tbody>
            <tr>
              <td>
                <h2>4 года</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year5`}>
          <tbody>
            <tr>
              <td>
                <h2>5 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year6`}>
          <tbody>
            <tr>
              <td>
                <h2>6 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Невролог • Детский хирург • Детский стоматолог • Травматолог-ортопед •
                    Офтальмолог • Оториноларинголог • Эндокринолог • Психиатр детский • Акушер-гинеколог*** •
                    Детский уролог-андролог***</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи • Ультразвуковое исследование органов брюшной
                    полости (комплексное) • Ультразвуковое исследование почек • Эхокардиография •
                    Электрокардиография</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>*** - Медицинский осмотр врача - детского уролога-андролога проходят мальчики,
                    врача-акушера-гинеколога - девочки.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year7`}>
          <tbody>
            <tr>
              <td>
                <h2>7 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Невролог • Детский стоматолог • Офтальмолог • Оториноларинголог</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year8`}>
          <tbody>
            <tr>
              <td>
                <h2>8 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year9`}>
          <tbody>
            <tr>
              <td>
                <h2>9 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year10`}>
          <tbody>
            <tr>
              <td>
                <h2>10 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Невролог • Детский стоматолог • Детский эндокринолог • Травматолог-ортопед •
                    Офтальмолог</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year11`}>
          <tbody>
            <tr>
              <td>
                <h2>11 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year12`}>
          <tbody>
            <tr>
              <td>
                <h2>12 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year13`}>
          <tbody>
            <tr>
              <td>
                <h2>13 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог • Офтальмолог</p>
                      </td>
                      <td/>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year14`}>
          <tbody>
            <tr>
              <td>
                <h2>14 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский стоматолог • Детский уролог-андролог*** • Акушер-гинеколог*** •
                    Психиатр подростковый</p>
                      </td>
                      <td/>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>*** - Медицинский осмотр врача - детского уролога-андролога проходят мальчики,
                    врача-акушера-гинеколога - девочки.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year15`}>
          <tbody>
            <tr>
              <td>
                <h2>15 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский хирург • Детский стоматолог • Детский уролог-андролог*** • Детский
                    эндокринолог • Невролог • Травматолог-ортопед • Офтальмолог • Оториноларинголог •
                    Акушер-гинеколог*** • Психиатр подростковый</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи • Ультразвуковое исследование органов брюшной
                    полости (комплексное) • Ультразвуковое исследование почек • Электрокардиография</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>*** - Медицинский осмотр врача - детского уролога-андролога проходят мальчики,
                    врача-акушера-гинеколога - девочки.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year16`}>
          <tbody>
            <tr>
              <td>
                <h2>16 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский хирург • Детский стоматолог • Детский уролог-андролог • Детский
                    эндокринолог • Невролог • Травматолог-ортопед • Офтальмолог • Оториноларинголог •
                    Акушер-гинеколог • Психиатр подростковый</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>*** - Медицинский осмотр врача - детского уролога-андролога проходят мальчики,
                    врача-акушера-гинеколога - девочки.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={`tableWithProfDesc hideTableProfList year17`}>
          <tbody>
            <tr>
              <td>
                <h2>17 лет</h2><table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Осмотры врачами-специалистами</p>
                      </td>
                      <td>
                        <p>Лабораторные, функциональные и иные исследования</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>• Педиатр • Детский хирург • Детский стоматолог • Детский уролог-андролог*** • Детский
                    эндокринолог • Невролог • Травматолог-ортопед • Офтальмолог • Оториноларинголог •
                    Акушер-гинеколог*** • Психиатр подростковый</p>
                      </td>
                      <td>
                        <p>• Общий анализ крови • Общий анализ мочи • Электрокардиография</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>Обращаем Ваше внимание, что после всех обследований необходимо повторно посетить
                    врача-педиатра, для завершения проф.осмотра.</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <p>*** - Медицинский осмотр врача - детского уролога-андролога проходят мальчики,
                    врача-акушера-гинеколога - девочки.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>;
};
PageProf.propTypes = {
  renderCleanLink: PropTypes.func.isRequired,
  // renderCustomLink: PropTypes.func.isRequired,
};

export {
  PageProf,
};
