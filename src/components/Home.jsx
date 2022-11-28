import React from "react";

const Home = () => {
  const apiKey = import.meta.env.VITE_APIKEY;

  console.log(apiKey);
  return <div className="bg-blue-300">Home Page</div>;
};

export default Home;
