import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './Vendor/Style/roboto.css';
import './Style/All.css';

import Routes from "./Routes.js";


function App() {
  return (
    <div id="Application">
      <div id="Page">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
