import axios from "axios";

const toAsyncApi = `https://dp29.spb.ru/index.php?id=12`;
const toCounter = `https://feedback.pol29.shn-host.ru/index.php?id=2`;
const apiCounter = (obj) => {
  const necessaryParams = `&log=modxViewers&pass=hardPsOfViewers&secretJs=SoHardPassPhrase`;
  const {params, sql} = obj;
  return axios.create({
    baseURL: toCounter + (params === undefined ? `` : params) + necessaryParams + (sql === `` ? `` : `&sql=` + sql),
    timeout: 1000 * 5,
    withCredentials: true,
  });
};
const api = (obj) => {
  // fot Test Contour add &contour=test
  // const necessaryParams = `&log=modxReactAsync&pass=hardPsOfAsyncUser&secretJs=SoHardPassPhrase&contour=test`;
  const necessaryParams = `&log=modxReactAsync&pass=hardPsOfAsyncUser&secretJs=SoHardPassPhrase`;
  const {params, sql} = obj;
  return axios.create({
    baseURL: toAsyncApi + (params === undefined ? `` : params) + necessaryParams + (sql === `` ? `` : `&need=` + sql),
    timeout: 1000 * 5,
    withCredentials: true,
  });
};
export {
  api,
  apiCounter,
};
