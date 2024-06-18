import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import EmailSignUpForm from "../components/EmailSignUpForm";
import EmailLoginForm from "../components/EmailLoginForm";
import TCCDocument from "../views/TCCDocument";
import NotFound from "../views/NotFound";

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<EmailSignUpForm />} />
    <Route path="/login" element={<EmailLoginForm />} />
  </Routes>
);

export default MainRouter;
