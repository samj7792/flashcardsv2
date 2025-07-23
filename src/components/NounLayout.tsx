import React, { useState } from "react";
import Card from "./Card";

type NounLayoutProps = {
  currentCard?: {
    id: number;
    article?: string;
    name: string;
    translation: string;
  };
};

export default function NounLayout({ currentCard }: NounLayoutProps) {
  const baseArticles = [
    { article: "der", wrong: false, right: false },
    { article: "die", wrong: false, right: false },
    { article: "das", wrong: false, right: false },
  ];
  const [articles, setArticles] = useState(baseArticles);

  const handleClick = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    console.log(`Article clicked: ${item.article}`);
    // if the article does not match the currentCard's article, turn the card red
    if (currentCard && currentCard.article !== item.article) {
      const newArticle = { article: item.article, wrong: true, right: false };
      const newlist = articles.filter((i) => i.article !== item.article);
      newlist.push(newArticle);
      return setArticles(newlist);
    } else {
      const newArticle = { article: item.article, wrong: false, right: true };
      const newlist = articles.filter((i) => i.article !== item.article);
      console.log("newlsit", newlist);
      newlist.push(newArticle);
      return setArticles(newlist);
    }
  };

  return (
    <div className="NounLayout-articles">
      {articles.map((item, index) =>
        item.right ? (
          <button
            key={index}
            className="NounLayout-article"
            onClick={(e) => handleClick(e, item)}
            style={{ backgroundColor: "green" }}
          >
            {item.article}
          </button>
        ) : item.wrong ? (
          <button
            key={index}
            className="NounLayout-article"
            onClick={(e) => handleClick(e, item)}
            style={{ backgroundColor: "red" }}
          >
            {item.article}
          </button>
        ) : (
          <button
            key={index}
            className="NounLayout-article"
            onClick={(e) => handleClick(e, item)}
          >
            {item.article}
          </button>
        )
      )}
    </div>
  );
}
