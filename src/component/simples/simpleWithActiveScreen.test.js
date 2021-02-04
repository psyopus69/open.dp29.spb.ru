import React from "react";
import renderer from "react-test-renderer";
import {SimpleWithActiveScreen} from "./simpleWithActiveScreen.jsx";

it(`with methods  renderScreen() & changeScreen(id | ++)`, () => {
  const tree = renderer.create(<SimpleWithActiveScreen
    renderScreen={jest.fn()}
    changeScreen={jest.fn()}
  />);
  expect(tree).toMatchSnapshot();
});
