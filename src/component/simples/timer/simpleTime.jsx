import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

// Simple for HOC withTimer
const SimpleTime = (props) => {
  const {renderTimer, tickTimer, setTime} = props;
  return <Fragment>
    <div>Test 1.2 SimpleTime React</div>
    <div>Timer: {renderTimer()}</div>
    <div>Controls Tick: <button onClick={() => {
      tickTimer();
    }}>Tick</button></div>
    <div>Set time: <input name='setTime' onChange={(event) => {
      setTime(parseInt(event.target.value, 10));
    }}
    /></div>
  </Fragment>;
};
SimpleTime.propTypes = {
  renderTimer: PropTypes.func.isRequired,
  tickTimer: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

export {
  SimpleTime,
};
