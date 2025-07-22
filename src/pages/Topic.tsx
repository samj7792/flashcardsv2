import React from "react";
import { Link, useLocation } from "react-router-dom";
import QuizLayout from "../components/QuizLayout";
import { TopicData } from "./Homepage"; // Adjust the import path as necessary
import data from "../jsons/cards.json"; // Assuming you have a data file with topics
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Topic() {
  const location = useLocation();
  const topicName = location.pathname.split("/").pop();
  console.log(`Current topic: ${topicName}`);

  // Extract topic data based on the topic name
  const topicData = data.topics[topicName as keyof typeof data.topics] || [];
  console.log(`Topic data:`, topicData);
  console.log(topicData.length);
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <h2>{topicName ? topicName.toUpperCase() : "Select a Topic"}</h2>
        {topicData.length > 0 ? (
          <QuizLayout topicDatas={topicData as TopicData[]} />
        ) : (
          <p>No data available for this topic.</p>
        )}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Card>Back to Topics</Card>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
