import React from "react";
import {PropTypes} from "prop-types";
import {mockPageInfo} from "../../../MOCK/staticSets";
import staticFunctions from "../../../FUNC/staticFunc";

const {checkInArOfObjByKeyAndVal, cleanNum} = staticFunctions;
const osmpGet = (osmpNeed) => {
  if (osmpNeed === false) {
    return `.`;
  }
  const inn = checkInArOfObjByKeyAndVal(mockPageInfo.phones.operatorsMainRegs, `branch`, `osmp`);
  return <React.Fragment>, Скорая (<a
    href={`tel:${inn !== false ? cleanNum(mockPageInfo.phones.operatorsMainRegs[inn].phone) : `103`}`}
    rel="noreferrer" target="_blank">{
      inn !== false ? mockPageInfo.phones.operatorsMainRegs[inn].phone : `103`
    }</a>) - Ежедневно, круглосуточно!</React.Fragment>;
};
const TimeWork = (props) => {
  const {scheduleWork, msg, osmpNeed} = props;
  const {startTh, endTh, startD, endD} = scheduleWork;
  return <div className={`logoTimeWork`} id={`logoTimeWork`}>
    {msg === undefined ? `` : msg}
     с {startTh}:00 до {endTh}:00 с {startD} по {endD}
    {osmpGet(osmpNeed)}
  </div>;
};
TimeWork.propTypes = {
  scheduleWork: PropTypes.object.isRequired,
  msg: PropTypes.string,
  osmpNeed: PropTypes.bool,
};
export {
  TimeWork,
};
