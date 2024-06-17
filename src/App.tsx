import EmailLoginForm from "./components/EmailLoginForm";
import EmailSignUpForm from "./components/EmailSignUpForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Counter from "./components/Counter";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setLogin,
  setPermission,
  setPhone,
} from "./store/slice/LoginSlice";
import { config } from "./config/config";

function App() {
  const dispatch = useDispatch();

  // 刷新页面，用cookie登录
  useEffect(() => {
    if (config.firstRender) {
      config.firstRender = false;

      axios({
        method: "get",
        url: "http://localhost/backend/get_user",
      })
        .then((res) => res.data)
        .then((user) => {
          if (user && user.errorMessage != undefined) {
            console.log(user.errorMessage);
          } else {
            dispatch(setLogin());
            dispatch(setPermission(user.permission));
            if (user.email != undefined) dispatch(setEmail(user.email));
            if (user.phone != undefined) dispatch(setPhone(user.phone));
          }

          return user;
        });
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Counter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<EmailSignUpForm />} />
        <Route path="/login" element={<EmailLoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
