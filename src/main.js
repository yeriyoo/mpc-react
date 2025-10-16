import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Publish from './Publish';
import MainPage from './pages/MainPage';
import LoginMain from './pages/LoginMain';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(HashRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Publish, {}) }), _jsx(Route, { path: "/LoginMain", element: _jsx(LoginMain, {}) }), _jsx(Route, { path: "/MainPage", element: _jsx(MainPage, {}) }), _jsx(Route, { path: "/MainPage/:menuId", element: _jsx(MainPage, {}) })] }) }) }));
