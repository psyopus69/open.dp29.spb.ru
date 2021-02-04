import React, {Fragment} from "react";
import {PropTypes} from "prop-types";
import staticFunctions from "../../../FUNC/staticFunc";

const {showHideById, childLinkClick, checkClassByPass} = staticFunctions;
const MenuMainFirst = (props) => {
  const {renderLink} = props;
  return <Fragment>
    <table className={`menuMain`}>
      <tbody>
        <tr>
          <td id={`mainMenu_covid`} className={checkClassByPass(`/covid`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/covid`, `menuSelected`)}</td>
          <td id={`mainMenu_vakc`} className={checkClassByPass(`/vakc`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/vakc`, `menuSelected`)}</td>
          <td id={`mainMenu_prof`} className={checkClassByPass(`/prof`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/prof`, `menuSelected`)}</td>
          <td id={`mainMenu_contacts`} className={checkClassByPass(`/contacts`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/contacts`, `menuSelected`)}</td>
        </tr>
      </tbody>
    </table>
    <table className={`menuMainAdd`}>
      <tbody>
        <tr>
          <td id={`mainMenu_location`} className={checkClassByPass(`/location`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/location`, `menuSelected`)}</td>
          <td id={`mainMenu_recording`} className={checkClassByPass(`/recording`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/recording`, `menuSelected`)}</td>
          <td id={`mainMenu_payServices`} className={checkClassByPass(`/payServices`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/payServices`, `menuSelected`)}</td>
          <td id={`mainMenu_schedule`} className={checkClassByPass(`/schedule`, ` menuSelected`)} onClick={(e) => {
            childLinkClick(e);
          }}>{renderLink(`/schedule`, `menuSelected`)}</td>
        </tr>
      </tbody>
    </table>
    <div className={`btnOpenMap`}
      onClick={() => {
        showHideById(`menuMainMapForSH`);
      }}
    >Карта Сайта</div>
    <div className={`menuMainMap`} id={`menuMainMapForSH`}>
      <table className={`menuMainMap`}>
        <tbody>
          <tr>
            <td id={`mainMenu_kzr`} className={checkClassByPass(`/kzr`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/kzr`, `menuSelected`, true)}</td>
            <td colSpan={2} id={`mainMenu_kdc`} className={checkClassByPass(`/kdc`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/kdc`, `menuSelected`, true)}</td>
            <td id={`mainMenu_rehabilitation`} className={checkClassByPass(`/rehabilitation`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/rehabilitation`, `menuSelected`, true)}</td>
          </tr>
        </tbody>
      </table>
      <table className={`menuMainMap`}>
        <tbody>
          <tr>
            <td id={`mainMenu_acEnvironment`} className={checkClassByPass(`/acEnvironment`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/acEnvironment`, `menuSelected`, true)}</td>
            <td id={`mainMenu_reviews`} className={checkClassByPass(`/reviews`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/reviews`, `menuSelected`, true)}</td>
            <td id={`mainMenu_postReview`} className={checkClassByPass(`/postReview`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/postReview`, `menuSelected`, true)}</td>
            <td id={`mainMenu_osmp`} className={checkClassByPass(`/osmp`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/osmp`, `menuSelected`, true)}</td>
          </tr>
        </tbody>
      </table>
      <table className={`menuMainMap`}>
        <tbody>
          <tr>
            <td id={`mainMenu_vacancies`} className={checkClassByPass(`/vacancies`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/vacancies`, `menuSelected`, true)}</td>
            <td id={`mainMenu_collective`} className={checkClassByPass(`/collective`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/collective`, `menuSelected`, true)}</td>
            <td id={`mainMenu_tradeUnion`} className={checkClassByPass(`/tradeUnion`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/tradeUnion`, `menuSelected`, true)}</td>
            <td id={`mainMenu_antiCorruption`} className={checkClassByPass(`/antiCorruption`, ` menuSelected`)} onClick={(e) => {
              childLinkClick(e);
            }}>{renderLink(`/antiCorruption`, `menuSelected`, true)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>;
};
MenuMainFirst.propTypes = {
  renderLink: PropTypes.func.isRequired,
};

export {
  MenuMainFirst,
};
