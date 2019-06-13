import React from "react";
import { menu } from "../../data/data";
import Item from "./Item";

const Menu = () => {
    const Navigation = menu.map((nav, index) => {
      return <Item key={index} nav={nav} />;
    });

    return (
      <>
        <ul className="c-navigation">{Navigation}</ul>
      </>
    );
  }

export default Menu;
