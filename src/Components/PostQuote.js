import React, { useState } from "react";
import "../css/PostQuote.css";
import postBg from "../assets/postbg.svg";
import apiInstance from "../axios.js";
function PostQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [keywords, setKeywords] = useState([]);
  function inputHandler(e) {
    if (e.target.name === "quote") {
      setQuote(e.target.value);
    } else {
      setAuthor(e.target.value);
    }
  }
  function checkboxInputHandler(e) {
    if (e.target.checked) setKeywords([...keywords, e.target.value]);
    else {
      let _keywords = keywords;
      let removeElementIndex = _keywords.findIndex(
        (keyword) => keyword === e.target.value
      );
      _keywords.splice(removeElementIndex, 1);
      setKeywords([..._keywords]);
    }
  }
  async function quoteSubmitHandler(e) {
    e.preventDefault();
    if (quote.trim() === "" || author.trim() === "") {
      setMessage("Quote and Author are required");
      return;
    } else clearMessage();
    const res = await apiInstance.post("/quotes", {
      quote: quote.trim(),
      author: author.trim(),
      keywords,
    });
    if (res.status === 200) {
      console.log("Data is successfully added");
      setMessage(res.data.message);
      setAuthor("");
      setQuote("");
    } else {
      console.error("Something went wrong");
      setMessage(res.data.message || "Something went wrong");
    }
  }
  function clearMessage() {
    setMessage("");
  }
  return (
    <div className="postquote">
      <h2 className="postquote__subHeading">Post a Quote</h2>
      <div
        className={message ? "postquote__message" : "postquote__message hide"}
      >
        <p>{message}</p>
        <div className="gg-close" onClick={clearMessage}></div>
      </div>
      <div className="postquote__content">
        <form className="postquote__form" onSubmit={quoteSubmitHandler}>
          <div className="input__group">
            <input
              type="text"
              className="form__input"
              name="quote"
              id="quote"
              placeholder=" "
              onChange={inputHandler}
              value={quote}
              required
            />
            <label htmlFor="quote" className="form__label">
              Quote
            </label>
          </div>
          <div className="input__group">
            <input
              type="text"
              className="form__input"
              name="author"
              id="author"
              placeholder=" "
              onChange={inputHandler}
              value={author}
              required
            />
            <label htmlFor="author" className="form__label">
              Author
            </label>
          </div>
          <div className="postquote__keywords">
            <h3>Keywords</h3>
            <div className="postquote__keywordsWrapper">
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="motivational"
                  id="motivational"
                  value="motivational"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="motivational" className="keyword__label">
                  Motivational
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="inspirational"
                  id="inspirational"
                  value="inspirational"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="inspirational" className="keyword__label">
                  Inspirational
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="humor"
                  id="humor"
                  value="humor"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="humor" className="keyword__label">
                  Humor
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="philosophy"
                  id="philosophy"
                  value="philosophy"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="philosophy" className="keyword__label">
                  Philosophy
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="hope"
                  id="hope"
                  value="hope"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="hope" className="keyword__label">
                  Hope
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="science"
                  id="science"
                  value="science"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="science" className="keyword__label">
                  Science
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="faith"
                  id="faith"
                  value="faith"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="faith" className="keyword__label">
                  Faith
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="wisdom"
                  id="wisdom"
                  value="wisdom"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="wisdom" className="keyword__label">
                  wisdom
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="knowledge"
                  id="knowledge"
                  value="knowledge"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="knowledge" className="keyword__label">
                  knowledge
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="romance"
                  id="romance"
                  value="romance"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="romance" className="keyword__label">
                  Romance
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="death"
                  id="death"
                  value="death"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="death" className="keyword__label">
                  Death
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="life"
                  id="life"
                  value="life"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="life" className="keyword__label">
                  Life
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="spirituality"
                  id="spirituality"
                  value="spirituality"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="spirituality" className="keyword__label">
                  spirituality
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="religion"
                  id="religion"
                  value="religion"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="religion" className="keyword__label">
                  Religion
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="success"
                  id="success"
                  value="success"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="success" className="keyword__label">
                  Success
                </label>
              </div>
              <div className="checkbox__group">
                <input
                  type="checkbox"
                  name="god"
                  id="god"
                  value="god"
                  className="keyword__checkbox"
                  onChange={checkboxInputHandler}
                />
                <label htmlFor="god" className="keyword__label">
                  God
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="postquote__submitBtn">
            Add
          </button>
        </form>
        <div className="postquote__img">
          <img src={postBg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PostQuote;
