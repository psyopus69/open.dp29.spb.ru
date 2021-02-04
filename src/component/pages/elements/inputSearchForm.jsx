// require withForm HOC
import React from "react";
import {PropTypes} from "prop-types";

const InputSearchForm = (props) => {
  const {renderForm, getFields, renderCustomLink, callback} = props;
  return <React.Fragment><table><tbody><tr>
    <td id={`forClearSearch`}>{renderForm(() => {
      document.querySelectorAll(`#searchForm > table > tbody > tr > td > div.menuMainChild > a`)[0].click();
    })}</td>
    <td onClick={(e) => {
      e.currentTarget.children[0].children[0].click();
      if (callback !== undefined) {
        callback();
      }
    }}>{renderCustomLink({
        name: ``,
        to: `/search`,
        paramName: `search`,
        paramValue: getFields()[0].value,
        // img: `svg/search.svg`,
        callback: () => {
          document.querySelectorAll(`td#forClearSearch > input`)[0].value = ``;
        },
        anchor: `componentPageSearch`,
      }
      )}</td>
  </tr></tbody></table>


  </React.Fragment>;
};
InputSearchForm.propTypes = {
  renderForm: PropTypes.func.isRequired,
  getFields: PropTypes.func.isRequired,
  renderCustomLink: PropTypes.func.isRequired,
  callback: PropTypes.func,
};

export {
  InputSearchForm,
};
