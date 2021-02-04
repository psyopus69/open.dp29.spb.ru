/* need method renderCondition(conditionId), that return needed Component. realize in HOC withConditionalRender.jsx */
import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";

const withActiveScreen = (Component) => {
  class WithActiveScreen extends PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = {
        activeScreen: -1,
      };
    }
    changeScreen(screenId) {
      this.setState({
        activeScreen: screenId,
      });
    }

    render() {
      const {activeScreen} = this.state;
      const {renderCondition} = this.props;
      const Condition = renderCondition(activeScreen);
      return <Component
        {...this.props}
        renderScreen={() => {
          return Condition;
        }}
        // renderChangeButton={(screenId) => {
        //   if (screenId === undefined) {
        //     screenId = activeScreen + 1;
        //   }
        //   return <button onClick={() => {
        //     this.changeScreen(screenId);
        //   }}>Change screen</button>;
        // }}
        changeScreen={(screenId) => {
          if (screenId === undefined) {
            screenId = activeScreen + 1;
          }
          this.changeScreen((screenId));
        }}
      />;
    }
  }
  WithActiveScreen.propTypes = {
    renderCondition: PropTypes.func.isRequired,
  };
  return WithActiveScreen;

};

export default withActiveScreen;
