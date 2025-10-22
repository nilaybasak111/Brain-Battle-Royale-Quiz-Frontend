import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// To Suffel the Options of Questions
const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizPage = () => {
  const navigate = useNavigate();
  const { username, quizData, score, setScore } = useContext(UserContext);
  //console.log("This is username in quiz page", username);
  //console.log("This is quizData in quiz page", quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (quizData.length === 0) {
    setTimeout(() => navigate("/"), 3000);
    return (
      <div className="container m-5">
        <p>No Quiz Data Available. Please Start A Quiz from the Home Page.</p>
        <p>Redirecting to Home Page in 3 seconds...</p>
      </div>
    );
  }
  // useEffect(() => {
  //   console.log("This is currentQuestionIndex", currentQuestionIndex);
  // });
  const currentQuestion = quizData[currentQuestionIndex];
  //console.log("This is currentQuestion", currentQuestion);
  const answers = shuffleArray([
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ]);
  //console.log("This is answer", answers);
  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    const isLastQuestion = currentQuestionIndex === quizData.length - 1;
    if (isLastQuestion) {
      navigate("/result");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="container m-5 bg-black">
      <h2>Welcome, {username}</h2>
      <div className="container-fluid">
        <div className="row g-3">
          {/* Question Column */}
          <div className="col-12 bg-success p-3 rounded mb-3">
            <h4>{currentQuestion.question}</h4>
          </div>

          {/* Answer Options Column */}
          <div className="col-12 bg-warning p-3 rounded">
            {answers.map((answer, index) => (
              <div
                key={index}
                className="form-check p-3 mb-2 border rounded text-dark bg-light"
              >
                <button
                  className="btn btn-outline-dark w-100 text-start"
                  onClick={() => handleAnswerClick(answer)}
                >
                  {answer}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
