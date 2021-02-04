import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withTime from "./withTime";

configure({adapter: new Adapter()});

const TmpComp = (props) => {
  const {} = props;
  return <div>testDiv</div>;
};

TmpComp.propTypes = {

};

const TmpCompWrapped = withTime(TmpComp);

it(`Component with render timer & setter&&tick props`, () => {
  const AppWrapped = mount(<TmpCompWrapped/>);
  const App = AppWrapped.find(`TmpComp`);
  expect(AppWrapped.state()).toEqual({
    time: 0,
  });
  App.props().setTime(66);
  expect(AppWrapped.state()).toEqual({
    time: 66,
  });
  App.props().tickTimer();
  expect(AppWrapped.state()).toEqual({
    time: 67,
  });
  expect(App.props().renderTimer !== undefined);
});
