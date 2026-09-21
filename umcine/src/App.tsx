import { createContext, useContext, useState } from "react";

type StudyMode = "focus" | "break";

const StudyModeContext = createContext<StudyMode>("focus");

function StudyModeStatus() {
  const studyMode = useContext(StudyModeContext);

  return <p>현재 모드: {studyMode}</p>;
}

export default function App() {
  const [studyMode, setStudyMode] = useState<StudyMode>("focus");

  function handleToggleStudyMode() {
    setStudyMode((currentMode) =>
      currentMode === "focus" ? "break" : "focus",
    );
  }

  return (
    <StudyModeContext value={studyMode}>
      <StudyModeStatus />
      <button onClick={handleToggleStudyMode}>
        모드 바꾸기
      </button>
    </StudyModeContext>
  );
}