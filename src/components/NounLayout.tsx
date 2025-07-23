import React from "react";
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
  return (
    <Card className="NounCard">
      <Card className="Article">Der</Card>
      <Card className="Article">Die</Card>
      <Card className="Article">Das</Card>
      <Card>{currentCard?.name}</Card>
    </Card>
  );
}
