import React, { Component } from "react";
import { WrapperContainer } from "../../containers/themeContainer";

class Item extends Component {
  render() {
    const { news, theme } = this.props;

    const Categories = news.category.map((cat, index) => {
      return (
        <a className={`l-article__category l-article__category--${theme}`} key={index} href={cat.url}>
          {cat.title}
        </a>
      );
    });

    return (
      <>
        {Categories}
        <h1 className={`l-article__title l-article__title--${theme}`}>{news.title}</h1>
        <p className={`l-article__description l-article__description--${theme}`}>{news.description}</p>
        <div className="l-article__meta">
          <a className={`l-article__meta-link l-article__meta-link--${theme}`} href={news.slug}>Learn more</a>
        </div>
      </>
    );
  }
}

export default WrapperContainer(Item);
