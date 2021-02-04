import React from "react";
import {PropTypes} from "prop-types";

const SimpleConfigRoutesMenus = (props) => {
  const {renderRoutes, renderCustomRoute, renderLink, renderCustomLink} = props;
  const Custom = () => {
    return <div>@@@@ CustomComponent @@@@</div>;
  };
  return <React.Fragment>
    <div>MenusCustom:</div>{renderCustomLink({
      to: `/custom`,
      name: `custom`,
    })}
    <div>Menus /about/secret:</div>{renderLink(`/about/secret`)}
    <div>MenusAll:</div>{renderLink()}
    <div>RoutesCustom:</div>{renderCustomRoute({
      path: `/custom`,
      component: Custom,
    })}
    <div>RoutesAll:</div>{renderRoutes()}
  </React.Fragment>;
};
SimpleConfigRoutesMenus.propTypes = {
  renderRoutes: PropTypes.func.isRequired,
  renderCustomRoute: PropTypes.func.isRequired,
  renderLink: PropTypes.func.isRequired,
  renderCustomLink: PropTypes.func.isRequired,
};
export {
  SimpleConfigRoutesMenus,
};
