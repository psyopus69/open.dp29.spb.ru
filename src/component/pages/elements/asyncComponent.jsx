// require withAsyncData HOC
import React from "react";
import {PropTypes} from "prop-types";
import {Loading} from "../loading.jsx";
import reactHtmlParser from 'react-html-parser';

const getJs = (msg) => {
  let sc = msg.split(`<script>`);
  if (sc.length === 2) {
    sc = sc[1].split(`</script>`)[0];
    const script = document.createElement(`script`);
    script.text = sc; // URL for the third-party library being loaded.
    script.id = `libraryName`; // e.g., googleMaps or stripe
    document.body.appendChild(script);
    return sc;
  }
  return ``;
};
const AsyncComponent = (props) => {
  const {getData} = props;
  if (getData().length === 0) {
    return <Loading msg={``} />;
  }
  return <div className='asyncComponent'>{reactHtmlParser(getData())}
  </div>;
};
AsyncComponent.propTypes = {
  getData: PropTypes.func.isRequired,
  autostart: PropTypes.bool,
  method: PropTypes.object,
};

export {
  AsyncComponent,
};
