import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ReqQuote from "./components/ReqQuote/ReqQuote";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Outlet />
                <Footer />
              </div>
            }
          >
            <Route index element={<Landing />} />
            <Route path="/req-quote" element={<ReqQuote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
