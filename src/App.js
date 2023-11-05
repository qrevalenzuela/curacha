import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ReqQuote from "./components/ReqQuote/ReqQuote";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/req-quote" element={<ReqQuote />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
