import React from "react";
import renderer from "react-test-renderer";
import {SimpleWithConditionalRender} from "./simpleWithConditionalRender.jsx";

it(`panel with setTimerAction & clear it`, () => {
  const tree = renderer.create(<SimpleWithConditionalRender
    addCondition={jest.fn()}
    clearCondition={jest.fn()}
    renderCondition={jest.fn()}
  />);
  expect(tree).toMatchSnapshot();
});
