/* App.js */
import React from 'react';
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ReQuote from "./components/ReqQuote/ReqQuote";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReQuote/>
      <Footer/>
      </div>
  );
}

export default App;