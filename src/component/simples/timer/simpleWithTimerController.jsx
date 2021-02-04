import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

// Complete Counter with buttons & timer
const SimpleWithTimerController = (props) => {
  const {renderTimer, renderChangeButton, renderResetButton} = props;
  return <Fragment>
    <Fragment>Test 1.1 timer React<br/>Timer:<br/> ☺
    </Fragment>
    <Fragment>
      {renderTimer()}
    </Fragment>
    <Fragment>Controls P/S:</Fragment>
    <Fragment>
      {renderChangeButton()}
    </Fragment>
    <Fragment><br/>Reset : </Fragment>
    <Fragment>
      {renderResetButton()}
    </Fragment>
  </Fragment>;
};
SimpleWithTimerController.propTypes = {
  renderTimer: PropTypes.func.isRequired,
  renderChangeButton: PropTypes.func.isRequired,
  renderResetButton: PropTypes.func.isRequired,
};

export {
  SimpleWithTimerController,
};
