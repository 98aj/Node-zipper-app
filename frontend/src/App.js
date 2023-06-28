import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import LandingPage from "./Component/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./Component/MyNotes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
