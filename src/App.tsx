import EmailLoginForm from "./components/EmailLoginForm";
import EmailSignUpForm from "./components/EmailSignUpForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Counter from "./components/Counter";

function App() {
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
