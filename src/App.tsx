import Header from "./components/ui/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/ui/hero-section";
import HomePage from "./pages/home-page";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div>
                <h1>404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
