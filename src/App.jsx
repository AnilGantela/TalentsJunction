import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
