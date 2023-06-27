import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import LandingPage from "./Component/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
