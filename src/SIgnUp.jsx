import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "./store/authSlice";
import "./style/Signup.css";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const [valid, setValid] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    setValid(true);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setError("Error : All the fields are mandatory");
      setValid(false);
      setSuccess(false);
      return;
    }
    if (password !== password2) {
      setError("Passwords do not match");
      setValid(false);
      setSuccess(false);
      return;
    }

    const token = Math.random().toString(36).substr(2);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    dispatch(signUp({ user }));

    setSuccess(true);
    navigate("/profile");
  };

  return (
    <div className="box">
      <h1>Sign Up</h1>
      <form id="sub-form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Full Name"
          name="name"
          id="name"
          value={name}
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          name="email"
          id="email"
          value={email}
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Password"
          name="password"
          id="password"
          value={password}
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Confirm Password"
          name="password2"
          id="password2"
          value={password2}
        />
        {!valid && <div className="invalid">{error}</div>}
        {success && <div className="succ">Successfully Signed Up!</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
