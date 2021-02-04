import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

// Simple for HOC withTimer
const SimpleActionTimer = (props) => {
  const {clearTimer, setTimer} = props;
  let tmpForInc = 0;
  return <Fragment>
    <div>Test 1.3 SimpleActionTimer React</div>
    <div>Action incTimerStart <button onClick={() => {
      setTimer(() => {
        // eslint-disable-next-line no-console
        console.log(`from timer tmpForInc = ${tmpForInc}`);
        tmpForInc += 1;
      }, 1000);
    }}>startConsoleLog</button><button onClick={() => {
      clearTimer();
    }}>stopIncrement</button> ${`->`} : {tmpForInc}</div>
  </Fragment>;
};
SimpleActionTimer.propTypes = {
  setTimer: PropTypes.func.isRequired,
  clearTimer: PropTypes.func.isRequired,
};

export {
  SimpleActionTimer,
};
