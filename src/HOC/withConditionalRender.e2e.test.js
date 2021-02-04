import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withConditionalRender from "./withConditionalRender.jsx";
import screens from "../MOCK/screens";

configure({adapter: new Adapter()});

const Tmp = (props) => {
  const {} = props;
  return <div>temp0</div>;
};
const App = withConditionalRender(Tmp);
const Mounted = mount(<App/>);
const TmpWrapped = Mounted.find(Tmp);

// it(`addCondition(-1, Condition1)`, () => {
//   TmpWrapped.props().addCondition(-1, renderComponent);
//   expect(Mounted.state().conditions).toEqual([
//     {
//       conditionId: -1,
//       conditionRender: renderComponent,
//     },
//   ]);
// });
// it(`add second condition`, () => {
//   TmpWrapped.props().addCondition(0, renderComponent);
//   expect(Mounted.state()).toEqual({
//     conditions: [
//       {
//         conditionId: -1,
//         conditionRender: renderComponent,
//       },
//       {
//         conditionId: 0,
//         conditionRender: renderComponent,
//       },
//     ]
//   });
// });
// it(`clear condition id = 0`, () => {
//   TmpWrapped.props().clearCondition(0);
//   expect(Mounted.state()).toEqual({
//     conditions: [
//       {
//         conditionId: -1,
//         conditionRender: renderComponent,
//       },
//     ]
//   });
// });
it(`render condition id = -1`, () => {
  expect(TmpWrapped.props().renderCondition(-1)).toEqual(screens[0].conditionRender);
});
it(`render condition id = 0`, () => {
  expect(TmpWrapped.props().renderCondition(0)).toEqual(screens[1].conditionRender);
});
// it(`clear all (-1 & 0) conditions`, () => {
//   TmpWrapped.props().clearCondition(-1);
//   expect(Mounted.state()).toEqual({
//     conditions: []
//   });
// });
