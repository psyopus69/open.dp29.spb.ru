import {PropTypes} from "prop-types";
import React from "react";

const SimpleWithActiveScreen = (props) => {
  const {renderScreen, changeScreen} = props;
  return <React.Fragment>
    <div>Change screen to id = -1 : <button onClick={() => {
      changeScreen(-1);
    }}> to -1 </button></div>
    <div>Change screen ++ : <button onClick={() => {
      changeScreen();
    }}>screen ++</button></div>
    <div>Screen :</div>{renderScreen()}
  </React.Fragment>;
};
SimpleWithActiveScreen.propTypes = {
  renderScreen: PropTypes.func.isRequired,
  changeScreen: PropTypes.func.isRequired,
};

export {
  SimpleWithActiveScreen,
};
