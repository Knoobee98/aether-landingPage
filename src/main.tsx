import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Analytics } from "@vercel/analytics/react";
import ReactGA from 'react-ga4';

const GA_ID = import.meta.env.VITE_GA_ID;
if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
);
