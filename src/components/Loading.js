import React from "react";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loader">
      <section className="container">
        <h2>Loading...</h2>
        <div className="loadingAnimation">
          <div className="loadingAnimation__dot"></div>
          <div className="loadingAnimation__dot"></div>
          <div className="loadingAnimation__dot"></div>
          <div className="loadingAnimation__dot"></div>
          <div className="loadingAnimation__dot"></div>
        </div>
      </section>
    </div>
  );
}

export default Loading;
