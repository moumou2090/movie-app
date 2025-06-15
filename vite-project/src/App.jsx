import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/description/:id" element={<MovieDescription />} />
      </Routes>
    </Router>
  );
};

export default App;


