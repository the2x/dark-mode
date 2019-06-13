import React from "react";
import { WrapperContainer } from "../../containers/themeContainer";


const Theme = ({ changeTheme }) => {
  return (
    <div>
      <input onChange={() => changeTheme('light')} type="radio" name="theme" defaultChecked /> Light
      <input onChange={() => changeTheme('dark')} type="radio" name="theme" /> Dark
    </div>
  );
};

export default WrapperContainer(Theme);
