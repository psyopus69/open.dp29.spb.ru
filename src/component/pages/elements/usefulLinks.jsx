import React from "react";
import {PropTypes} from "prop-types";

const UsefulLinks = (props) => {
  const {links, renderLink} = props;
  const {mainPage} = links; // []
  return <div className={`usefulLinks`}>Полезные ссылки:
    <div className={`usefullinksChild`}>
      renderLink -- {renderLink(`/schedule`)}
      <a href="https://google.com">CustomLink</a>
  incomingCustomMassive True links↓
      {mainPage.map((el, index) => {
        return <a key={`mPageLink-${index}:${el.name}:${el.to}`} href={el.to}>{el.name}
        </a>;
      })}
    </div>
  </div>;
};
UsefulLinks.propTypes = {
  links: PropTypes.object.isRequired,
  renderLink: PropTypes.func.isRequired,
};

export {
  UsefulLinks,
};
