import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Monuments from "./pages/Monuments";
import MonumentDetails from "./pages/MonumentDetails";
import Forum from "./pages/Forum"; 
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/monuments/:id" element={<MonumentDetails />} />
        <Route path="/forum" element={<Forum />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;