import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Publish from './Publish';
import MainPage from './pages/MainPage';
import LoginMain from './pages/LoginMain';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Publish />} />
        <Route path="/LoginMain" element={<LoginMain />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/MainPage/:menuId" element={<MainPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);


