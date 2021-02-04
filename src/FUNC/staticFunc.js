const compareArrays = (ar1, ar2) => {
  return JSON.stringify(ar1) === JSON.stringify(ar2);
};
const checkInArOfObjByKeyAndVal = (array, keySearch, value, needAll) => {
  let need;
  if (needAll === true) {
    need = [];
  }
  for (let i = 0; i < array.length; i++) {
    let keys = Object.keys(array[i]);
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] === keySearch && array[i][keys[j]] === value) {
        if (needAll === true) {
          need.push(i);
        } else {
          return i;
        }
      }
    }
  }
  if (needAll === true && need.length > 0) {
    return need;
  }
  return false;
};
const getMapInsteadAr = (ar, mainKey) => { // mainKey - int!
  const fakeMap = [];
  let insideCounter;
  if (mainKey === undefined) {
    insideCounter = 0;
  }
  for (let i = 0; i < ar.length; i++) {
    if (insideCounter !== undefined) {
      fakeMap[insideCounter] = ar[i];
      insideCounter++;
    }
    Object.keys(ar[i]).map((el2, ind2) => {
      if (el2 === mainKey && insideCounter === undefined) {
        fakeMap[parseInt(Object.values(ar[i])[ind2], 10)] = ar[i];
      }
    });
  }
  return fakeMap;
};
const getPathname = () => {
  return window.location.pathname;
};
const getSearch = (paramName) => {
  const params = new URLSearchParams(window.location.search); // Returns:'?'
  return params.get(paramName);
};
const checkValueBySchema = (schema, valObj) => {
  const {min, max, type} = schema;
  if (typeof (valObj.value) !== type) {
    if (type !== `any`) {
      return false;
    }
  }
  if (typeof (valObj.value) === `string`) {
    if (valObj.value.length > max || valObj.value.length < min) {
      return false;
    }
  } else if (typeof (valObj.value) === `number`) {
    if (valObj.value > max || valObj.value < min) {
      return false;
    }
  }
  return true;
};
const removeElements = (elms) => elms.forEach((el) => el.remove());
const checkLP = (pS, l, p) => {
  // console.log(`l:p = ${l}:${p};  S[0].login:pS[0].password = ${pS[0].login}:${pS[0].password} `);
  if (l === pS[0].login && p === pS[0].password) {
    return {
      role: pS[0].role,
    };
  }
  return false;
};
const showHideById = (id) => {
  if (document.getElementById(id).offsetParent === null) {
    document.getElementById(id).style.display = `block`;
  } else {
    document.getElementById(id).style.display = `none`;
  }
};
const hideById = (id) => {
  if (document.getElementById(id).offsetParent !== null) {
    document.getElementById(id).style.display = `none`;
  }
};
const withZeroInt = (num) => {
  return num < 9 ? `0${num}` : num;
};
const parsePath = (str) => {
  return str.split(`?`)[0];
};
const parseSearch = (str, search) => {
  const allSearch = str.split(`?`)[1].split(`&`);
  for (let i = 0; i < allSearch.length; i++) {
    if (allSearch[i].split(`=`)[0] === search) {
      return allSearch[i].split(`=`)[1];
    }
  }
  return null;
};
const cleanNum = (str) => {
  return str.replace(/[^\d]/g, ``);
};
const selectedCssClassName = `menuSelected`;
const cleanAllSelected = () => {
  const ar = document.getElementsByClassName(selectedCssClassName);
  for (let i = 0; i < ar.length; i++) {
    ar[i].classList.remove(selectedCssClassName);
  }
};
const cleanAllSelectedDynamic = (classToDelete) => {
  const ar = document.getElementsByClassName(classToDelete);
  for (let i = 0; i < ar.length; i++) {
    ar[i].classList.remove(selectedCssClassName);
  }
};
const colorSelected = (el) => {
  if (el === undefined || el === null || el.classList === undefined) {
    return;
  }
  if (!el.classList.contains(selectedCssClassName)) {
    el.classList.add(selectedCssClassName);
  }
};
const uncolorSelected = (el) => {
  if (el === undefined || el === null || el.classList === undefined) {
    return;
  }
  if (el.classList.contains(selectedCssClassName)) {
    el.classList.remove(selectedCssClassName);
  }
};
const childLinkClick = (e, needHideControl) => {
  const thisInputRadio = e.target.querySelector(`a`);
  if (thisInputRadio !== null) {
    thisInputRadio.click();
  }
  if (needHideControl === false) {
    return;
  }
  hideById(`menuMainMapForSH`);
};
const checkClassByPass = (pathName, className) => {
  return getPathname() === pathName ? className : ``;
};
const checkClassBySearch = (pathName, searchName, searchVal, className) => {
  return getPathname() === pathName && getSearch(searchName) === searchVal ? className : ``;
};
const colorMenuByPath = (path) => {
  colorSelected(document.getElementById(`mainMenu_${path.replace(`/`, ``)}`));
  colorSelected(document.getElementById(`menuFooter_${path.replace(`/`, ``)}`));
};
const uncolorMenuByPath = (path) => {
  uncolorSelected(document.getElementById(`mainMenu_${path.replace(`/`, ``)}`));
  uncolorSelected(document.getElementById(`menuFooter_${path.replace(`/`, ``)}`));
};
const timeToClose = () => {
  const date = new Date();
  if (date.getDay() === 0 || (date.getDay() === 5 && date.getHours() > 20) || date.getDay() === 6) {
    return `откроется в Понедельник в 08:00`;
  }
  if (date.getHours() < 8 || date.getHours() >= 20) {
    return `откроется через ${(date.getHours() >= 20 ? 8 + 23 - date.getHours() : 7 - date.getHours())}ч и ${60 - date.getMinutes()}м`;
  }
  return `закроется через ${19 - date.getHours()}ч и ${60 - date.getMinutes()}м`;
};
const openClick = (e) => {
  if (e.currentTarget.parentNode.querySelector(`div.sf-accordion__content`).classList.contains(`hide`)) {
    const allH = e.currentTarget.parentNode.parentNode.querySelectorAll(`div.sf-accordion__content`);
    for (let i = 0; i < allH.length; i++) {
      if (allH[i].classList.contains(`hide`) === false) {
        allH[i].parentNode.querySelector(`div.withMinus`).classList.remove(`withMinus`);
        allH[i].parentNode.querySelector(`div.clicked`).classList.remove(`clicked`);
        allH[i].classList.add(`hide`);
      }
    }
    e.currentTarget.parentNode.querySelector(`div.sf-accordion__content`).classList.remove(`hide`);
    e.currentTarget.classList.add(`withMinus`);
    e.currentTarget.classList.add(`clicked`);
    location.href = `#${e.currentTarget.parentNode.id}`;
    return;
  }
  e.currentTarget.parentNode.querySelector(`div.sf-accordion__content`).classList.add(`hide`);
  e.currentTarget.classList.remove(`withMinus`);
  e.currentTarget.classList.remove(`clicked`);
};
const staticFunctions = {
  compareArrays,
  checkInArOfObjByKeyAndVal,
  getMapInsteadAr,
  getPathname,
  getSearch,
  checkValueBySchema,
  removeElements,
  checkLP,
  showHideById,
  hideById,
  withZeroInt,
  parsePath,
  parseSearch,
  cleanNum,
  cleanAllSelected,
  colorSelected,
  uncolorSelected,
  selectedCssClassName,
  childLinkClick,
  checkClassByPass,
  checkClassBySearch,
  cleanAllSelectedDynamic,
  colorMenuByPath,
  timeToClose,
  uncolorMenuByPath,
  openClick
};

export default staticFunctions;
