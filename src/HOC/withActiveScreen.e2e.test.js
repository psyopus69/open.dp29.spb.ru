/* need method renderCondition(conditionId), that return needed Component. realize in HOC withConditionalRender.jsx */
import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveScreen from "./withActiveScreen";
import screens from "../MOCK/screens.jsx";
import checkInArOfObjByKeyAndVal from "../FUNC/checkInArOfObjByKeyAndVal";

configure({adapter: new Adapter()});
const Tmp = () => {
  return <div>tmp</div>;
};
const TmpWrapped = withActiveScreen(Tmp);
const renderCondition = (id) => {
  return screens[checkInArOfObjByKeyAndVal(screens, `conditionId`, id)];
};
const tree = mount(<TmpWrapped renderCondition={(id) => {
  return renderCondition(id);
}}/>);
const App = tree.find(`Tmp`);

it(`renderScreen`, () => {
  expect(App.props().renderScreen(-1)).toEqual(screens[0]);
});

it(`change screen`, () => {
  App.props().changeScreen(-1);
  expect(tree.state()).toEqual({
    "activeScreen": -1
  });
});
