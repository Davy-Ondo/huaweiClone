import React from "react";
import './App.css';

import { About, Hero, Main, Navbar } from './components';

const App = () =>  (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Main /> 
    </div>
  );

export default App