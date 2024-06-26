import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./style/App.css";
import SIgnUp from "./SIgnUp";
import Profile from "./Profile";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<SIgnUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
