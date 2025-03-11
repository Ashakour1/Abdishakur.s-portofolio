import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomeScreen";
import NotFound from "./components/NotFound";
import ContactScreen from "./pages/ContactScreen";
import ProjectsScreen from "./pages/ProjectsScreen";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Annoucement from "./components/Annoucement";
function App() {
  return (
    <>
    <Toaster/>
      <Router>
        <Annoucement/>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
