import React, {Fragment} from "react";
// import {PropTypes} from "prop-types";
// import NameLogo from "../../../../public/assets/img/svg/dragon.svg";

const NameOrganization = (props) => {
  const {} = props;
  return <Fragment>
    <div className='orgNameLogo'>
      <div className={`svgLogo`}><img src={`assets/img/svg/logoBestS3.svg`} alt={``} /></div>
    </div>
  </Fragment>;
};
NameOrganization.propTypes = {
  // organization: PropTypes.object.isRequired,
};

export {
  NameOrganization,
};
