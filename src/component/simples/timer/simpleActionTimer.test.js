import React from "react";
import renderer from "react-test-renderer";
import {SimpleActionTimer} from "./simpleActionTimer";

it(`panel with setTimerAction & clear it`, () => {
  const tree = renderer.create(<SimpleActionTimer
    setTimer={jest.fn()}
    clearTimer={jest.fn()}
  />);
  expect(tree).toMatchSnapshot();
});
