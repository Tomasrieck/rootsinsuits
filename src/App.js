import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";

import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import Booking from "./components/pages/Booking";
import Anmeldelser from "./components/pages/Anmeldelser";
import OmOs from "./components/pages/OmOs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/anmeldelser" element={<Anmeldelser />} />
        <Route path="/omos" element={<OmOs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/anmeldelser" element={<Anmeldelser />} />
        <Route path="/omos" element={<OmOs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
