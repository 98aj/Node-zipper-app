import Alert from "react-bootstrap/Alert";

function ErrorMessage({ variant, child }) {
  return (
    <>
      <Alert variant={variant} style={{ fontSize: "1rem" }}>
        <strong>{child}</strong>
      </Alert>
    </>
  );
}

export default ErrorMessage;
