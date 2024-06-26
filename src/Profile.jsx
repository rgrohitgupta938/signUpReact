// src/components/Profile.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style/Profile.css";
import { logOut } from "./store/authSlice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user) || {
    name: "",
    email: "",
    password: "",
  };
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="box1">
      <h1>Profile</h1>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Password : {user.password}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
