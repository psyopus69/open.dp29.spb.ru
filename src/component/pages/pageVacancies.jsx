import React from "react";
import {PropTypes} from "prop-types";
import withAsyncData from "../../HOC/withAsyncData";
import {AsyncComponent} from "./elements/asyncComponent.jsx";
import {api} from "../../API/api";
import {sqlRequests} from "../../API/sqlRequests";

const AsyncComponentWrapped = withAsyncData(AsyncComponent);
const PageVacancies = (props) => {
  const {} = props;
  return <div className={`componentPageVacancies`}>
    <div className={`blockName inline`}>Вакансии</div>
    <div className={`blockTextB1`}>
      <AsyncComponentWrapped method={{
        sql: sqlRequests.selectVacanciesPageContent,
      }} autostart={true} api={api} />
    </div>
  </div>;
};
PageVacancies.propTypes = {
  renderCleanLink: PropTypes.func.isRequired,
};
export {
  PageVacancies,
};
