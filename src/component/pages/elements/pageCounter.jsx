// require HOC withAsyncData
import React from "react";
import {PropTypes} from "prop-types";
import withAsyncData from "../../../HOC/withAsyncData";
import {Loading} from "../loading.jsx";

const PageCounter = (props) => {
  const {getData} = props;
  if (getData().length === 0) {
    return <div className='pageCounter'><Loading msg={``} /></div>;
  }
  return <div className='pageCounter'>Посещений сегодня: {getData().data}</div>;
};
PageCounter.propTypes = {
  getData: PropTypes.func.isRequired,
  autostart: PropTypes.bool,
  method: PropTypes.object,
};

export {
  PageCounter,
};

export default withAsyncData(PageCounter);
