import React from "react";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withTimerController from "./withTimerController";
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

const TmpComp = (props) => {
  const {} = props;
  return <div>testDiv</div>;
};

TmpComp.propTypes = {
  clearTimer: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  getStateCustom: PropTypes.func.isRequired,
  setStateCustom: PropTypes.func.isRequired,
  tickTimer: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

const TmpCompWrapped = withTimerController(TmpComp);

it(`Component with render timer & setter&&tick. Test static logic actionChange():  props -1 `, () => {
  // const AppWrapped = mount(<TmpCompWrapped/>);
  const props = {
    clearTimer: jest.fn(),
    setTimer: jest.fn(),
    getStateCustom: () => {
      return -1;
    },
    setStateCustom: jest.fn(),
    tickTimer: jest.fn(),
    setTime: jest.fn(),
  };
  TmpCompWrapped.actionChange(props);
  expect(props.clearTimer).toHaveBeenCalledTimes(1);
  expect(props.setStateCustom).toHaveBeenNthCalledWith(1, 0);
  expect(props.setTime).toHaveBeenNthCalledWith(1, 0);
});

it(`Component with render timer & setter&&tick. Test static logic actionChange():  props 0 `, () => {
  const props = {
    clearTimer: jest.fn(),
    setTimer: jest.fn(),
    getStateCustom: () => {
      return 0;
    },
    setStateCustom: jest.fn(),
    tickTimer: jest.fn(),
    setTime: jest.fn(),
  };
  TmpCompWrapped.actionChange(props);
  expect(props.setStateCustom).toHaveBeenNthCalledWith(1, 1);
  expect(props.setTimer).toHaveBeenNthCalledWith(1, props.tickTimer, 1000);
});

it(`Component with render timer & setter&&tick. Test static logic actionChange():  props 1`, () => {
  const props = {
    clearTimer: jest.fn(),
    setTimer: jest.fn(),
    getStateCustom: () => {
      return 1;
    },
    setStateCustom: jest.fn(),
    tickTimer: jest.fn(),
    setTime: jest.fn(),
  };
  TmpCompWrapped.actionChange(props);
  expect(props.clearTimer).toHaveBeenNthCalledWith(1);
  expect(props.setStateCustom).toHaveBeenNthCalledWith(1, 0);
});

it(`Component with render timer & setter&&tick. Test static logic actionChange():  props Default`, () => {
  const props = {
    clearTimer: jest.fn(),
    setTimer: jest.fn(),
    getStateCustom: () => {
      return `Nan`;
    },
    setStateCustom: jest.fn(),
    tickTimer: jest.fn(),
    setTime: jest.fn(),
  };
  TmpCompWrapped.actionChange(props);
  expect(props.clearTimer).toHaveBeenNthCalledWith(1);
});

it(`Component with render timer & setter&&tick. Test static logic onReset():  props ~ `, () => {
  // const AppWrapped = mount(<TmpCompWrapped/>);
  const props = {
    clearTimer: jest.fn(),
    setTimer: jest.fn(),
    getStateCustom: () => {
      return -1;
    },
    setStateCustom: jest.fn(),
    tickTimer: jest.fn(),
    setTime: jest.fn(),
  };
  TmpCompWrapped.onReset(props);
  expect(props.clearTimer).toHaveBeenCalledTimes(1);
  expect(props.setStateCustom).toHaveBeenNthCalledWith(1, 0);
  expect(props.setTime).toHaveBeenNthCalledWith(1, 0);
});

