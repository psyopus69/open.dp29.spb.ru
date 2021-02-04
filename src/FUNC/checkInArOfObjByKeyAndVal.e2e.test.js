import checkInArOfObjByKeyAndVal from "./checkInArOfObjByKeyAndVal";
import {mockMenus} from "../MOCK/staticSets";

it(`get index of element with given key value in array`, () => {
  expect(checkInArOfObjByKeyAndVal(mockMenus, `to`, `/schedule`)).toBe(1);
});

it(`get index of element with given key value in array`, () => {
  expect(checkInArOfObjByKeyAndVal(mockMenus, `to`, `/nothing`)).toBe(false);
});
