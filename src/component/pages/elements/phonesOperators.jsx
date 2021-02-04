import React from "react";
import {PropTypes} from "prop-types";
import staticFunctions from "../../../FUNC/staticFunc";
import {PageError} from "../pageError.jsx";

const {checkInArOfObjByKeyAndVal, cleanNum} = staticFunctions;
const PhonesOperators = (props) => {
  const {branch, phones, msg, needDivPhone} = props;
  const inn = checkInArOfObjByKeyAndVal(phones, `branch`, branch);
  if (inn !== false) {
    return <div className='organizationPhoneRegsMain'>
      <div className='organizationPhoneRegsChild'>
        {msg === undefined ? `` : msg.msg}{msg === undefined ? `` : msg.addHtml}{msg !== undefined && msg.br === true ? <br/> : ``}{needDivPhone === true ? <div className={`needDivPhone`}><a href={`tel:${cleanNum(phones[inn].phone)}`} rel="noreferrer" target="_blank">{phones[inn].phone}</a></div> : <a href={`tel:${cleanNum(phones[inn].phone)}`} rel="noreferrer" target="_blank">{phones[inn].phone}</a>}
      </div>
    </div>;
  }
  return <PageError msg={`Wrong branch.`} />;
};
PhonesOperators.propTypes = {
  branch: PropTypes.string.isRequired,
  phones: PropTypes.array.isRequired,
  msg: PropTypes.object,
  needDivPhone: PropTypes.bool,
};

export {
  PhonesOperators,
};
