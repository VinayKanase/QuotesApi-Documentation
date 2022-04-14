import React from "react";
import quoteSvg from "../assets/quotes-svg.svg";
import "../css/LandingPage.css";

function LandingPage() {
  return (
    <main className="landingPage">
      <div className="landingPage_bgOverlay">
        <div className="bgOverlay__circleSvg">
          <div className="circleSvg1">
            <svg
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="svg1">
                <path
                  id="Vector"
                  d="M115 229C177.96 229 229 177.96 229 115C229 52.0395 177.96 1 115 1C52.0395 1 1 52.0395 1 115C1 177.96 52.0395 229 115 229Z"
                  stroke="#213E56"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
          <div className="circleSvg2">
            <svg
              width="140"
              height="140"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="svg2"
                d="M55 109C84.8234 109 109 84.8234 109 55C109 25.1766 84.8234 1 55 1C25.1766 1 1 25.1766 1 55C1 84.8234 25.1766 109 55 109Z"
                stroke="#213E56"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="circleSvg3">
            <svg
              width="250"
              height="250"
              viewBox="0 0 260 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="svg3"
                d="M121 241C187.274 241 241 187.274 241 121C241 54.7258 187.274 1 121 1C54.7258 1 1 54.7258 1 121C1 187.274 54.7258 241 121 241Z"
                stroke="#213E56"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="circleSvg4">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="svg4"
                d="M53 105C81.7188 105 105 81.7188 105 53C105 24.2812 81.7188 1 53 1C24.2812 1 1 24.2812 1 53C1 81.7188 24.2812 105 53 105Z"
                stroke="#213E56"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="bgOverlay__quoteSvg">
          <img src={quoteSvg} alt="" />
        </div>
      </div>
      <div className="landingPage__text">
        <h1 className="landingPage__heading">QuotesAPI</h1>
        <p>
          A free rest api for getting quotations by author or keyword. Easy to
          get or post quotes and enrich your websites or applications.
        </p>
      </div>
    </main>
  );
}

export default LandingPage;
