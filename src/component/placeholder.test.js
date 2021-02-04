import React from "react";
import renderer from "react-test-renderer";
import {Placeholder} from "./placeholder";

it(`placeholder with custom image`, () => {
  const Tree = renderer.create(<Placeholder image={`assets/img/placeholder_1.gif`}/>);
  expect(Tree).toMatchSnapshot();
});
