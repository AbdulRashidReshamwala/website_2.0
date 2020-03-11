import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <Router>
      <Route path="/projects">
        <h1>projects</h1>
      </Route>
      <Route path="/skills">
        <h1>skills</h1>
      </Route>
      <Route path="/"></Route>
      <Skills></Skills>
    </Router>
  );
}

export default App;
