// HOC add method renderRoutes(num) && renderCustomRoute(objRoute)  & expect in arrayRoutes(in props) for configuration.
// required renderLink in prop, for component Routes, through children method ()renderLink(`path`).
//  !! here throwing renderLink methods to the routes
import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import {Route, Switch} from "react-router-dom";
import checkInArOfObjByKeyAndVal from "../FUNC/checkInArOfObjByKeyAndVal";
import {PageError} from "../component/pages/pageError.jsx";

const withRoutes = (Component) => {
  let customRouteCounter = 0;
  class WithRoutes extends PureComponent {
    constructor(props) {
      super(props);
      this.prop = props;
      const {arrayRoutes} = props;
      this.state = {
        routes: arrayRoutes,
      };
    }
    renderCustomRoute(objRoute) {
      return <Switch>{
        <Route key={`route-${customRouteCounter++}-of ${objRoute.path}`} path={objRoute.path}
          component={objRoute.component} exact />
      }</Switch>;
    }
    renderRoutes(to) {
      let {routes} = this.state;
      const {renderCustomLink, renderLink, renderCleanLink} = this.props;
      if (to !== undefined) {
        const indexS = checkInArOfObjByKeyAndVal(routes, `to`, to);
        routes = new Array(0);
        routes.push(this.state.routes[indexS]);
      }
      return <Switch>
        {
          routes.map((el, index) => {
            return <Route key={`route-${customRouteCounter++}-${index}${el.name} of ${el.to}`} path={el.to} render={() => {
              const Tmp = el.component;
              return <Tmp
                renderCustomLink={renderCustomLink}
                renderCleanLink={renderCleanLink}
                renderLink={renderLink}
                {...el.propsIn}
              />;
            }
            } exact/>;
          })
        }
        <Route key={`route-${customRouteCounter++}-errorRoute of /`} path={`/`} render={() => {
          return <PageError msg={`Страница не найдена!`} renderLink={renderLink} />;
        }} />
      </Switch>;
    }
    render() {
      return <Component
        {...this.props}
        renderRoutes={(path) => {
          return this.renderRoutes(path);
        }}
        renderCustomRoute={(objRoute) => {
          return this.renderCustomRoute(objRoute);
        }}
      />;
    }
  }
  WithRoutes.propTypes = {
    arrayRoutes: PropTypes.array.isRequired,
    renderLink: PropTypes.func.isRequired,
    renderCustomLink: PropTypes.func.isRequired,
    renderCleanLink: PropTypes.func.isRequired,
  };
  return WithRoutes;
};

export default withRoutes;
