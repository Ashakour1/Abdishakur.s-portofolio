import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ContactScreen from "./pages/ContactScreen";
import HomePage from "./pages/HomeScreen";
import PostDetailScreen from "./pages/PostDetailScreen";
import ProjectsScreen from "./pages/ProjectsScreen";
import TagDetailScreen from "./pages/TagDetailScreen";
import TagsScreen from "./pages/TagsScreen";
import ToolsScreen from "./pages/ToolsScreen";
function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/tags" element={<TagsScreen />} />
          <Route path="/tag/:tagId" element={<TagDetailScreen />} />
          <Route path="/post/:id" element={<PostDetailScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
