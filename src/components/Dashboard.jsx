import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  console.log({ user });

  return (
    <div className="pl-2">
      Dashboard Page
      <h2>Hi, welcome on board {user.fullName}</h2>
      <p>we have sent a verification code to {user.email}</p>
      <button
        className="border-2 border-red-300 text-red-200 rounded-md py-2 px-4 mt-10"
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Dashboard;
