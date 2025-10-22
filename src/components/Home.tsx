import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { username, setUsername, setQuizData } = useContext(UserContext);
  const [quizSettings, setQuizSettings] = useState<{ category: string }>({
    category: "",
  });
  const [error, setError] = useState<string>("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizSettings({ category: e.target.value });
  };
  //   useEffect(() => {
  //     console.log("Category State has officially updated:", quizSettings.category);
  // }, [quizSettings.category]);

  const StarQuiz = async () => {
    let category = "";
    if (username === "") {
      alert("Please Enter Your Name");
      return;
    }
    if (quizSettings.category === "") {
      alert("Please Select a Category");
      return;
    }
    if (quizSettings.category === "gk") {
      category = "amount=10&category=9&difficulty=easy&type=multiple";
    } else if (quizSettings.category === "movies") {
      category = "amount=10&category=11&difficulty=easy&type=multiple";
    } else if (quizSettings.category === "computers") {
      category = "amount=10&category=18&difficulty=easy&type=multiple";
    } else if (quizSettings.category === "books") {
      category = "amount=10&category=10&difficulty=easy&type=multiple";
    } else if (quizSettings.category === "games") {
      category = "amount=10&category=15&difficulty=easy&type=multiple";
    } else if (quizSettings.category === "animals") {
      category = "amount=10&category=27&difficulty=easy&type=multiple";
    }
    //console.log("This is Backend API", import.meta.env.VITE_BACKEND_API);
    // Calling Backend API
    await axios
      .get(`${import.meta.env.VITE_BACKEND_API}?${category}`)
      .then((res) => {
        setQuizData(res.data.results);
        //console.log(res.data.results);
        navigate("/quiz");
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to Fetch Questions");
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
            //console.log(username);
          }}
        />
        {/* Select Quiz Category */}
        {/* We can apply grid concept of bootstrap here to show Option1-6 in row(3 each) */}
        <div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="quizCategory"
              value="gk"
              checked={quizSettings.category === "gk"}
              onChange={handleCategoryChange}
            />
            <label className="form-check-label" htmlFor="gk">
              General Khowlwdge
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="quizCategory"
              value="movies"
              checked={quizSettings.category === "movies"}
              onChange={handleCategoryChange}
            />
            <label className="form-check-label" htmlFor="movies">
              Movies
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="quizCategory"
              value="computers"
              checked={quizSettings.category === "computers"}
              onChange={handleCategoryChange}
            />
            <label className="form-check-label" htmlFor="computers">
              Computers
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="quizCategory"
              value="books"
              checked={quizSettings.category === "books"}
              onChange={handleCategoryChange}
            />
            <label className="form-check-label" htmlFor="books">
              Books
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="quizCategory"
              value="games"
              checked={quizSettings.category === "games"}
              onChange={handleCategoryChange}
            />
            <label className="form-check-label" htmlFor="games">
              Video Games
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="quizCategory"
              value="animals"
              checked={quizSettings.category === "animals"}
              onChange={handleCategoryChange}
            />
            <label className="form-check-label" htmlFor="animals">
              Animals
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
