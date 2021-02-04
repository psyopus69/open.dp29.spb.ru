import React from "react";
import {PropTypes} from "prop-types";
import staticFunctions from "../../FUNC/staticFunc";
import {pageConditionSchema} from "../../MOCK/staticSets";
import {PageError} from "./pageError.jsx";

// POST var: condId=payServices
// condId for DB API (for a while MOCK)
const PageConditions = (props) => {
  const {getSearch, checkInArOfObjByKeyAndVal} = staticFunctions;
  const {renderCleanLink} = props;
  const condId = getSearch(`condId`);
  const inn = checkInArOfObjByKeyAndVal(pageConditionSchema.conditions, `condId`, condId);
  return <div id={`componentPageConditions`}
    className={`componentPageConditions`}>
    <div className={`blockName inline`}>{inn === false ? `` : pageConditionSchema.conditions[inn].name}</div>
    <div className={`condContent`}>{inn === false ? `` : pageConditionSchema.conditions[inn].content({
      renderCleanLink,
    })}
    {inn === false ? <PageError msg={`Страница не найдена`} /> : ``}
    </div>
  </div>;
};
PageConditions.propTypes = {
  renderLink: PropTypes.func.isRequired,
  renderCleanLink: PropTypes.func.isRequired,
};

export {
  PageConditions,
};
