import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { config } from "./config/config";
import loginWithSessionToken from "./hooks/loginWithSessionToken";
import MainRouter from "./Routes/MainRouter";
import DocumentRouter from "./Routes/DocumentRouter";

function App() {
  const dispatch = useDispatch();

  // 刷新页面，用cookie登录
  useEffect(() => {
    if (config.firstRender) {
      config.firstRender = false;

      loginWithSessionToken(dispatch);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <DocumentRouter />
      <MainRouter />
    </Router>
  );
}

export default App;
