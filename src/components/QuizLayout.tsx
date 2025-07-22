import { useState } from "react";
import Card from "./Card";
import { TopicData } from "../pages/Homepage";

type QuizLayoutProps = {
  topicDatas: TopicData[];
};

export default function QuizLayout({ topicDatas }: QuizLayoutProps) {
  const [quizData, setQuizData] = useState(topicDatas);
  const [translation, setTranslation] = useState<string | undefined>(undefined);
  console.log(`Quiz data:`, quizData);

  // on click show the translation of the card
  const handleCardClick = (data: TopicData) => {
    setTranslation(data.translation);
    // remove the card from the quizData
    setTimeout(() => {
      setQuizData((prevData) => prevData.filter((item) => item.id !== data.id));
      setTranslation(undefined); // Reset translation after showing it
    }, 1000);
    console.log(`Updated quiz data:`, quizData);
  };
  // on hover show the translation of the card
  const handleHover = (data: TopicData) => {
    console.log(`Card hovered:`, data);
    // Here you can implement the logic to show the translation or any other action
    setTranslation(data.translation);
  };
  // only show one card at a time
  const currentCard = quizData.length > 0 ? quizData[0] : null;

  return (
    <div className="QuizLayout">
      <div className="Quiz-container">
        {currentCard ? (
          <Card
            key={currentCard.id}
            className="QuizCard--on"
            onClick={() => handleCardClick(currentCard)}
          >
            {translation ? translation : currentCard.name}
          </Card>
        ) : (
          <p>No more cards available for this topic.</p>
        )}
      </div>
    </div>
  );
}
