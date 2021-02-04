import React from "react";
import {PropTypes} from "prop-types";
import withAsyncData from "../../HOC/withAsyncData";
import {AsyncComponent} from "./elements/asyncComponent.jsx";
import {api} from "../../API/api";
import {sqlRequests} from "../../API/sqlRequests";

const AsyncComponentWrapped = withAsyncData(AsyncComponent);
const PageKDC = (props) => {
  const {renderCleanLink} = props;
  return <div className={`componentPageKDC`}>
    <div className={`blockName inline`}>Консультационно - диагностический центр</div>
    <div className={`blockTextB1 mainContentDiv`}>Для детей и подростков Калининского района!</div>
    <div className={`blockTextB1`}>
      Перед приёмом ознакомтесь с {renderCleanLink({
        name: `условиями`,
        to: `/conditions`,
        paramName: `condId`,
        paramValue: `kdcReceptionStatement`,
        anchor: `logoTimeWork`,
      })} оказания медицинской помощи в СПб ГБУЗ Детская городска поликлиника №29 КДЦ.
      <AsyncComponentWrapped method={{
        sql: sqlRequests.selectKDCPageContent,
      }} autostart={true} api={api} />
    </div>
  </div>;
};
PageKDC.propTypes = {
  renderCleanLink: PropTypes.func.isRequired,
};
export {
  PageKDC,
};
