import React from "react";
import "../css/APIDocumentation.css";
import RouteCard from "./RouteCard";
function APIDocumentation() {
  let documentation = [
    {
      method: "GET",
      route: "/quotes",
      url: "https://quotesapivsk.onrender.com/quotes/",
      data: [
        {
          _id: "6210960dc46db7fa7870cd56",
          id: "1",
          quote: "Your best teacher is your last mistake",
          author: "APJ-Abdul-Kalam",
          keywords: ["mistakes"],
          __v: 0,
        },
      ],
      parameters: [
        {
          key: "limit",
          valueType: "Number",
          description:
            "Limit is max number of quotes to be accepted. If limit is greater than total quotes available it sends all available and a message.",
        },
        {
          key: "keyword",
          valueType: "String",
          description: "Keywords that are available are only accepted.",
        },
        {
          key: "author",
          valueType: "String",
          description: "Finds quotes by the author",
        },
      ],
    },
    {
      method: "POST",
      route: "/quotes",
      url: "https://quotesapivsk.onrender.com/quotes/",
      data: [
        {
          message: "Quote was successfully posted.",
          keywords: [],
        },
      ],
      parameters: [
        {
          key: "quote",
          valueType: "String",
          description: "Quote that should be posted",
        },
        {
          key: "author",
          valueType: "String",
          description: "Author who said the quote if no author then unknown",
        },
        {
          key: "keywords",
          valueType: "Array of Strings",
          description:
            "Keywords should be words related to quote Current List of keywords is | Motivational | Inspirational | Humor | Philosophy | Hope | Science | Faith | Wisdom | Knowledge | Romance | Death | Life | Spirituality | Religion | Success | God |",
        },
      ],
    },
    {
      method: "GET",
      route: "/quotes/random",
      url: "https://quotesapivsk.onrender.com/quotes/random",
      data: [
        {
          _id: "6210981b247fe66aa75d295f",
          id: 5,
          quote: "Necessity is the mother of invention",
          author: "Plato",
          keywords: [],
          __v: 0,
        },
      ],
      parameters: [
        {
          key: "limit",
          valueType: "Number",
          description:
            "Limit is max number of quotes to be accepted. If limit is greater than total quotes available it sends all available and a message.",
        },
      ],
    },
    {
      method: "GET",
      route: "/quotes/<id>",
      url: "https://quotesapivsk.onrender.com/quotes/<id>",
      data: [
        {
          _id: "6210981b247fe66aa75d295f",
          id: 5,
          quote: "Necessity is the mother of invention",
          author: "Plato",
          keywords: [],
          __v: 0,
        },
      ],
    },
    {
      method: "GET",
      route: "/quotes/totalquotes",
      url: "https://quotesapivsk.onrender.com/quotes/totalQuotes",
      data: [{ totalQuotes: 14 }],
    },
  ];

  function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="apidocumentation">
      <div className="apidocumentation__banner">
        <div className="apidocumentation__bannerBackground"></div>
        <div className="apidocumentation__heading">API DOCUMENTATION</div>
      </div>
      <div className="apidocumentation__documents">
        <div className="apidocumentation__mainurl">
          <p>This is Base Api Url:</p>
          <div className="routeCard__route routeCard__container">
            <span className="url">https://quotesapivsk.onrender.com/</span>
            <span
              onClick={copyTextToClipboard(
                "https://quotesapivsk.onrender.com/"
              )}
              className="gg-copy"
            ></span>
          </div>
        </div>
        {documentation.map((doc, i) => (
          <RouteCard doc={doc} key={i} />
        ))}
      </div>
    </div>
  );
}

export default APIDocumentation;

// TODO:
/**
 * Update data dynamically
 * Instead of hard coding use map to map data in RouteCard
 * Complete Request Parameters.
 */
