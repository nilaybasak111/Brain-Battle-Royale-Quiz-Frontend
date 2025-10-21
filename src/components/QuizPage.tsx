import { useContext } from "react";
import UserContext from "../context/UserContext";

const QuizPage = () => {
  const { username } = useContext(UserContext);
  console.log("This is username in quiz page", username);
  return (
    <div className="container m-5 bg-black">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-3 bg-success">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="col-9 bg-warning"></div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
