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
  const [articles, setArticles] = useState([
    { article: "der", wrong: false, right: false },
    { article: "die", wrong: false, right: false },
    { article: "das", wrong: false, right: false },
  ]);
  // const articles = ["der", "die", "das"];

  // const articles = [
  //   { article: "der", wrong: false, right: false },
  //   { article: "die", wrong: false, right: false },
  //   { article: "das", wrong: false, right: false },
  // ];

  const handleClick = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    console.log(`Article clicked: ${item.article}`);
    // if the article does not match the currentCard's article, turn the card red
    if (currentCard && currentCard.article !== item.article) {
      console.log(`Correct article: ${currentCard.article}`);
      // set relevant article to have wrong = true
    }
  };

  return (
    <div className="NounLayout-articles">
      {articles.map((item, index) => (
        <button
          key={index}
          className="NounLayout-article"
          onClick={(e) => handleClick(e, item)}
        >
          {item.article}
        </button>
      ))}
    </div>
  );
}
