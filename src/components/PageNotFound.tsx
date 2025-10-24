import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#214F3D" }}
    >
      <div
        className="card text-center shadow-lg p-5"
        style={{ borderRadius: "25px", maxWidth: "500px" }}
      >
        <div className="card-body">
          <h1 className="display-1 fw-bold" style={{ color: "#214F3D" }}>
            404
          </h1>
          <h4 className="fw-semibold text-success mb-4">Page Not Found</h4>
          <p className="text-muted mb-4">
            The Page You are Looking for doesn’t Exist or has been Moved.
          </p>
          <button
            className="btn btn-lg fw-bold w-100"
            style={{
              backgroundColor: "#214F3D",
              borderColor: "#214F3D",
              color: "white",
            }}
            onClick={() => navigate("/")}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
