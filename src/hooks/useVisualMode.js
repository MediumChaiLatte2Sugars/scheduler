import { useState } from "react";

export default function useVisualMode(initMode) {
  const [mode, setMode] = useState(initMode);
  const [history, setHistory] = useState([initMode]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode);
      setHistory(prev => [...prev.slice(0, -1), newMode]);
      return;
    }
    setMode(newMode);
    setHistory(prev => [...prev, newMode]);
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1); // create new history array without last element
      setHistory(newHistory);
      setMode(newHistory[newHistory.length - 1]); // set mode to new last element
    }
  };

  return { mode, transition, back };
}