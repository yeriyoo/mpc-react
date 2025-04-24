import '@/assets/scss/styles.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from '@/page/Admin.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={'/mpc'}>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/admin'} element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
