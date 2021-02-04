import React from "react";
import {PropTypes} from "prop-types";

const TelephonUseful = (props) => {
  const {phones} = props;
  const {useful} = phones;
  return <div className='telephoneUsefulP'>{useful.map((el, index) => {
    return <div key={`phoneUseful:${index}:${el.phone}`} className={`telephoneUsefulC`}>
      {`${el.name} : ${el.phone}`}
    </div>;
  })}</div>;
};
TelephonUseful.propTypes = {
  phones: PropTypes.object.isRequired,
};

export {
  TelephonUseful,
};
