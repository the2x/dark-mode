import React from "react";
import { connect } from 'react-redux'


const Logo = ({ theme }) => {
  return (
    <div>
      <div className={`l-header__logo l-header__logo--${theme}`} />Logo
      <div className="l-header__info" />Desciption
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Logo);
