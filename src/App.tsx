import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './Vendor/Style/roboto.css';
import './Style/All.css';

import Routes from "./Routes.js";
import Navbar from "./Components/Helpers/Navbar";


function App() {
  return (
    <div id="Application">
      <div id="Nav">
        <Navbar />
      </div>
      <div id="Page">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
      <div id="Footer">
        
      </div>
    </div>
  );
}

export default App;
