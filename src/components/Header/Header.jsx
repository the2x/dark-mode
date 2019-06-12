import React from "react";
import Logo from "./Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import Theme from "../Switch/Theme";

import { connect } from 'react-redux'


const Header = ({theme}) => {
  return (
    <div className="l-header">
      <Logo />
      <Menu />
      <Button />
      <Theme />
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Header);
