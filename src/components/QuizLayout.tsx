import { useState } from "react";
import Card from "./Card";
import { TopicData } from "../App";

type QuizLayoutProps = {
  topicDatas: TopicData[];
};

export default function QuizLayout({ topicDatas }: QuizLayoutProps) {
  const [quizData, setQuizData] = useState(null);
  return (
    <>
      <Card></Card>
    </>
  );
}
