import React from "react";
// import {PropTypes} from "prop-types";

const SendAppeal = (props) => {
  const {} = props;
  return <div className='sendAppealHeader'>
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="40" height="40"
      viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2196F3" fill="none" strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <polyline points="3 7 12 13 21 7"/>
    </svg>
  </div>;
};
SendAppeal.propTypes = {
  // timeWork: PropTypes.object.isRequired,
  // scheduleWork: PropTypes.object.isRequired,
};

export {
  SendAppeal,
};
