import React, { Component } from "react";
import { menu } from "../../data/data";
import Item from "./Item";

class Menu extends Component {
  render() {
    const Navigation = menu.map((nav, index) => {
      return <Item key={index} nav={nav} />;
    });

    return (
      <div>
        <ul>{Navigation}</ul>
      </div>
    );
  }
}

export default Menu;
