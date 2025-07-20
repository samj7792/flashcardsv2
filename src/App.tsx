import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import QuizLayout from "./components/QuizLayout";
import data from "./jsons/cards.json";

type TopicKey = keyof typeof data.topics;
export type TopicData = {
  id: number;
  article?: string;
  name: string;
  translation: string;
};

function App() {
  const [topics, setTopics] = useState(Object.keys(data.topics));
  const [topicDatas, setTopicDatas] = useState<TopicData[] | null>(null);

  const handleTopicClick = (topic: string) => {
    const topicData = data.topics[topic as TopicKey];
    console.log(`Selected topic data:`, topicData);

    setTopicDatas(topicData);
    console.log(`topicDatas`, topicDatas);
  };

  return (
    <div className="App">
      <header className="App-header">Flashcards V2</header>
      <div className="App-body">
        <h3>Topics</h3>
        <div className="Card-container">
          {!topicDatas ? (
            topics.map((topic, index) => (
              <Card key={index} onClick={() => handleTopicClick(topic)}>
                {topic.toUpperCase()}
              </Card>
            ))
          ) : (
            <QuizLayout topicDatas={topicDatas} />
          )}
          <Card
            onClick={() => {
              setTopics(Object.keys(data.topics));
              setTopicDatas(null);
            }}
          >
            <strong>Reset</strong>
          </Card>
        </div>
      </div>
      <footer className="App-footer">
        <p>
          Made with ❤️ by{" "}
          <a className="App-link" href="me">
            Sam
          </a>{" "}
          ***WIP***
        </p>
      </footer>
    </div>
  );
}

export default App;
