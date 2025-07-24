import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DropsPage from "./pages/DropsPage";
import CollectionsPage from "./pages/CollectionsPage";
import CollabsPage from "./pages/CollabsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drops" element={<DropsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collabs" element={<CollabsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
