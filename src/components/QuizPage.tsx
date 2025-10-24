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

  // Redirect if user visits result page directly without playing
  if (quizData.length === 0) {
    setTimeout(() => navigate("/"), 3000);
    return (
      <div
        className="d-flex justify-content-center align-items-center min-vh-100 flex-column text-center"
        style={{
          backgroundColor: "#214F3D",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="p-5 rounded-4 shadow-lg"
          style={{
            backgroundColor: "#5c3a7e",
            width: "420px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 className="fw-bold mb-3" style={{ color: "#FFC107" }}>
            ⚠️ No Quiz Data Available
          </h2>
          <p className="lead mb-1">
            Please Start A Quiz from the{" "}
            <span className="fw-semibold">Home</span> Page.
          </p>
          <p className="text-light mb-4">
            Redirecting to Home Page in 3 Seconds...
          </p>

          <div
            className="spinner-border text-warning"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // useEffect(() => {
  //   console.log("This is currentQuestionIndex", currentQuestionIndex);
  // });

  // Function to Decode HTML Entities to Normal Text
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
      return "btn-outline-secondary";
    }
    // If the answer has been submitted
    if (answer === currentQuestion.correct_answer) {
      // The correct answer is always green
      return "btn-success text-white border-success";
    } else if (answer === selectedAnswer) {
      // The user's incorrect choice is red
      return "btn-danger text-white border-danger";
    }
    // All other incorrect choices are greyed out
    return "btn-light text-secondary disabled";
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center p-4"
      style={{ backgroundColor: "#214F3D" }}
    >
      <div
        className="row g-0 rounded-4 shadow-lg overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "85vh",
          backgroundColor: "#2C3E50",
        }}
      >
        <h2
          className="col-12 text-center text-white fw-bolder fs-4 p-3 mb-0 rounded-top-4"
          style={{ backgroundColor: "#1C3144" }}
        >
          Welcome, {username.toUpperCase()}
        </h2>

        {/* Image Column */}
        <div
          className="col-md-5 d-none d-md-block rounded-2"
          style={{
            backgroundImage: "url('./src/assets/QuizPage_ImageColumn_3x4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            minHeight: "85vh",
            maxHeight: "85vh",
          }}
        ></div>

        <div
          className="col-md-7 d-flex flex-column justify-content-center pb-5 px-4 text-dark overflow-auto"
          style={{
            maxHeight: "80vh",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Question Column */}
          <div
            className="p-4 rounded mb-4 shadow-sm"
            style={{ backgroundColor: "#214F3D", color: "white" }}
          >
            <h4 className="mb-3 fw-bold fs-5">
              {decodeHTMLEntities(decodeHTMLEntities(currentQuestion.question))}
            </h4>
            <h5 className="mb-0 text-white-50">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </h5>
          </div>

          {/* Answer Options Column */}
          <div className="rounded overflow-auto">
            {answers.map((answer, index) => (
              <div key={index} className="mb-3">
                <button
                  className={`btn ${getButtonClass(
                    answer
                  )} w-100 text-center fw-semibold text-start shadow-sm border`}
                  onClick={() => handleAnswerClick(answer)}
                  disabled={answerSubmitted}
                  style={{
                    fontSize: "1.1rem",
                    padding: "12px 18px",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
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
