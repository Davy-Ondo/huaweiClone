import React from "react";
import './App.css';

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import First from "./components/First";


const App = () =>  (
    <div>
      <Navbar />
      <Hero />
      <First/>
      <Features />
    </div>
  );

export default App