import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import QuizPage from "./components/QuizPage";

function App() {
  const [username, setUsername] = useState("");
  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
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
