import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomeScreen";
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
