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
        <Route path="/rootsinsuits" exact element={<Home />} />
        <Route path="/rootsinsuits/booking" exact element={<Booking />} />
        <Route
          path="/rootsinsuits/anmeldelser"
          exact
          element={<Anmeldelser />}
        />
        <Route path="/rootsinsuits/omos" exact element={<OmOs />} />
        <Route path="/rootsinsuits/booking" exact element={<Booking />} />
        <Route
          path="/rootsinsuits/anmeldelser"
          exact
          element={<Anmeldelser />}
        />
        <Route path="/rootsinsuits/omos" exact element={<OmOs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
