import React from "react";
import renderer from "react-test-renderer";
import {SimpleTime} from "./simpleTime";

it(`panel with time & setTimeAction & tickTime`, () => {
  const tree = renderer.create(<SimpleTime renderTimer={jest.fn()} setTime={jest.fn()} tickTimer={jest.fn()}
  />);
  expect(tree).toMatchSnapshot();
});
