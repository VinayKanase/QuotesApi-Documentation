import React, { useEffect, useState } from "react";
import apiInstance from "../axios.js";

import "../css/SearchQuote.css";

function SearchQuote() {
  const [searchQuery, setSearchQuery] = useState("");
  const [quotes, setQuotes] = useState([]);

  function setQuotesWithoutDuplicating(data) {
    let uniqueData = data.filter((quote) => {
      if (quotes.findIndex((q) => q.id === quote.id) > -1) return false;
      else return true;
    });
    return uniqueData;
  }

  function changeHandler(e) {
    setQuotes([]);
    const query = e.target.value.trim();
    setSearchQuery(e.target.value);
    apiInstance
      .get(`/quotes?author=${query}`)
      .then((res) =>
        setQuotes([...quotes, ...setQuotesWithoutDuplicating(res.data)])
      );
    apiInstance
      .get(`/quotes?keyword=${query}`)
      .then((res) =>
        setQuotes([...quotes, ...setQuotesWithoutDuplicating(res.data)])
      );
    if (!query) setQuotes([]);
  }
  return (
    <div className="searchquote">
      <div className="searchquote__bgOverlay">
        <div className="svg1">
          <svg
            width="140"
            height="180"
            viewBox="0 0 164 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="hex1">
              <path
                id="Vector"
                d="M81.9 0L163.8 47.3V141.9L81.9 189.2L0 141.9V47.3L81.9 0Z"
                fill="#213E56"
              />
            </g>
          </svg>
        </div>
        <div className="svg2">
          <svg
            width="89"
            height="103"
            viewBox="0 0 89 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="hex2">
              <path
                id="Vector"
                d="M44.5 0L89 25.7V77.1L44.5 102.8L0 77.1V25.7L44.5 0Z"
                fill="#213E56"
              />
            </g>
          </svg>
        </div>
        <div className="svg3">
          <svg
            width="215"
            height="248"
            viewBox="0 0 215 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="hex3">
              <path
                id="Vector"
                d="M107.1 0L214.2 61.9V185.5L107.1 247.4L0 185.5V61.9L107.1 0Z"
                fill="#213E56"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="searchquote__conatiner">
        <div className="searchquote__input">
          <input
            value={searchQuery}
            onChange={changeHandler}
            type="search"
            placeholder="Search quote by author or keyword"
          />
        </div>
        <div className="searchquote__list">
          {quotes.map((quote) => (
            <div key={quote.id} className="searchquote__quote">
              <p className="searchquote__quoteText">{quote.quote}</p>
              <p className="searchquote__quoteKeywords">
                Keywords: {quote.keywords.join(', ')}
              </p>
              <p className="searchquote__quoteAuthor">~ {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchQuote;
