import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";

import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import Booking from "./components/pages/Booking";
import Anmeldelser from "./components/pages/Anmeldelser";
import OmOs from "./components/pages/OmOs";
import Priser from "./components/pages/Priser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/booking" exact element={<Booking />} />
        <Route path="/omos" exact element={<OmOs />} />
        <Route path="/priser" exact element={<Priser />} />
        <Route path="/anmeldelser" exact element={<Anmeldelser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
