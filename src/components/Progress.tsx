import Card from "./Card";
import { useProgressContext } from "../hooks/ProgressContext";

type ProgressProps = {
  currentCardId: number;
};

export default function Progress({ currentCardId }: ProgressProps) {
  const { updateProgress } = useProgressContext();

  return (
    <div className="ProgressButtons">
      <Card
        className="Progress"
        onClick={(e) => {
          e.stopPropagation();
          updateProgress(currentCardId, false);
        }}
      >
        -
      </Card>
      <Card
        className="Progress"
        onClick={(e) => {
          e.stopPropagation();
          updateProgress(currentCardId, true);
        }}
      >
        +
      </Card>
    </div>
  );
}
