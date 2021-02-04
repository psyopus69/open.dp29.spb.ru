import React from "react";
// import {PropTypes} from "prop-types";
import staticFunctions from "../../FUNC/staticFunc";

const {getSearch} = staticFunctions;
const PageSearch = (props) => {
  const {} = props;
  return <div id={`componentPageSearch`} className={`componentPageSearch`}>
    <div className={`blockName inline`}>Страница поиска</div>
    <div className={`blockTextB1`}>Находится в разработке</div>
    <div className={`blockContent`}>
      <div className={`blockTextB1`}>
  Мы подключим ее в ближайшее время. При необходимости, воспользуйтесь <a href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=99`} target={`_blank`} >обратной</a> связью.
        <div className={`blockTextB1`}>
  Вы искали: {getSearch(`search`)}
        </div>
      </div>
    </div>
  </div>;
};
PageSearch.propTypes = {
  // num: PropTypes.num,
};

export {
  PageSearch,
};
