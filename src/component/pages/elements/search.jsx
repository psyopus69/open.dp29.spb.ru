import React, {Fragment} from "react";
import {PropTypes} from "prop-types";

const Search = (props) => {
  const {renderLink} = props;
  return <Fragment>
    <div id={`searchMainPage`} className='searchMainPage'>{renderLink(`/search`)}Search</div>
  </Fragment>;
};
Search.propTypes = {
  renderLink: PropTypes.func.isRequired,
};

export {
  Search,
};
