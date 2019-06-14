import React from "react";
import { WrapperContainer } from "../../containers/themeContainer";


const Theme = ({ changeTheme, checked }) => {
  const themeName = checked ? 'light' : 'dark';
  return (
    <div className="l-header__theme">
      <label className="label toggle">
        <input onChange={() => changeTheme(themeName)} type="checkbox" />
        <div className="toggle-control"></div>
      </label>
    </div>
  );
};

export default WrapperContainer(Theme);
