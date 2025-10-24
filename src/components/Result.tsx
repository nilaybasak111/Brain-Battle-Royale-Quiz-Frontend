import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { username, score, setScore, setUsername } = useContext(UserContext);

  // Redirect if user visits result page directly without playing
  if (!username || username.trim() === "") {
    setTimeout(() => navigate("/"), 5000);
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
            ⚠️ No Quiz Data Found
          </h2>
          <p className="lead mb-1">
            Please Start A Quiz From The{" "}
            <span className="fw-semibold">Home</span> Page.
          </p>
          <p className="text-light mb-4">
            Redirecting to Home Page in 5 Seconds...
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

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundColor: "#214F3D",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="card text-center shadow-lg border-0 p-5"
        style={{
          width: "420px",
          borderRadius: "18px",
          backgroundColor: "#5c3a7e",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
          color: "#fff",
        }}
      >
        <div className="card-body">
          <h2
            className="fw-bold mb-4"
            style={{
              letterSpacing: "1px",
              fontSize: "2rem",
              textTransform: "uppercase",
            }}
          >
            🎉 Quiz Completed!
          </h2>

          <p className="lead mb-2 fs-5 text-light">Your Final Score</p>

          <h1
            className="fw-bold display-2 mb-4"
            style={{
              color: "#4CAF50",
              textShadow: "0 0 15px rgba(76, 175, 80, 0.7)",
              fontSize: "4.5rem",
            }}
          >
            {score}
          </h1>

          <button
            className="btn fw-semibold px-4 py-2 rounded-pill"
            style={{
              backgroundColor: "#FFC107",
              color: "#5c3a7e",
              fontSize: "1.1rem",
              border: "none",
              boxShadow: "0 4px 12px rgba(255, 193, 7, 0.4)",
              transition: "all 0.25s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(255, 193, 7, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(255, 193, 7, 0.4)";
            }}
            onClick={() => {
              setScore(0);
              setUsername("");
              navigate("/");
            }}
          >
            🔁 Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
