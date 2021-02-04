import React from "react";
import {PropTypes} from "prop-types";

const Loading = (props) => {
  const {msg} = props;
  return <div><div className={`loadingMainScreen`}>{msg === undefined ? `Загрузка ...` : msg}</div><div className={`loadingMainScreen`}><img alt='placeholder' src={`assets/img/placeholder_3.gif`}/></div></div>;
};
Loading.propTypes = {
  msg: PropTypes.string,
};
export {
  Loading
};
