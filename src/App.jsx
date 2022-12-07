import React from "react";
import { useSelector } from "react-redux";
import ToastWidget from "./components/ToastWidget";
import AppRoutes from "./AppRoutes";
import Loader from "./components/Loader";

const App = () => {
  const { isLoading, toast } = useSelector((state) => state.loaderReducer);

  return (
    <>
      <AppRoutes />
      {isLoading && <Loader />}
      {toast.state && <ToastWidget text={toast.toastMessage} />}
    </>
  );
};

export default App;
