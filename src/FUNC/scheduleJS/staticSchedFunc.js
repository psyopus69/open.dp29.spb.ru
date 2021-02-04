const timeLen = 11;
const getSearch = (paramName) => {
  const params = new URLSearchParams(window.location.search); // Returns:'?'
  return params.get(paramName);
};
const cleanNum = (str) => {
  return str.replace(/[^\d/]/g, ``);
};
const cleanNumDayTime = (str) => {
  return str.replace(/[^\d/.-]/g, ``).replace(`..`, `.`).replace(`--`, `-`).replace(`.-`, `-`).replace(`-.`, `-`).substring(0, timeLen);
};
const cleanHtml = (node) => {
  if (node === undefined) {
    return;
  }
  node.innerHTML = node.innerHTML.replace(/<br \/>/g, ` `).replace(/<br\/>/g, ` `).replace(/<br>/g, ` `).replace(/<p>&nbps<\/p>/g, ` `).replace(/<p><\/p>/g, ` `);
};
export {
  getSearch,
  cleanNum,
  cleanNumDayTime,
  timeLen,
  cleanHtml,
};
