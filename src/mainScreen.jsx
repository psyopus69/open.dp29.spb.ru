import React, {Fragment} from "react";
import {Footer} from "./component/mainScreen/footer.jsx";
import {Header} from "./component/mainScreen/header.jsx";
import {MainScreenDynamicContent} from "./component/mainScreen/mainScreenDynamicContent.jsx";
import withMenu from "./HOC/withMenu.js";
import withRoutes from "./HOC/withRoutes.js";
import {mockMenus} from "./MOCK/staticSets";
import {BrowserRouter} from "react-router-dom";

const RoutingDynamicContentWrapped = withMenu(withRoutes(MainScreenDynamicContent));
const FooterWrapped = withMenu(Footer);
const HeaderWrapped = withMenu(Header);
const MainScreen = (props) => {
  const {} = props;
  return <Fragment>
    <BrowserRouter>
      <HeaderWrapped menus={mockMenus} />
      <RoutingDynamicContentWrapped menus={mockMenus} arrayRoutes={mockMenus}/>
      <FooterWrapped menus={mockMenus} />
    </BrowserRouter>
  </Fragment>;
};

export {
  MainScreen,
};
