import React from "react";

const Item = ({nav}) => {
  return (
    <li><a href={nav.url}>{nav.title}</a></li>
  );
};

export default Item;
