// add style & parse main table into needed template
import {getSearch, cleanNum, cleanNumDayTime, timeLen, cleanHtml} from "./staticSchedFunc.js";
import constants from "./constants.js";

setTimeout(function () {
  location.reload();
}, constants.schedulePageReload);
document.querySelector(`#here`).appendChild(document.querySelector(`div#delForTmp table tbody`));
const forRemove = [`div.navMainSched`, `table#here > tbody:last-child > tr:first-child`];
for (let i = 0; i < forRemove.length; i++) {
  const hh2 = document.querySelectorAll(forRemove[i]);
  for (let j = 0; j < hh2.length; j++) {
    hh2[j].remove();
  }
}
let flagNeedSearch = getSearch(`need`).toLowerCase().includes(`spec`);
if (flagNeedSearch === true) {
  flagNeedSearch = cleanNum(getSearch(`need`));
}
// if spec, clean other branch
if (flagNeedSearch !== false) {
  const hh = document.querySelectorAll(`#here > tbody:last-child > tr`);
  for (let i = 0; i < hh.length; i++) {
    if (!hh[i].classList.contains(`spec0`) && !hh[i].classList.contains(`spec${flagNeedSearch}`)) {
      hh[i].remove();
    }
  }
}
// get all Tr
const allTr = document.querySelectorAll(`#here > tbody:last-child > tr`);
for (let i = 0; i < allTr.length; i++) { // all tr's
  const forCleanAllTd = allTr[i].querySelectorAll(`td`);
  // in first td(Uch/Spec) if contains keyWords, let it be with no changes
  if (flagNeedSearch === false) { // ped
    if (!forCleanAllTd[0].innerText.toLowerCase().includes(`зав`) && !forCleanAllTd[0].innerText.toLowerCase().includes(`под`) && !forCleanAllTd[0].innerText.toLowerCase().includes(`деж`)) {
      forCleanAllTd[0].innerText = cleanNum(forCleanAllTd[0].innerText);
    } else if (forCleanAllTd[0].innerText.toLowerCase().includes(`зав`)) {
      forCleanAllTd[0].parentNode.classList.add(`administering`);
    }
    // in first td(Uch/Spec) if contains keyWords, `под`, substr it for 4 symbols
    if (forCleanAllTd[0].innerText.toLowerCase().includes(`под`) || forCleanAllTd[0].innerText.toLowerCase().includes(`деж`)) {
      forCleanAllTd[0].innerText = forCleanAllTd[0].innerText.substring(0, 4);
    }
  }
  // in third td(location) clear all, except /
  if (forCleanAllTd[2] !== undefined) {
    forCleanAllTd[2].innerText = cleanNum(forCleanAllTd[2].innerText);
  }
  // only for spec61 clear №
  if (getSearch(`need`).toLowerCase().includes(`spec61`)) {
    forCleanAllTd[0].innerText = forCleanAllTd[0].innerText.replace(/№/g, `#`);
    forCleanAllTd[1].innerText = forCleanAllTd[1].innerText.replace(/№/g, `#`);
  }
  // clean all td (1,2,3) by html cleaner
  cleanHtml(forCleanAllTd[0]);
  cleanHtml(forCleanAllTd[1]);
  cleanHtml(forCleanAllTd[2]);
  // in last td(schedule table) clear all, & substr
  const lastTd = allTr[i].querySelector(`td:last-child`);
  const allTdIn4 = lastTd.querySelectorAll(`table > tbody > tr > td`);
  // 4th td with table of schedule
  for (let j = 1; j < allTdIn4.length; j += 2) {
    // split td of a days!
    // add replace func here, clear td of days. fixable.
    // if smaller then need, then template `-`
    if (cleanNumDayTime(allTdIn4[j].innerText).length < timeLen) {
      allTdIn4[j].innerText = `-`;
      allTdIn4[j].classList.add(`noReception`);
    } else {
      // for 61 replace - on ` ` ↓
      if (getSearch(`need`).toLowerCase().includes(`61`)) {
        allTdIn4[j].innerText = cleanNumDayTime(allTdIn4[j].innerText).replace(`-`, ` `);
      } else {
        allTdIn4[j].innerText = cleanNumDayTime(allTdIn4[j].innerText);
      }
    }
    allTr[i].appendChild(allTdIn4[j]);
  }
  lastTd.remove();
}
document.getElementById(`delForTmp`).remove();
// addStyle controller.(4 styles ped/spec29/61.css)
if (getSearch(`need`).toLowerCase().includes(`ped`) || getSearch(`need`).toLowerCase().includes(`spec`)) {
  let head = document.getElementsByTagName(`head`)[0];
  let link = document.createElement(`link`);
  link.rel = `stylesheet`;
  link.type = `text/css`;
  link.href = `assets/js/scheduleMons/css/styles_${getSearch(`need`)}.css`;
  link.media = `all`;
  head.appendChild(link);
}
