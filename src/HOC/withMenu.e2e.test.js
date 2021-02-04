import React from "react";
import {configure, mount} from "enzyme";
import {BrowserRouter, Link} from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import withMenu from "./withMenu";
import checkInArOfObjByKeyAndVal from "../FUNC/checkInArOfObjByKeyAndVal";
import {mockMenus} from "../MOCK/staticSets";

configure({adapter: new Adapter()});

let counter = 0;
const MockDiv = () => {
  return <div>TMP</div>;
};
const Wrapped = withMenu(MockDiv);
const MockDivWrapped = mount(<Wrapped menus={mockMenus}/>);
const Child = MockDivWrapped.find(`MockDiv`);
it(`set Menus in props to state`, () => {
  expect(MockDivWrapped.state()).toEqual({
    menus: mockMenus,
  });
});

it(`renderLink() -> All `, () => {
  const Fake = mockMenus.map((el, index) => {
    return <Link onClick={(e) => {
      if (window.location.pathname === el.to) {
        e.preventDefault();
      }
    }} key={`keyForMenus-${counter++}-${index}:${el.name} of ${el.to}`} to={el.to}>{el.name}</Link>;
  });
  const Fake2 = Child.props().renderLink();
  expect(Fake === Fake2);
});

it(`renderLink(path)`, () => {
  const indexTo = checkInArOfObjByKeyAndVal(mockMenus, `to`, `/`);
  let menus = new Array(0);
  menus.push(mockMenus[indexTo]);
  const Fake = menus.map((el, index) => {
    return <Link onClick={(e) => {
      if (window.location.pathname === el.to) {
        e.preventDefault();
      }
    }} key={`keyForMenus-${counter++}-${index}:${el.name} of ${el.to}`} to={el.to}>{el.name}</Link>;
  });
  const Fake2 = Child.props().renderLink(`/`);
  expect(Fake === Fake2);
});

it(`renderCustomLink(linkObj) second times`, () => {
  const customLink = {
    to: `custom`,
    name: `customName`,
  };
  expect(Child.props().renderCustomLink(customLink)).toEqual(
      <Link key={`keyForMenusCustom-${counter++}-${customLink.name}: of ${customLink.to}`}
        to={customLink.to}>
        {customLink.name}
      </Link>);
  expect(Child.props().renderCustomLink(customLink)).toEqual(
      <Link key={`keyForMenusCustom-${counter++}-${customLink.name}: of ${customLink.to}`}
        to={customLink.to}>
        {customLink.name}
      </Link>);
});

it(`click on Link with path = window.location = '/'`, () => {
  const customLink = {
    to: `custom`,
    name: `customName`,
  };
  const CusLink = () => {
    return <BrowserRouter>
      {Child.props().renderCustomLink(customLink)}
    </BrowserRouter>;
  };
  // window.location.hfef = `/`;
  const tree = mount(<CusLink/>);
  const Button = tree.find(`Link`);
  Button.simulate(`click`);
  // expect(location.pathname).toEqual(`/custom`); ###################<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!!!!!!!!!!@@@@@@@
});

// it(`click on Link with path = window.location = '/custom' must e.preventDefault()`, () => {
//   const customLink = {
//     to: `custom`,
//     name: `customName`,
//   };
//   const CusLink = Child.props().renderCustomLink(customLink);
//   // window.location.hfef = `/`;
//   const tree = mount(<CusLink/>);
//   const Button = tree.find(`Link`);
//   // Button.simulate(`click`);
//   expect(Button.click()).toEqual(
//       (e) => {
//         e.preventDefault();
//       }
//   );
// });
