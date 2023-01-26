import React from "react";
import AudioMusic from "pages/AudioMusic";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/audiomusic" element={<AudioMusic />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
