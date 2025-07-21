import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home/Home.jsx'; 
import { BG_COLOR } from './Config/app.js';

createRoot(document.getElementById('root')).render(
    <div style={{background: BG_COLOR , minHeight: "100vh"}}>
      <Home />
    </div>
);
