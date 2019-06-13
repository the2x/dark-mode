import React from "react";
import { WrapperContainer } from '../../containers/themeContainer'

const Logo = ({ theme }) => {
  return (
    <div className="l-header__logo">
      <div className={`l-header__logo-pic l-header__logo-pic--${theme}`} />Logo
      <div className={`l-header__logo-title l-header__logo-title--${theme}`} />Desciption
    </div>
  );
};

export default WrapperContainer(Logo)
