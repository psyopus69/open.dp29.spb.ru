import ReactDOM from "react-dom";
import React from "react";
import {MainScreen} from "./mainScreen.jsx";
import "../public/assets/css/stylesProd.scss";
import "../public/assets/css/fonts.css";
import {apiCounter} from "./API/api";

const a = apiCounter({
  params: `&pageName=reactMain`,
  sql: `addVisit`,
});
a.post(``);
const init = () => {
  ReactDOM.render(<MainScreen/>,
      document.getElementById(`root`)
  );
};

init();
