import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./FormBox.css";

const FormBox = ({ type = "login" }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const isSignup = type === "signup";

  return (
    <form>
      {isSignup ? (
        <>
          <h3>Welcome to Testify</h3>
          <span className="info">Signup for Free</span>
        </>
      ) : (
        <>
          <h3>Welcome Back</h3>
          <span className="info">Login to your account</span>
        </>
      )}
      {isSignup && (
        <>
          <input
            type="text"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </>
      )}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="form-group flex items-center justify-between mt-[1.44rem] ">
        {isSignup ? (
          <Link className="link" to="/login">
            Login instead
          </Link>
        ) : (
          <div className="flex items-center gap-x-[0.625rem]">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
        )}
        {!isSignup && (
          <Link className="link" to="/signup">
            Signup
          </Link>
        )}
      </div>
      <button id="signin" className="button" type="submit">
        {isSignup ? "Sign up" : "Sign in"}
      </button>
    </form>
  );
};

export default FormBox;
