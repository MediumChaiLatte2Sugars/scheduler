import { useEffect, useState } from "react";

export default function useVisualMode(initMode) {
  const [mode, setMode] = useState(initMode);
  const [history, setHistory] = useState([initMode]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode);
      history.pop();
      setHistory(prev => [...prev, newMode]);
      return;
    }
    setMode(newMode);
    setHistory(prev => [...prev, newMode]);
  };

  const back = () => {
    if (history.length > 1) {
      history.pop();
    }
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
}