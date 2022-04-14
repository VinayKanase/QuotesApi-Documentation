import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import SearchQuote from "./Components/SearchQuote";
import PostQuote from "./Components/PostQuote";
import APIDocumentation from "./Components/APIDocumentation";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/documentation">
            <APIDocumentation />
          </Route>
          <Route path="/postquote">
            <PostQuote />
          </Route>
          <Route path="/searchquote">
            <SearchQuote />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            {/* <PageNotFound /> */}
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
