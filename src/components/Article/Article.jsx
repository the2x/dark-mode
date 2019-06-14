import React, { Component } from "react";
import { article } from "../../data/data";
import Item from "./Item";

class Article extends Component {
  render() {
    const ArticleItem = article.map((news, index) => {
      return (
        <article className="l-article__item" key={index}>
          <Item news={news} />
        </article>
      );
    });

    return <main className="l-article">{ArticleItem}</main>;
  }
}

export default Article;
