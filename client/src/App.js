import './App.css';
import React, { Suspense  } from 'react';

import HeaderMenu from './components/headerMenu/HeaderMenu.jsx';
import OnlyCss01 from './sections/OnlyCss01/OnlyCss01.jsx';
import MasonryLayout1 from './sections/masonry1/Masonry1.jsx';
import MasonryLayout2 from './sections/Masonry2/Masonry2.jsx';
import BlogLayout from './sections/BlogLayout/BlogLayout.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDB from './sections/BlogDB/BlogDB.jsx';
import AdminPanel from './sections/AdminPanel/AdminPanel.jsx';


function App() {
  return (
    <Router>
      <HeaderMenu />
      <main>
          <Routes>
            <Route path="/" element={<OnlyCss01 />} />
            <Route path="/masonry1" element={<MasonryLayout1 />} />
            <Route path="/masonry2" element={<MasonryLayout2 />} />
            <Route path="/blog" element={<BlogLayout />} />            <Route path="/blogDB" element={<BlogDB />} />
            <Route path="/admin" element={<AdminPanel />} />

            {/* Dodaj więcej tras do innych layoutów */}
            <Route path="*" element={<h2>404 - Strona nie znaleziona</h2>} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
