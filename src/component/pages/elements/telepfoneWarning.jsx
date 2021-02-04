import React from "react";
import {PropTypes} from "prop-types";

const TelephonWarning = (props) => {
  const {phones} = props;
  const {warning} = phones;
  return <div className='telephoneWarningP'>{warning.map((el, index) => {
    return <div key={`phoneWarn:${index}:${el.phone}`} className={`telephoneWarningC`}>
      {`${el.name} : ${el.phone}`}
    </div>;
  })}</div>;
};
TelephonWarning.propTypes = {
  phones: PropTypes.object.isRequired,
};

export {
  TelephonWarning,
};
