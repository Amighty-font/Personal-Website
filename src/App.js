import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import Photography from "./pages/Photography";
import Software from "./pages/Software";
import Header from "./components/Header";
import Scrollbar from "./components/Scrollbar";

function App() {
  return (
    <div className="App">
      <Scrollbar />
      <Header />
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/software" element={<Software />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
