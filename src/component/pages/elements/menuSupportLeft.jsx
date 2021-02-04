import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

const MenuSupportLeft = (props) => {
  const {renderLink} = props;
  return <Fragment>
    <div id={`menuSupLeftMainPage`} className='menuSupLeftMainPage'>{renderLink(`/recording`)}MenuSupportLeft</div>
  </Fragment>;
};
MenuSupportLeft.propTypes = {
  renderLink: PropTypes.func.isRequired,
};

export {
  MenuSupportLeft,
};
