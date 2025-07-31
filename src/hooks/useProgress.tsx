import { useState, useEffect } from "react";

export type NounProgress = {
  shown: number;
  correct: number;
  incorrect: number;
  mastery: number;
};

type ProgressMap = Record<number, NounProgress>;

function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Load progress from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("progress");
    if (stored) {
      setProgress(JSON.parse(stored));
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("progress", JSON.stringify(progress));
    }
  }, [progress, isInitialized]);

  // Update progress for a given noun
  const updateProgress = (id: number, isCorrect: boolean) => {
    setProgress((prev) => {
      const current = prev[id] || {
        shown: 0,
        correct: 0,
        incorrect: 0,
        mastery: 0,
      };

      const updated: NounProgress = {
        shown: current.shown + 1,
        correct: isCorrect ? current.correct + 1 : current.correct,
        incorrect: !isCorrect ? current.incorrect + 1 : current.incorrect,
        mastery: Math.min(
          5,
          Math.max(0, current.mastery + (isCorrect ? 1 : -1))
        ),
      };

      return {
        ...prev,
        [id]: updated,
      };
    });
  };

  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem("progress");
  };

  return {
    progress,
    updateProgress,
    resetProgress,
  };
}

export { useProgress };
