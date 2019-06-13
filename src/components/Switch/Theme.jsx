import React from "react";
import { WrapperContainer } from "../../containers/themeContainer";


const Theme = ({ changeTheme, checked }) => {
  const themeName = checked ? 'light' : 'dark';
  return (
    <div>
      <input onChange={() => changeTheme(themeName)} type="checkbox" checked={checked} value={checked} />
    </div>
  );
};

export default WrapperContainer(Theme);
