import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext, { type QuestionType } from "./context/UserContext";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import QuizPage from "./components/QuizPage";
import Result from "./components/Result";

function App() {
  const [username, setUsername] = useState("");
  const [quizData, setQuizData] = useState<QuestionType[]>([]);
  const [score, setScore] = useState(0);

  return (
    <>
      {/* Provides All Global application state (username, quizData, score) */}
      <UserContext.Provider
        value={{
          username,
          setUsername,
          quizData,
          setQuizData,
          score,
          setScore,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
