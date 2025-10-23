import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { username, setUsername, setQuizData, setScore } =
    useContext(UserContext);
  const [quizSettings, setQuizSettings] = useState<{ category: string }>({
    category: "",
  });
  const [error, setError] = useState<string>("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizSettings({ category: e.target.value });
  };
  //   useEffect(() => {
  //     console.log("Category State has officially updated:", quizSettings.category);
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
    setScore(0); // Resetting Score Once More For Safety

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
    <section
      className="container-fluid min-vh-100 p-5 d-flex align-items-center"
      style={{ backgroundColor: "#214F3D" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black shadow-lg"
              style={{ borderRadius: "25px" }}
            >
              <div className="card-body p-md-0">
                <div className="row justify-content-center">
                  {/* Left side: Form */}
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p
                      className="text-center h1 fw-bolder mb-5 mx-1 mx-md-4 mt-4"
                      style={{ color: "#214F3D" }}
                    >
                      Please Fill Your Details
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i
                          className="fas fa-user fa-lg me-3 fa-fw"
                          style={{ color: "#214F3D" }}
                        ></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <label
                            className="form-label fw-semibold"
                            htmlFor="usernameInput"
                          >
                            Please Enter Your Name
                          </label>
                          <input
                            type="text"
                            id="usernameInput"
                            name="username"
                            value={username}
                            className="form-control"
                            placeholder="Enter Your Full Name"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-4 p-3 border rounded">
                        <p
                          className="mb-2 fw-bold"
                          style={{ color: "#214F3D" }}
                        >
                          Select Quiz Category
                        </p>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="gk"
                            className="form-check-input"
                            name="quizCategory"
                            value="gk"
                            checked={quizSettings.category === "gk"}
                            onChange={handleCategoryChange}
                            required
                          />
                          <label className="form-check-label" htmlFor="gk">
                            General Knowledge
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            type="radio"
                            id="movies"
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
                            id="computers"
                            className="form-check-input"
                            name="quizCategory"
                            value="computers"
                            checked={quizSettings.category === "computers"}
                            onChange={handleCategoryChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="computers"
                          >
                            Computers
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            type="radio"
                            id="books"
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
                            id="games"
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
                            id="animals"
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

                      {error && (
                        <div
                          className="alert alert-danger text-center fw-semibold"
                          role="alert"
                        >
                          {error}
                        </div>
                      )}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-lg w-75 fw-bold"
                          style={{
                            backgroundColor: "#214F3D",
                            borderColor: "#214F3D",
                            color: "white",
                          }}
                          onClick={StarQuiz}
                        >
                          Start Quiz
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right side: Image */}
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://media.istockphoto.com/id/1777656272/vector/speech-bubble-with-the-word-quiz-time-blue-label-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=yKLTMLXadEPvyBq1EM4ygbfKjV9Ul68gM8El_nfehW0="
                      className="img-fluid"
                      alt="quiz"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
