import React from "react";
import { connect } from "react-redux";

const Theme = ({changeTheme}) => {
  return (
    <div>
      <input onChange={() => changeTheme('light')} type="radio" name="theme" defaultChecked /> Light
      <input onChange={() => changeTheme('dark')} type="radio" name="theme" /> Dark
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: theme =>
      dispatch({
        type: "CHANGE_THEME",
        payload: theme
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme);
