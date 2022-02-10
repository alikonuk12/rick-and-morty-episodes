import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Home, EpisodeDetail, CharacterDetail } from './components';

function App() {
  return (
    <div style={{ backgroundColor: '#24282F', minHeight: '100vh' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes/:episode' element={<EpisodeDetail />} />
          <Route path='/characters/:character' element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
