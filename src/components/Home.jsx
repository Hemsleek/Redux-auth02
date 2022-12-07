import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-200 flex h-screen w-screen items-center justify-center">
      <Link to="/login" className="shadow-lg rounded-xl p-6 bg-[aqua]">
        GET STARTED
      </Link>
    </div>
  );
};

export default Home;
