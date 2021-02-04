// require HOC withAsyncData
// page, that react on path & render AsyncComponent with data (sql) by schema in notUniquePagesSqlMap
import React from "react";
import staticFunctions from "../../FUNC/staticFunc";
import withAsyncData from "../../HOC/withAsyncData";
import {api} from "../../API/api";
import {notUniquePagesSqlMap} from "../../MOCK/staticSets";
import {AsyncComponent} from "./elements/asyncComponent.jsx";
import {mockMenus} from "../../MOCK/staticSets";

const AsyncComponentWrapped = withAsyncData(AsyncComponent);
const NotUniqueAsyncPage = () => {
  const {getPathname, checkInArOfObjByKeyAndVal} = staticFunctions;
  const inn = checkInArOfObjByKeyAndVal(notUniquePagesSqlMap, `path`, getPathname());
  if (inn === false) {
    return <div>Не обнаружено сопоставление для страницы {getPathname()}</div>;
  }
  return <div className={`componentNotUniqueAsyncPage`}>
    <div className={`blockName inline`}>{mockMenus[checkInArOfObjByKeyAndVal(mockMenus, `to`, notUniquePagesSqlMap[inn].path)].name}</div>
    <div className={`blockTextB1 mainContentDiv`}>
      <AsyncComponentWrapped api={api} method={{
        sql: notUniquePagesSqlMap[inn].sql,
      }} autostart={true}/>
    </div>
  </div>;
};
export {
  NotUniqueAsyncPage,
};
