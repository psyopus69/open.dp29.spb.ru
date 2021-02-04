import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Switch} from "react-router-dom";
import withRoutes from "./withRoutes";
import {mockAddRoutes} from "../MOCK/staticSets";
import {Route} from "react-router-dom";
import checkInArOfObjByKeyAndVal from "../FUNC/checkInArOfObjByKeyAndVal";

configure({adapter: new Adapter()});

const MockDiv = () => {
  return <div>MockDiv</div>;
};
const MockDivWrapped = withRoutes(MockDiv);
const Tree = mount(<MockDivWrapped arrayRoutes={mockAddRoutes}/>);
const App = Tree.find(`MockDiv`);
let tmpCounter = 0;
it(`add array from props to state`, () => {
  expect(Tree.state()).toEqual({
    routes: mockAddRoutes,
  });
});

it(`renderRoutes() -> All`, () => {
  expect(App.props().renderRoutes()).toEqual(<Switch>{mockAddRoutes.map((el, index) => {
    return <Route key={`route-${tmpCounter++}-${index} of ${el.path}`} path={el.path} component={el.component}
      exact/>;
  })}</Switch>);
});

it(`renderRoutes('/about') >> from list <<`, () => {
  const indexS = checkInArOfObjByKeyAndVal(mockAddRoutes, `path`, `/schedule`);
  const routes = new Array(0);
  routes.push(mockAddRoutes[indexS]);
  expect(App.props().renderRoutes(`/schedule`)).toEqual(<Switch>{routes.map((el, index) => {
    return <Route key={`route-${tmpCounter++}-${index} of ${el.path}`} path={el.path} component={el.component}
      exact/>;
  })}</Switch>);
});

it(`renderCustomRoute(obj)`, () => {
  const objRoute = {
    path: `/custom`,
    component: MockDiv,
  };
  expect(App.props().renderCustomRoute(objRoute)).toEqual(<Switch><Route
    key={`route-${tmpCounter++}-of ${objRoute.path}`}
    path={objRoute.path}
    component={objRoute.component}
    exact>
  </Route></Switch>);
  expect(App.props().renderCustomRoute(objRoute)).toEqual(<Switch><Route
    key={`route-${tmpCounter++}-of ${objRoute.path}`}
    path={objRoute.path}
    component={objRoute.component}
    exact>
  </Route></Switch>);
});

