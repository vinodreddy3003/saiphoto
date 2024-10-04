import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming Navbar is in components folder
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import PreWedding from "./components/PreWedding"; // Component for pre-wedding
import Modeling from "./components/Modeling";
import Films from "./components/Films";
import Birthday from "./components/Birthday";
import Wedding from "./components/Wedding";
import Reception from "./components/Reception";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/wedding" element={<Wedding />} /> {/* Fixed path for wedding shoot */}
          <Route path="/prewedding" element={<PreWedding />} />
          <Route path="/modeling" element={< Modeling />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/films" element={<Films />} />
          <Route path="/reception" element={<Reception />} />
   
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
