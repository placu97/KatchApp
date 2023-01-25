import React from "react";
import MacBookAirThree from "pages/MacBookAirThree";
import MacBookAirTwo from "pages/MacBookAirTwo";
import MacBookAirOne from "pages/MacBookAirOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MacBookAirOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/macbookairtwo" element={<MacBookAirTwo />} />
        <Route path="/macbookairthree" element={<MacBookAirThree />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
