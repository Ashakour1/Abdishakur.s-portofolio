import Header from "./components/ui/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>My Projects</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
