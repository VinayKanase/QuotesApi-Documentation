import React, { useState } from "react";

function RouteCard({ doc }) {
  const [dropDown, setDropDown] = useState(false);

  function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  function setStyle() {
    if (dropDown) {
      return {
        animation: "slide 1s 1 forwards",
      };
    } else {
      return {
        display: "none",
      };
    }
  }
  return (
    <div className="routeCard">
      <div
        className="routeCard__route routeCard__container"
        onClick={() => setDropDown(!dropDown)}
      >
        <div className="routeCard__link">
          <span className="method">{doc.method}</span>
          <span className="url">{doc.route}</span>
        </div>
        <i className={dropDown ? "gg-chevron up" : "gg-chevron down"}></i>
      </div>
      <div className="routeCard__info" style={setStyle()}>
        <div className="routeCard__route routeCard__container">
          <span className="url">{doc.url}</span>
          <span
            onClick={copyTextToClipboard(doc.url)}
            className="gg-copy"
          ></span>
        </div>
        <div className="routeCard__json">
          <span className="heading">JSON</span>
          <pre className="json__data">
            [ <br />
            {doc.data.map((quote) => (
              <>
                <span style={{ marginLeft: "20px" }}>&#123;</span>
                <br />
                {quote.totalQuotes ? (
                  <>
                    <span style={{ marginLeft: "30px" }}>
                      "totalQuotes": {quote.totalQuotes}
                    </span>
                    <br />
                  </>
                ) : quote.message ? (
                  <>
                    <span style={{ marginLeft: "30px" }}>
                      "message": {quote.message}
                    </span>
                    <br />
                    <span style={{ marginLeft: "30px" }}>
                      quote: "Will also send quote that was recently added"
                    </span>
                    <br />
                  </>
                ) : (
                  <>
                    <span style={{ marginLeft: "30px" }}>
                      "_id": {quote._id},
                    </span>
                    <br />
                    <span style={{ marginLeft: "30px" }}>
                      "id": {quote.id},{" "}
                    </span>
                    <br />
                    <span style={{ marginLeft: "30px" }}>
                      "quote": {quote.quote},
                    </span>
                    <br />
                    <span style={{ marginLeft: "30px" }}>
                      "author": {quote.author},
                    </span>{" "}
                    <br />
                    <span style={{ marginLeft: "30px" }}>
                      "keywords": {quote.keywords.join(", ")}
                    </span>{" "}
                    <br />
                    <span style={{ marginLeft: "30px" }}>
                      "__v": {quote.__v}
                    </span>{" "}
                    <br />
                  </>
                )}
                <span style={{ marginLeft: "20px" }}>&#125;</span>
                <br />
              </>
            ))}
            ]
          </pre>
        </div>
        {doc.parameters ? (
          <div className="routeCard__parameters">
            <h4>Request Query</h4>
            <table>
              <thead>
                <tr>
                  <th>Key Name</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {doc.parameters.map((param) => (
                  <tr>
                    <td>{param.key}</td>
                    <td>{param.valueType}</td>
                    <td>{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default RouteCard;
