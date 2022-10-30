import { useState } from "react";
import Quiz from "./components/Quiz";
import Welcome from "./components/Welcome";

export default function App() {
  const [isStart, setIsStart] = useState(false);
  const [isDark, setIsDark] = useState(true);
  function handleDark() {
    setIsDark((prev) => !prev);
  }
  function start() {
    setIsStart((prev) => !prev);
  }

  document.getElementById("root").style =
    isDark && "background-color: #04081f; color: #d3e1fe";
  return isStart ? (
    <Quiz
      startFunc={start}
      isDark={isDark}
      handleDark={handleDark}
    />
  ) : (
    <Welcome
      startFunc={start}
      isDark={isDark}
      handleDark={handleDark}
    />
  );
}
