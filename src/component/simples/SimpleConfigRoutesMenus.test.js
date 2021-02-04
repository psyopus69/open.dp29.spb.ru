import renderer from "react-test-renderer";
import React from "react";
import {SimpleConfigRoutesMenus} from "./SimpleConfigRoutesMenus";

it(`all methods of 2 HOCK's withRoutes & withMenu`, () => {
  const tree = renderer.create(<SimpleConfigRoutesMenus renderRoutes={jest.fn()} renderCustomRoute={jest.fn()} renderLink={jest.fn()} renderCustomLink={jest.fn()}/>);
  expect(tree).toMatchSnapshot();
});
