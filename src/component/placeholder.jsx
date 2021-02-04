import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

// Complete Counter with buttons & timer
const Placeholder = (props) => {
  const {image} = props;
  return <Fragment>
    Loading Screen<img alt='placeholder' src={image} className='placeholderMain' />
  </Fragment>;
};
Placeholder.propTypes = {
  image: PropTypes.string.isRequired,
};

export {
  Placeholder,
};
