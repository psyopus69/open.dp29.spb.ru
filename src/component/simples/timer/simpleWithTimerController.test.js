import React from "react";
import renderer from "react-test-renderer";
import {SimpleWithTimerController} from "./simpleWithTimerController";

it(`panel with timer & control buttons play/pause & reset`, () => {
  const tree = renderer.create(<SimpleWithTimerController renderTimer={jest.fn()} renderChangeButton={jest.fn()} renderResetButton={jest.fn()}
  />);
  expect(tree).toMatchSnapshot();
});
