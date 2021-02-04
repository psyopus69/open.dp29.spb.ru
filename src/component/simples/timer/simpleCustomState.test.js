import React from "react";
import renderer from "react-test-renderer";
import {SimpleCustomState} from "./simpleCustomState";

it(`panel with setStatus & getStatus`, () => {
  const tree = renderer.create(<SimpleCustomState getStateCustom={jest.fn()} setStateCustom={jest.fn()}
  />);
  expect(tree).toMatchSnapshot();
});
