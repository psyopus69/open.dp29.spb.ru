import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";

const withCustomState = (Component) => {
  class WithState extends PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
      const {initialState} = props;
      this.state = {
        stateF: initialState === undefined ? -1 : initialState,
      };
    }
    setStateCustom(value, callback) {
      this.setState({
        stateF: value,
      }, () => {
        if (callback !== undefined) {
          callback(this.state.stateF);
        }
      });
    }
    render() {
      const {stateF} = this.state;
      return <Component
        {...this.props}
        getStateCustom={() => {
          return stateF;
        }}
        setStateCustom={(value, calback) => {
          this.setStateCustom(value, calback);
        }}
      />;
    }
  }
  WithState.propTypes = {
    initialState: PropTypes.any,
  };
  return WithState;
};
export default withCustomState;
