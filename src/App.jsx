import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Forum from "./pages/Forum";
import Monuments from "./pages/Monuments";
import MonumentDetails from "./pages/MonumentDetails";
import RegionPage from "./pages/RegionPage";
import Signup from "./pages/Signup"; // 1. Import your Signup page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* 2. Add this route for Signup */}
        <Route path="/signup" element={<Signup />} /> 

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/monuments/:id" element={<MonumentDetails />} />
        <Route path="/region/:regionId" element={<RegionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;