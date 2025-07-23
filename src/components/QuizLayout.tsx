import { useState } from "react";
import Card from "./Card";
import { TopicData } from "../pages/Homepage";
import NounLayout from "./NounLayout";

type QuizLayoutProps = {
  topicDatas: TopicData[];
  topicName?: string; // Optional, if you want to display the topic name
};

export default function QuizLayout({ topicDatas, topicName }: QuizLayoutProps) {
  const [quizData, setQuizData] = useState(topicDatas);
  const [translation, setTranslation] = useState<string | undefined>(undefined);
  const [clicked, setClicked] = useState(false);
  const [currentCard, setCurrentCard] = useState<TopicData | null>(
    quizData.length > 0
      ? quizData[Math.floor(Math.random() * quizData.length)]
      : null
  );
  console.log(`Quiz data:`, quizData);

  // on click show the translation of the card
  const handleCardClick = (data: TopicData) => {
    console.log(`Card clicked:`, data);
    if (!clicked) {
      setTranslation(data.translation);
      setClicked(true);
    } else if (clicked) {
      // remove the current card from quizData
      const updatedQuizData = quizData.filter((item) => item.id !== data.id);
      setQuizData(updatedQuizData);
      setClicked(false);
      setTranslation(undefined);
      // select a new random card from the updated quizData
      if (updatedQuizData.length > 0) {
        const newCard =
          updatedQuizData[Math.floor(Math.random() * updatedQuizData.length)];
        setCurrentCard(newCard);
      } else {
        setCurrentCard(null);
      }
      console.log(`Updated quiz data:`, updatedQuizData);
    }
  };

  return (
    <div className="QuizLayout">
      <div className="Quiz-container">
        {currentCard ? (
          topicName === "nouns" ? (
            <Card
              key={currentCard.id}
              onClick={() => handleCardClick(currentCard)}
            >
              <NounLayout currentCard={currentCard} />
              {translation ? translation : currentCard.name}
            </Card>
          ) : (
            <Card
              key={currentCard.id}
              onClick={() => handleCardClick(currentCard)}
            >
              {translation ? translation : currentCard.name}
            </Card>
          )
        ) : (
          <p>No more cards available for this topic.</p>
        )}
      </div>
    </div>
  );
}
