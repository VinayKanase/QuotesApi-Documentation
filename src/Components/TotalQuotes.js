import React, { useEffect, useState, useRef } from 'react';
import img1 from "../assets/curve-start2.svg";
import apiInstance from "../axios.js";

import "../css/TotalQuotes.css";

let animateOnce = true;
function TotalQuotes() {
 let totalQuotes, increametCount, _counter = 0;
 const [counter, setCounter] = useState(0);
 const mounted = useRef(false);

 useEffect(() => {
  if (counter === 0 && _counter === 0) {
   animateOnce = true;
  }
  apiInstance.get('/quotes/totalquotes')
   .then(res => {
    totalQuotes = +res.data.totalQuotes;
    increametCount = parseInt(totalQuotes / 200) || 1;
    window.addEventListener("scroll", () => {
     if (window.pageYOffset > 990 && animateOnce && mounted.current) {
      increametQuotesCount();
      animateOnce = false;
     }
    });

   });

  function increametQuotesCount() {
   if (_counter < totalQuotes) {
    _counter += increametCount;
    setCounter(_counter);
    setTimeout(increametQuotesCount, 100);
   } else {
    setCounter(totalQuotes);
   }
  }
 }, []);

 return (
  <section className="totalquotes">
   <div className="totalquotes__bgOverlay">
    <img src={img1} alt="" />
   </div>
   <div className="totalquotes__text">
    <div ref={mounted} className="totalquotes__number">{counter}</div>
    <p>Total Available Quotes</p>
   </div>
  </section>
 )
}

export default TotalQuotes;