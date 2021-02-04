import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCustomState from "./withCustomState";

configure({adapter: new Adapter()});

const TmpComp = (props) => {
  const {} = props;
  return <div>testDiv</div>;
};

TmpComp.propTypes = {

};

const TmpCompWrapped = withCustomState(TmpComp);

it(`custom action state with setter & getter`, () => {
  const AppWrapped = mount(<TmpCompWrapped/>);
  const App = AppWrapped.find(`TmpComp`);
  expect(AppWrapped.state()).toEqual({
    stateF: -1,
  });
  expect(App.props().getStateCustom()).toBe(-1);
  App.props().setStateCustom(`mockStatus`);
  expect(AppWrapped.state()).toEqual({
    stateF: `mockStatus`,
  });
});
