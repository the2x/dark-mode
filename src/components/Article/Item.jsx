import React, { Component } from "react";

class Item extends Component {
  render() {
    const { news } = this.props;

    const Categories = news.category.map((cat, index) => {
      return (
        <a key={index} href={cat.title}>
          {cat.title}
        </a>
      );
    });

    return (
      <>
        {Categories}
        <h1>{news.title}</h1>
        <p>{news.description}</p>
        <a href={news.slug}>Lern more</a>
      </>
    );
  }
}

export default Item;
