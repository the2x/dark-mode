import React from "react";
import { WrapperContainer } from "../../containers/themeContainer";

const Item = ({ nav, theme }) => {
  return (
    <li className="c-navigation__list">
      <a
        className={`c-navigation__list-link c-navigation__list-link--${theme}`}
        href={nav.url}
      >
        {nav.title}
      </a>
    </li>
  );
};

export default WrapperContainer(Item);
