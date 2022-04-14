import React from "react";
import LandingPage from "./LandingPage";
import QuotesCarousel from "./QuotesCarousel";
import "../css/Home.css";
import TotalQuotes from "./TotalQuotes";
import Features from "./Features";
function Home() {
  return (
    <div className="home">
      <LandingPage />
      <QuotesCarousel />
      <TotalQuotes />
      <Features />
    </div>
  );
}

export default Home;
