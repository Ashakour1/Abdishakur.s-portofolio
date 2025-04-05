import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ContactScreen from "./pages/ContactScreen";
import HomePage from "./pages/HomeScreen";
import ProjectsScreen from "./pages/ProjectsScreen";
function App() {
  return (
    <>
      <Toaster />
      <Router>
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
