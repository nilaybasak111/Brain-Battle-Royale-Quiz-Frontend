import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

interface QuestionType {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Home = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(UserContext);
  const [data, setData] = useState<QuestionType>({
    question: "",
    correct_answer: "",
    incorrect_answers: [],
  });
  const [error, setError] = useState<string>("");

  const StarQuiz = async () => {
    console.log("This is Backend API", import.meta.env.VITE_BACKEND_API);
    // Calling Backend API
    await axios
      .get(import.meta.env.VITE_BACKEND_API)
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
        navigate("/quiz");
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to Fetch Todos");
      });
  };

  return (
    <div className="container p-5">
      <div className="row align-items-center justify-content-center bg-primary-subtle">
        Please Enter Your Name
      </div>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          className="form-control"
          placeholder="Please Enter Your Full Name"
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(username);
          }}
        />
        {/* Select Quiz Category */}
        {/* We can apply grid concept of bootstrap here to show Option1-6 in row(3 each) */}
        <div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              name="optradio"
              value="option1"
            />
            <label className="form-check-label" htmlFor="radio1">
              Option 1
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio2"
              name="optradio"
              value="option2"
            />
            <label className="form-check-label" htmlFor="radio2">
              Option 2
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio3"
              name="optradio"
              value="option3"
            />
            <label className="form-check-label" htmlFor="radio3">
              Option 3
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio4"
              name="optradio"
              value="option4"
            />
            <label className="form-check-label" htmlFor="radio4">
              Option 4
            </label>
          </div>
        </div>
        <input
          type="button"
          className="btn btn-primary"
          value="Start Quiz"
          onClick={StarQuiz}
        />
      </div>
    </div>
  );
};

export default Home;
