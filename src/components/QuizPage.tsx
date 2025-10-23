import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// To Suffel the Options of Questions
const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizPage = () => {
  const navigate = useNavigate();
  const { username, quizData, setScore } = useContext(UserContext);
  //console.log("This is username in quiz page", username);
  //console.log("This is quizData in quiz page", quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

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

  // Function to Decode HTML Entities
  const decodeHTMLEntities = (str: string): string => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  };

  const currentQuestion = quizData[currentQuestionIndex];
  //console.log("This is currentQuestion", currentQuestion);
  const answers = shuffleArray([
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ]);
  //console.log("This is answer", answers);
  const handleAnswerClick = (answer: string) => {
    if (answerSubmitted) return;
    setSelectedAnswer(answer);
    setAnswerSubmitted(true);

    if (answer === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      const isLastQuestion = currentQuestionIndex === quizData.length - 1;
      if (isLastQuestion) {
        navigate("/result");
      } else {
        //setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setAnswerSubmitted(false);
      }
    }, 1000);
  };

  // Function to Change the Color of the Selected Answer
  const getButtonClass = (answer: string) => {
    // If no answer has been submitted, use default light theme
    if (!answerSubmitted) {
      return "btn-light text-dark";
    }
    // If the answer has been submitted
    if (answer === currentQuestion.correct_answer) {
      // The correct answer is always green
      return "btn-success text-white";
    } else if (answer === selectedAnswer) {
      // The user's incorrect choice is red
      return "btn-danger text-white";
    }
    // All other incorrect choices are greyed out
    return "btn-light text-dark opacity-50";
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center p-5"
      style={{ backgroundColor: "#214F3D" }}
    >
      <div
        className="row g-0 rounded-4 shadow-lg overflow-hidden"
        style={{ width: "100%", maxWidth: "1200px", height: "86vh" }}
      >
        <h2 className="col-12 text-center text-white fw-bold fs-4 p-3 mb-0 rounded-top-4">
          Welcome, {username.toUpperCase()}
        </h2>
        <div
          className="col-md-5 d-none d-md-block"
          style={{
            backgroundColor: "#644085",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="col-md-7 d-flex flex-column justify-content-between p-5 text-white"
          style={{ backgroundColor: "#5c3a7e" }}
        >
          {/* Question Column */}
          <div className="col-12 bg-success p-3 rounded mb-3">
            <h4>
              {decodeHTMLEntities(decodeHTMLEntities(currentQuestion.question))}
            </h4>
            <h5 className="mb-0">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </h5>
          </div>

          {/* Answer Options Column */}
          <div className="col-12 bg-warning p-3 rounded">
            {answers.map((answer, index) => (
              <div
                key={index}
                className="form-check p-3 mb-2 border rounded text-dark bg-light"
              >
                <button
                  className={`btn ${getButtonClass(answer)} w-100 text-start`}
                  onClick={() => handleAnswerClick(answer)}
                  disabled={answerSubmitted}
                >
                  {decodeHTMLEntities(answer)}
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
