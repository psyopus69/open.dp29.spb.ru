import React, {Fragment} from "react";
import {PropTypes} from "prop-types";
import {MenuMainFirst} from "../pages/elements/menuMainAll.jsx";


const MainScreenDynamicContent = (props) => {
  const {renderLink, renderRoutes} = props;
  return <Fragment>
    <MenuMainFirst renderLink={renderLink} />
    <div id={`mainDynamicContentDiv`}
      className={`mainDynamicContentDiv`}>
      {renderRoutes()}
    </div>
  </Fragment>;
};

MainScreenDynamicContent.propTypes = {
  renderRoutes: PropTypes.func.isRequired,
  renderCustomRoute: PropTypes.func.isRequired,
  renderLink: PropTypes.func.isRequired,
  renderCustomLink: PropTypes.func.isRequired,
};

export {
  MainScreenDynamicContent,
};
