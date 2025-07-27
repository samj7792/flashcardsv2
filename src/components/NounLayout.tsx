import Card from "./Card";
import Articles from "./Articles";
import { useEffect, useState } from "react";

type NounLayoutProps = {
  currentCard: {
    id: number;
    article?: string;
    name: string;
    translation: string;
  };
  handleCardClick: (currentCard: any) => void;
  translation: string | undefined;
};

export default function NounLayout({
  currentCard,
  handleCardClick,
  translation,
}: NounLayoutProps) {
  const [isCorrect, setIsCorrect] = useState(false);
  useEffect(() => {
    setIsCorrect(false);
  }, [currentCard.id]);

  return (
    <Card
      className="Card NounLayout"
      key={currentCard.id}
      onClick={() => {
        if (isCorrect) {
          handleCardClick(currentCard);
        }
      }}
    >
      <Articles
        correctArticle={currentCard.article}
        onCorrect={() => setIsCorrect(true)}
      />
      <br />
      {translation ? translation : currentCard.name}
    </Card>
  );
}
