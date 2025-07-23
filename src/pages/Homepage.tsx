import { useState } from "react";
import "../App.css";
import Card from "../components/Card";
import data from "../jsons/cards.json";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

type TopicKey = keyof typeof data.topics;
export type TopicData = {
  id: number;
  article?: string;
  name: string;
  translation: string;
};

export default function Homepage() {
  const [topics, setTopics] = useState(Object.keys(data.topics));
  const [topicDatas, setTopicDatas] = useState<TopicData[] | null>(null);
  console.log(`topics`, topics);

  const handleTopicClick = (topic: string) => {
    const topicData = data.topics[topic as TopicKey];
    console.log(`Selected topic data:`, topicData);

    setTopicDatas(topicData);
    console.log(`topicDatas`, topicDatas);
  };

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="Card-container">
          {!topicDatas && (
            <>
              <h3>Topics</h3>
              {topics.map((topic, index) => (
                <Link
                  key={index}
                  to={`/${topic}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card onClick={() => handleTopicClick(topic)}>
                    {topic.toUpperCase()}
                  </Card>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
