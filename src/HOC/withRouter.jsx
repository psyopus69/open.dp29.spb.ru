// HOC wrap Component in BrowserRouter
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
const withRouter = (Component) => function WithRouter(props) {
  return (<Router>
    <Component {...props}/>
  </Router>);
};

// export default withRouter;
