import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authReducer";
import {
  closeToast,
  showToast,
  startLoading,
  stopLoading,
} from "../store/loaderReducer";
import { baseUrl } from "../utils/config";

import "./FormBox.css";

const FormBox = ({ type = "login" }) => {
  const dispatch = useDispatch();

  console.log({ type });

  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const isSignup = type === "signup";

  const navigate = useNavigate();

  const clearField = () => {
    setEmail("");
    setFullName("");
    setPassword("");
  };

  const _showToast = (toastMessage, delay = 2000) => {
    dispatch(showToast(toastMessage));
    setTimeout(() => {
      dispatch(closeToast());
    }, delay);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(startLoading());
    try {
      if (isSignup) {
        const data = {
          fullname,
          password,
          email,
        };
        const { data: resData } = await axios.post(`${baseUrl}/signup`, data);
        _showToast(resData.message);

        console.log(resData);

        navigate("/login");
      } else {
        //for login

        const data = {
          email,
          password,
        };

        const { data: resData } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data,
        });
        //  TODO: toastSuccess(resData.message)
        const userData = resData.payload;
        console.log(resData);
        _showToast(resData.message, 5000);

        dispatch(login(userData));

        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(stopLoading());
    }

    clearField();
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <input
          type="text"
          placeholder="FullName"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="true"
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
