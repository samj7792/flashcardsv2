import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Topic from "./pages/Topic";
import { ProgressProvider } from "./hooks/ProgressContext";

function App() {
  return (
    <Router>
      <ProgressProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Homepage />} />
          <Route path="/:topic" element={<Topic />} />
          {/* Add more routes as needed */}
        </Routes>
      </ProgressProvider>
    </Router>
  );
}

export default App;
