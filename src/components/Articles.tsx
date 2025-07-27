import React, { useState } from "react";

type ArticlesProps = {
  correctArticle: string | undefined;
  onCorrect: () => void;
};

export default function Articles({ correctArticle, onCorrect }: ArticlesProps) {
  const articleArr: string[] = ["der", "die", "das"];
  const [clickedArticles, setClickedArticles] = useState<string[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const handleClick = (article: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (answeredCorrectly) return;

    if (article === correctArticle) {
      setAnsweredCorrectly(true);
      onCorrect();
    }
    setClickedArticles((prev) =>
      prev.includes(article) ? prev : [...prev, article]
    );
  };

  return (
    <>
      {articleArr.map((item) => {
        let className = "Article";

        // Only apply styling to the last clicked button
        if (clickedArticles.includes(item)) {
          if (item === correctArticle) {
            className += " correct";
          } else {
            className += " incorrect";
          }
        }

        return (
          <button
            key={item}
            className={className}
            onClick={
              className === "Article correct"
                ? () => handleClick(item)
                : (e) => handleClick(item, e)
            }
          >
            {item}
          </button>
        );
      })}
    </>
  );
}
