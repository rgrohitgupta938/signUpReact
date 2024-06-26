import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./style/Nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left">Header</div>
      <div className="right">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              SignUp
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
