import * as React from "react";
import "../styles/Loading.css";

const Loading: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
