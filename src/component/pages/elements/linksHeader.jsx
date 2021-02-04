import React from "react";
import {PropTypes} from "prop-types";

const LinksHeader = (props) => {
  const {links} = props;
  const {vk} = links;
  return <div className='linksHeaderParent'>
    <div className='linksHeaderChild'>
      <a href={vk.to} rel="noreferrer" target='_blank'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vk" width="28" height="28"
          viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2196F3" fill="none" strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 6h2v12c-4.5 -1 -8 -6.5 -9 -12"/>
          <path d="M20 6c-1 2 -3 5 -5 6h-3"/>
          <path d="M20 18c-1 -2 -3 -5 -5 -6"/>
        </svg>
      </a>
    </div>
  </div>;
};
LinksHeader.propTypes = {
  links: PropTypes.object.isRequired,
};

export {
  LinksHeader,
};
