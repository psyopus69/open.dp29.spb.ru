import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

// Simple for HOC withTimer
const SimpleCustomState = (props) => {
  const {getStateCustom, setStateCustom} = props;
  return <Fragment>
    <div>Test 1.4 SimpleCustomState React</div>
    <button onClick={() => {
      // eslint-disable-next-line no-console
      console.log(getStateCustom());
    }}>console status</button>
    <div>setCustomState <input onChange={(event) => {
      // console.log(event.target.value);
      setStateCustom(event.target.value, (state) => {
        // eslint-disable-next-line no-console
        console.log(`state after change -> ${state}`);
      });
    }}/></div>
  </Fragment>;
};
SimpleCustomState.propTypes = {
  getStateCustom: PropTypes.func.isRequired,
  setStateCustom: PropTypes.func.isRequired,
};

export {
  SimpleCustomState,
};
