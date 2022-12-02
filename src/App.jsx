import React from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./AppRoutes";
import Loader from "./components/Loader";

const App = () => {
  const { isLoading } = useSelector((state) => state.loaderReducer);
  return (
    <>
      <AppRoutes />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
