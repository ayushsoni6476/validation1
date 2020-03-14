import React from "react";
import "./styles.css";
import Routing from "./Routing";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routing />
      </div>
    </Router>
  );
}
