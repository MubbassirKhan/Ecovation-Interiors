import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import App from './App';
import './styles/base.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* reducedMotion="user" lets framer-motion automatically
        honour prefers-reduced-motion, in addition to our CSS media queries. */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>
);