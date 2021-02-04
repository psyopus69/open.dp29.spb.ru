import React from "react";
// import {PropTypes} from "prop-types";
import withAsyncData from "../../HOC/withAsyncData";
import {AsyncComponent} from "./elements/asyncComponent.jsx";
import {api} from "../../API/api";
import {sqlRequests} from "../../API/sqlRequests";

const AsyncComponentWrapped = withAsyncData(AsyncComponent);
const PageMain = (props) => {
  const {} = props;
  return <div id={`componentPageMain`} className={`componentPageMain`}>
    <div className={`blockName`}>Добро пожаловать на Главную страницу!</div>
    <div className={`blockTextB1 mainContentDiv`}>Мы разрабатываем новый интерфейс для работы с Вами!</div>
    <div className={`blockContent mainContentDiv`}>
      <a href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=98`} target={`blank`} >Напишите</a> Нам Ваши предложения по улучшению сайта.<br/>
Информация на всех страницах дорабатывается, при необходимости, воспользуйтесь <a rel={`nofollow`} href={`https://feedback.pol29.shn-host.ru/feedback?name=%D0%9E%D0%B1%D1%89%D0%B5%D0%B5&ankid=99`} target={`_blank`} >обратной</a> связью.
      <AsyncComponentWrapped method={{
        sql: sqlRequests.selectMainPageContent,
      }} autostart={true} api={api} />
    </div>
  </div>;
};
// PageMain.propTypes = {
// };

export {
  PageMain,
};
