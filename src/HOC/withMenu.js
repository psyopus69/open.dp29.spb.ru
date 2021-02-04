// HOC add method renderLink(path) && createLink(object) & need menus(props) array IN (for render method)
// import {Link} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";
import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import checkInArOfObjByKeyAndVal from "../FUNC/checkInArOfObjByKeyAndVal";
import staticFunctions from "../FUNC/staticFunc";

const withMenu = (Component) => {
  let createLinkCounter = 0;
  let createLinkCustomCounter = 0;
  class WithMenu extends PureComponent {
    static stylingSelectedParent(parentSelectedClass, e) {
      if (parentSelectedClass !== undefined) {
        if (e.target.nodeName === `IMG`) {
          if (!e.target.parentNode.parentNode.parentNode.classList.contains(parentSelectedClass)) {
            document.querySelectorAll(`.${parentSelectedClass}`).forEach((element) => {
              element.classList.remove(parentSelectedClass);
            });
            e.target.parentNode.parentNode.parentNode.classList.add(parentSelectedClass);
          }
        } else {
          if (!e.target.parentNode.parentNode.classList.contains(parentSelectedClass)) {
            document.querySelectorAll(`.${parentSelectedClass}`).forEach((element) => {
              element.classList.remove(parentSelectedClass);
            });
            e.target.parentNode.parentNode.classList.add(parentSelectedClass);
          }
        }
      }
    }
    static linkClick(e, linkOb) {
      const {getSearch} = staticFunctions;
      if (linkOb.paramName !== undefined) {
        if (window.location.pathname === linkOb.to && getSearch(linkOb.paramName) === linkOb.paramValue) {
          e.preventDefault();
        }
      } else
      if (window.location.pathname === linkOb.to) {
        e.preventDefault();
      }
      if (linkOb.callback !== undefined) {
        linkOb.callback();
      }
    }
    // static checkPathForClass(e) {
    //   const {getPathname} = staticFunctions;
    //   const a = e.target.querySelectorAll(`a`);
    //   if (a.getAttribute(`href`) === getPathname()) {
    //     WithMenu.stylingSelected(`menuSelected`, e);
    //   }
    // }
    constructor(props) {
      super(props);
      const {menus} = props;
      this.state = {
        menus,
      };
    }
    renderLink(pathIn, parentSelectedClass, noBr) {
      const {colorSelected, parsePath} = staticFunctions;
      let {menus} = this.state;
      if (pathIn !== undefined) {
        const indexTo = checkInArOfObjByKeyAndVal(menus, `to`, pathIn);
        if (indexTo !== false) {
          menus = new Array(0);
          menus.push(this.state.menus[indexTo]);
        } else {
          menus = new Array(0);
          menus.push({
            name: `Not found path ${pathIn}, make sure, that it take place in staticSet, or use renderCustomLink(obj).`,
            to: `/404`
          });
        }
      }
      return menus.map((el, index) => {
        return <div id={`mainMC${createLinkCounter}`} key={`keyForMenus-${createLinkCounter}-${index}:${el.name} of ${el.to}`}
          className={`menuMainChild`}>
          <Link
            onClick={(e) => {
              WithMenu.stylingSelectedParent(parentSelectedClass, e);
              colorSelected(document.getElementById(`menuFooter_${parsePath(el.to).replace(`/`, ``)}`));
              if (window.location.pathname === el.to) {
                e.preventDefault();
              }
            }} key={`keyForMenus-${createLinkCounter++}-${index}:${el.name} of ${el.to}`} to={el.anchor === undefined ? el.to : `${el.to}#${el.anchor}`}>{el.img === undefined ? `` : <img src={`assets/img/${el.img}`} alt={``} /> }{noBr === true ? `` : <br/>} {el.name}
          </Link>
        </div>;
      });
    }
    //  linkOb {
    //       name: `Поиск`,
    //       to: `/search`,
    //       paramName: `search`,
    //       paramValue: getFields()[0].value,
    //       img: `svg/search.svg`,
    //       callback: () => {
    //         document.querySelectorAll(`td#forClearSearch > input`)[0].value = ``;
    //       },
    //       anchor: `componentPageSearch`,
    renderCustomLink(linkOb) {
      return <div id={`mainMCustomC${createLinkCustomCounter}`} key={`keyForMenus-${createLinkCustomCounter}:${linkOb.name} of ${linkOb.to}`}
        className='menuMainChild'>
        <Link key={`keyForMenusCustom-${createLinkCustomCounter++}-${linkOb.name}: of ${linkOb.to}`}
          onClick={(e) => {
            WithMenu.linkClick(e, linkOb);
          }}
          to={linkOb.paramName === undefined ? `${linkOb.to}${ linkOb.anchor === undefined ? `` : `#${linkOb.anchor}`}` : `${linkOb.to}?${linkOb.paramName}=${linkOb.paramValue}${linkOb.anchor === undefined ? `` : `#${linkOb.anchor}`}`}>{linkOb.img === undefined ? linkOb.name : (<img src={`assets/img/${linkOb.img}`} alt={``} />)}</Link>
      </div>;
    }
    renderWrappedLink(linkOb, CompIn, props, callback) {
      return <div id={`mainMCustomCW${createLinkCustomCounter}`} key={`keyForMenus-${createLinkCustomCounter}:${linkOb.name} of ${linkOb.to}`}
        className='menuMainChild'>
        <Link key={`keyForMenusCustom-${createLinkCustomCounter++}-${linkOb.name}: of ${linkOb.to}`}
          onClick={(e) => {
            if (window.location.pathname === linkOb.to) {
              e.preventDefault();
            }
            if (callback !== undefined) {
              callback();
            }
          }}
          to={linkOb.to}>{props === undefined ? <CompIn /> : <CompIn {...props}/>}</Link>
      </div>;
    }
    renderCleanLink(linkOb) {
      return <Link key={`keyForMenusCustom-Clean${createLinkCustomCounter++}-${linkOb.name}: of ${linkOb.to}`}
        onClick={(e) => {
          WithMenu.linkClick(e, linkOb);
        }}
        to={linkOb.paramName === undefined ? `${linkOb.to}${ linkOb.anchor === undefined ? `` : `#${linkOb.anchor}`}` : `${linkOb.to}?${linkOb.paramName}=${linkOb.paramValue}${linkOb.anchor === undefined ? `` : `#${linkOb.anchor}`}`}>{linkOb.img === undefined ? linkOb.name : (<img src={`assets/img/${linkOb.img}`} alt={``} />)}</Link>;
    }
    render() {
      return <Component {...this.props}
        renderLink={(path, parentSelectedClass, noBr) => {
          return this.renderLink(path, parentSelectedClass, noBr);
        }}
        renderCustomLink={(linkObj) => {
          return this.renderCustomLink(linkObj);
        }}
        renderWrappedLink={(linkObj, CompIn, props, callback) => {
          return this.renderWrappedLink(linkObj, CompIn, props, callback);
        }}
        renderCleanLink={(linkOb) => {
          return this.renderCleanLink(linkOb);
        }}
      />;
    }
  }
  WithMenu.propTypes = {
    menus: PropTypes.array.isRequired,
  };
  return WithMenu;
};

export default withMenu;
