import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Home from "./Pages/Home/Home";
import Answer from "./Pages/Answers/Answer";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import Questions from "./Pages/Questions/Questions";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Answer" element={<Answer />} />
          <Route path="/AskQuestion" element={<AskQuestion />} />
          <Route path="/Questions" element={<Questions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
