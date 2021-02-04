import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withRouter from "./withRouter";

configure({adapter: new Adapter()});

const MockDiv = () => {
  return <div>MockDiv</div>;
};
const MockDivWrapped = withRouter(MockDiv);
const Tree = mount(<MockDivWrapped/>);
const App = Tree.find(`MockDiv`);
it(`HOCK render Component into BrowserRouter from "react-router-dom"`, () => {
  expect(App.parent().name()).toBe(`Router`);
});
