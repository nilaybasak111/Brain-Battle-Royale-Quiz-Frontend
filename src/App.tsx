import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext, { type QuestionType } from "./context/UserContext";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import QuizPage from "./components/QuizPage";

function App() {
  const [username, setUsername] = useState("");
  const [quizData, setQuizData] = useState<QuestionType[]>([]);

  return (
    <>
      <UserContext.Provider
        value={{ username, setUsername, quizData, setQuizData }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
