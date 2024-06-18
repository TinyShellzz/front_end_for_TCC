import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import EmailSignUpForm from "../components/EmailSignUpForm";
import EmailLoginForm from "../components/EmailLoginForm";
import TCCDocument from "../views/TCCDocument";
const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<EmailSignUpForm />} />
    <Route path="/login" element={<EmailLoginForm />} />
    <Route path="/document" element={<TCCDocument />}></Route>
    <Route path="/document/:name" element={<TCCDocument />}></Route>
  </Routes>
);

export default MainRouter;
