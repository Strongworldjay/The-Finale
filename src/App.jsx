import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import ArchiveIndex from './pages/ArchiveIndex.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import BookOfSol from './pages/BookOfSol.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<ArchiveIndex />} />
        <Route path="/book-of-sol" element={<BookOfSol />} />
        <Route path="/wiki/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
