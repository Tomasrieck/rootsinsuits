import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import Booking from "./components/pages/Booking";
import Anmeldelser from "./components/pages/Anmeldelser";
import OmOs from "./components/pages/OmOs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="rootsinsuits/" element={<Home />} />
<<<<<<< HEAD
        <Route path="rootsinsuits/booking" element={<Booking />} />
        <Route path="rootsinsuits/anmeldelser" element={<Anmeldelser />} />
        <Route path="rootsinsuits/omos" element={<OmOs />} />
=======
        <Route path="/rootsinsuits/booking" element={<Booking />} />
        <Route path="/rootsinsuits/anmeldelser" element={<Anmeldelser />} />
        <Route path="/rootsinsuits/omos" element={<OmOs />} />
>>>>>>> 406a60d20316e35ffc2211c345d327fab2ca1f0a
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
