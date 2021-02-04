import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// need 3 HOC's before (withCustomActionTimer, withCustomState, withTime) or self func for settings
const withTimerController = (Component) => {

  class WithTimerController extends PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
      props.setStateCustom(0);
    }
    // actionChange() { // start/stop
    //   const {getStateCustom, clearTimer, setStateCustom, setTime, setTimer, tickTimer} = this.props;
    //   const action = getStateCustom();
    //   switch (action) {
    //     case -1: {
    //       clearTimer(); // Delete TimerOld
    //       setStateCustom(0); // setState action ~
    //       setTime(0); // setTime
    //       break;
    //     }
    //     case 0: {
    //       setStateCustom(1); // setState action ~
    //       setTimer(tickTimer, 1000); // setTimer for Tick
    //       break;
    //     }
    //     case 1: {
    //       // eslint-disable-next-line no-console
    //       console.log(`cleanTimer >>>>>`);
    //       clearTimer(); // Delete TimerOld
    //       setStateCustom(0); // setState action ~
    //       break;
    //     }
    //     default: {
    //       clearTimer(); // Delete TimerOld
    //       break;
    //     }
    //   }
    // }
    // onReset() { // reset
    //   const {clearTimer, setStateCustom, setTime} = this.props;
    //   setStateCustom(0);
    //   clearTimer();
    //   setTime(0);
    //   // console.log(`getStateCustom() -> ${getStateCustom()}`);
    // }
    render() {
      const action = this.props.getStateCustom();
      return <Component {...this.props}
        renderChangeButton={(customOn, customOff) => {
          if (customOn === undefined) {
            customOn = `start`;
          }
          if (customOff === undefined) {
            customOff = `stop`;
          }
          return <button onClick={() => {
            WithTimerController.actionChange(this.props);
          }}>{action === 0 ? customOn : customOff}</button>;
        }}
        renderResetButton={() => {
          return <button onClick={() => {
            WithTimerController.onReset(this.props);
          }}>Reset</button>;
        }}
      />;
    }
    static actionChange(props) { // start/stop
      const {getStateCustom, clearTimer, setStateCustom, setTime, setTimer, tickTimer} = props;
      const action = getStateCustom();
      switch (action) {
        case -1: {
          clearTimer(); // Delete TimerOld
          setStateCustom(0); // setState action ~
          setTime(0); // setTime
          break;
        }
        case 0: {
          setStateCustom(1); // setState action ~
          setTimer(tickTimer, 1000); // setTimer for Tick
          break;
        }
        case 1: {
          clearTimer(); // Delete TimerOld
          setStateCustom(0); // setState action ~
          break;
        }
        default: {
          clearTimer(); // Delete TimerOld
          break;
        }
      }
    }
    static onReset(props) {
      const {clearTimer, setStateCustom, setTime} = props;
      setStateCustom(0);
      clearTimer();
      setTime(0);
      // console.log(`getStateCustom() -> ${getStateCustom()}`);
    }
  }

  WithTimerController.propTypes = {
    clearTimer: PropTypes.func.isRequired,
    setTimer: PropTypes.func.isRequired,
    getStateCustom: PropTypes.func.isRequired,
    setStateCustom: PropTypes.func.isRequired,
    tickTimer: PropTypes.func.isRequired,
    setTime: PropTypes.func.isRequired,
  };

  return WithTimerController;
};

export default withTimerController;
