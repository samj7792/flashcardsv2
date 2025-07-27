import React from "react";

type CardProps = {
  children?: React.ReactNode;
  onClick?: (event: any) => void;
  onHover?: () => void;
  className?: string;
  class?: string;
  style?: React.CSSProperties;
  id?: string;
};

export default function Card({ children, onClick, className }: CardProps) {
  return (
    <div className={className ? className : "Card"} onClick={onClick}>
      <strong>{children}</strong>
    </div>
  );
}
