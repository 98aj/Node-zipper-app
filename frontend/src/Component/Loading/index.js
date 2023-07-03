import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner animation="grow" style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
}

export default Loading;
