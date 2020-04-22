import React from "react";
import { Link, Route } from "react-router-dom";
import { Hi, Home, Yr, Page } from "./screen";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Hi</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Yr">Yr</Link>
          </li>
          <li>
            <Link to="/Page">Page</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Hi} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Yr" component={Yr} />
        <Route exact path="/Page" component={Page} />
      </div>
    );
  }
}

export default App;
