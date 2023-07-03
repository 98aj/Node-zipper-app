import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import LandingPage from "./Component/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./Component/MyNotes";
import LoginPage from "./Component/AuthUser/LoginPage";
import Signup from "./Component/AuthUser/SignupPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
