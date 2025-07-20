import React from "react";

type CardProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Card({ children, onClick }: CardProps) {
  return (
    <div className="Card" onClick={onClick}>
      <h3>{children}</h3>
    </div>
  );
}
