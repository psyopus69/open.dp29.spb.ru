import React from "react";
import {PropTypes} from "prop-types";

const SimpleWithConditionalRender = (props) => {
  const {renderCondition} = props;
  return <React.Fragment>{renderCondition(-1)}{renderCondition(0)}{renderCondition(1)}
  </React.Fragment>;
};
SimpleWithConditionalRender.propTypes = {
  renderCondition: PropTypes.func.isRequired,
};

export {
  SimpleWithConditionalRender,
};
