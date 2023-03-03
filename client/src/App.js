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
        <Header /> {/* Asni */} {/* Yemi */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Jerry */}
          <Route path="/Questions" element={<Questions />} /> {/* Jerry */}
          <Route path="/Login" element={<Login />} /> {/* Hana */}
          <Route path="/Signup" element={<Signup />} /> {/* Asre */}
          <Route path="/About" element={<About />} /> {/* Kal */}
          <Route path="/Answer" element={<Answer />} /> {/* Mame */}
          <Route path="/AskQuestion" element={<AskQuestion />} /> {/* Eyu */}
        </Routes>
        <Footer /> {/* Elc */} {/* Sule */}
      </div>
    </Router>
  );
}

export default App;
