import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

const MessageWarning = (props) => {
  const {messages} = props;
  const {warning} = messages;
  const {mainPage} = warning;
  return <Fragment>
    <div className='messageWarning'>{mainPage}</div>
  </Fragment>;
};
MessageWarning.propTypes = {
  messages: PropTypes.object.isRequired,
};

export {
  MessageWarning,
};
