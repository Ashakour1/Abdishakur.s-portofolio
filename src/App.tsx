import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomeScreen";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
