import React from "react";
import { WrapperContainer } from "../../containers/themeContainer";

const Button = ({ theme }) => {
  return (
    <>
      <a className={`c-button c-button--${theme}`} href="#">
        Download
      </a>
    </>
  );
};

export default WrapperContainer(Button);
