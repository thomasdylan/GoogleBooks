import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" Component={Search} />
            <Route exact path="/saved" Component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
