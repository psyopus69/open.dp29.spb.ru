import React, {PureComponent} from "react";

const withCustomActionTimer = (Component) => {
  class WithActionTimer extends PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = {
        timerId: -1,
      };
    }

    setTimerAction(customAction, timeout) { // for CustomAction
      if (this.state.timerId !== -1) {
        this.clearTimer();
      }
      this.setState({
        timerId: setInterval(() => {
          customAction();
        }, timeout),
      });
    }
    clearTimer() {
      const {timerId} = this.state;
      this.setState({
        timerId: -1,
      }, () => {
        clearInterval(timerId);
      });
    }
    render() {
      return <Component
        {...this.props}
        clearTimer={() => {
          this.clearTimer();
        }}
        setTimer={(action, timeout) => {
          this.setTimerAction(action, timeout);
        }}
      />;
    }
    componentWillUnmount() {
      const {timerId} = this.state;
      clearInterval(timerId);
    }
  }
  return WithActionTimer;
};

export default withCustomActionTimer;
