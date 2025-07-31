import React, { createContext, useContext } from "react";
import { useProgress } from "./useProgress"; // your existing hook

// Define the context type
const ProgressContext = createContext<ReturnType<typeof useProgress> | null>(
  null
);

// Provider component
export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const progressValue = useProgress();
  return (
    <ProgressContext.Provider value={progressValue}>
      {children}
    </ProgressContext.Provider>
  );
};

// Hook to use progress anywhere in the app
export const useProgressContext = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx)
    throw new Error("useProgressContext must be used within ProgressProvider");
  return ctx;
};
