import React, { Component } from "react";
import { article } from "../../data/data";
import Item from "./Item";

class Article extends Component {
  render() {
    const ArticleItem = article.map((news, index) => {
      return (
        <div key={index}>
          <Item news={news} />
        </div>
      );
    });

    return <div>{ArticleItem}</div>;
  }
}

export default Article;
