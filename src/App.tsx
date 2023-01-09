import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import EpisodeList from './components/EpisodeList';
import Episode from './components/Episode';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<Podcast />}>
            <Route path="" element={<EpisodeList />} />
            <Route path="episode/:episodeId" element={<Episode />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
