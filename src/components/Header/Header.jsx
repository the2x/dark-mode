import React from "react";
import Logo from "./Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import Theme from "../Switch/Theme";

const Header = _ => {
  return (
    <header className="l-header">
      <Logo />
      <Menu />
      <Button />
      <Theme />
    </header>
  );
};

export default Header;
