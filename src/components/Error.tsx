import * as React from "react";
import "../styles/Error.css";

const Error: React.FunctionComponent = () => {
  return (
    <div className="error-container">
      Sorry there was an error processing your request.
      <br />
      Please try again
      <br />
      😣
    </div>
  );
};

export default Error;
