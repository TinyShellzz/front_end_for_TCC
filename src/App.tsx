import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { config } from "./config/config";
import loginWithSessionToken from "./hooks/loginWithSessionToken";
import MainRouter from "./Routes/MainRouter";
import { setMobile } from "./store/slice/MobileSlice";

function App() {
  const dispatch = useDispatch();

  // 刷新页面，用cookie登录
  useEffect(() => {
    if (config.firstRender) {
      config.firstRender = false;

      loginWithSessionToken(dispatch);
    }
  }, []);

  // 侦测页面大小
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1000) {
        dispatch(setMobile(0));
      } else if (window.innerWidth >= 850) {
        dispatch(setMobile(1));
      } else if (window.innerWidth >= 700) {
        dispatch(setMobile(2));
      } else {
        dispatch(setMobile(3));
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <MainRouter />
    </Router>
  );
}

export default App;
