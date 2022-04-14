import React, { useEffect, useState } from "react";
import "../css/QuotesCarousel.css";
import apiInstance from "../axios.js";

let quoteSlideInterval, quoteIndex, quotesData;


function QuotesCarousel() {
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(true);
  const [input4, setInput4] = useState(false);
  const [input5, setInput5] = useState(false);
  const start = () => {
    if (input1) quoteIndex = 1;
    else if (input2) quoteIndex = 2;
    else if (input3) quoteIndex = 3;
    else if (input4) quoteIndex = 4;
    else if (input5) quoteIndex = 5;
    changeRadioInp(quoteIndex === 5 ? 1 : quoteIndex + 1);
  };
  clearInterval(quoteSlideInterval);
  quoteSlideInterval = setInterval(start, 10000);

  useEffect(() => {
    async function getQuotes() {
      quotesData = await apiInstance.get("/quotes/random?limit=5");
      quotesData = quotesData.data;
    }
    getQuotes();
  }, [])

  function labelOnClickHandler(e) {
    if (e.target.id === "quote1") changeRadioInp(1);
    else if (e.target.id === "quote2") changeRadioInp(2);
    else if (e.target.id === "quote3") changeRadioInp(3);
    else if (e.target.id === "quote4") changeRadioInp(4);
    else if (e.target.id === "quote5") changeRadioInp(5);
    clearInterval(quoteSlideInterval);
    quoteSlideInterval = setInterval(start, 10000);
  }
  function changeRadioInp(value) {
    setInput1(false);
    setInput2(false);
    setInput3(false);
    setInput4(false);
    setInput5(false);
    switch (value) {
      case 1:
        setInput1(true);
        break;
      case 2:
        setInput2(true);
        break;
      case 3:
        setInput3(true);
        break;
      case 4:
        setInput4(true);
        break;
      case 5:
        setInput5(true);
        break;
      default:
        break;
    }
  }
  return (
    <div className="quotesCarousel">
      <h2 className="quotesCarousel__subHeading">Random Quotes</h2>
      <input
        type="radio"
        name="quotes"
        id="q1"
        onChange={() => setInput1(!input1)}
        checked={input1}
      />
      <input
        type="radio"
        name="quotes"
        id="q2"
        onChange={() => setInput2(!input2)}
        checked={input2}
      />
      <input
        type="radio"
        name="quotes"
        id="q3"
        onChange={() => setInput3(!input3)}
        checked={input3}
      />
      <input
        type="radio"
        name="quotes"
        id="q4"
        onChange={() => setInput4(!input4)}
        checked={input4}
      />
      <input
        type="radio"
        name="quotes"
        id="q5"
        onChange={() => setInput5(!input5)}
        checked={input5}
      />
      {quotesData &&
        quotesData.map((quote, index) =>
          <label key={quote._id} onClick={labelOnClickHandler} id={`quote${index + 1}`}>
            <div className={`quotesCarousel__card card${index + 1}`}>
              <p className="quotesCarousel__quote">
                {quote.quote}
              </p>
              <strong className="quotesCarousel__author">~ {quote.author}</strong>
            </div>
          </label>
        )
      }
    </div>
  );
}

export default QuotesCarousel;
