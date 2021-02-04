import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCustomActionTimer from "./withCustomActionTimer";

configure({adapter: new Adapter()});

const TmpComp = (props) => {
  const {} = props;
  return <div>testDiv</div>;
};

TmpComp.propTypes = {

};

const TmpCompWrapped = withCustomActionTimer(TmpComp);

it(`custom timer with custom interval 2 func`, (done) => {
  const AppWrapped = mount(<TmpCompWrapped/>);
  const App = AppWrapped.find(`TmpComp`);
  const onHandle = jest.fn();
  const onHandleSecondary = jest.fn();
  App.props().setTimer(onHandle, 200);
  setTimeout(() => {
    expect(onHandle).toHaveBeenCalledTimes(3);
    App.props().clearTimer();
    App.props().setTimer(onHandleSecondary, 200);
    // done();
    setTimeout(() => {
      expect(onHandleSecondary).toHaveBeenCalledTimes(2);
      expect(onHandle).toHaveBeenCalledTimes(3);
      done();
    }, 500);
  }, 700);

});

it(`custom timer with custom interval 1 func`, (done) => {
  const AppWrapped = mount(<TmpCompWrapped/>);
  const App = AppWrapped.find(`TmpComp`);
  const onHandle = jest.fn();
  App.props().setTimer(onHandle, 200); // -< 1 first
  setTimeout(() => {
    expect(onHandle).toHaveBeenCalledTimes(1);
    // App.props().clearTimer();
    App.props().setTimer(onHandle, 100); // shadowed
    App.props().setTimer(onHandle, 100); // shadowed
    App.props().setTimer(onHandle, 100); // -< 29 only this
    setTimeout(() => {
      expect(onHandle).toHaveBeenCalledTimes(3); // -< 29 total
      done();
    }, 210);
  }, 300);

});
