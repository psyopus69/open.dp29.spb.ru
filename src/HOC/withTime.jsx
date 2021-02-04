import React, {PureComponent} from "react";

const withTime = (Component) => {

  class WithTime extends PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = {
        time: 0,
      };
    }
    setTime(time) {
      this.setState((prev) => ({
        time: time === undefined ? prev.time : time,
      }));
    }
    actionTick() {
      this.setState((prev) => {
        return {
          time: prev.time + 1,
        };
      });
    }
    render() {
      const {time} = this.state;
      return <Component {...this.props}
        renderTimer={() => {
          return <React.Fragment>{time >= 60 ? `${withZero(Math.floor(time / 60))} : ${withZero(time % 60)}` : `00 : ${withZero(time)}`}<br/></React.Fragment>;
        }}
        tickTimer={() => {
          this.actionTick();
        }}
        setTime={(timeSet) => {
          this.setTime(timeSet);
        }}
      />;
    }

  }

  return WithTime;
};
const withZero = (time) => {
  return time > 9 ? time : `0` + time;
};

export default withTime;
