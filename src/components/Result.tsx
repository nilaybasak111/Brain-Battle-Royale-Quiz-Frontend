import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { score } = useContext(UserContext);
  return (
    <div className="container m-5">
      <h2>Result</h2>
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-3 bg-success">Your Score is {score}</div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
