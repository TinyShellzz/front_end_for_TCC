import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import EmailSignUpForm from "../components/EmailSignUpForm";
import EmailLoginForm from "../components/EmailLoginForm";
import TCCDocument from "../views/TCCDocument";
import Whitelist from "../views/Whitelist";

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<EmailSignUpForm />} />
    <Route path="/login" element={<EmailLoginForm />} />
    <Route path="/document" element={<TCCDocument />}></Route>
    <Route path="/document/:content_name" element={<TCCDocument />}></Route>
    <Route path="/whitelist" element={<Whitelist />}></Route>
  </Routes>
);

export default MainRouter;
