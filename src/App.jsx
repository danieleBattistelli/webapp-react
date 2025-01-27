
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Films from './pages/Films'
import SingleFilm from './pages/SingleFilm';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films">
          <Route path="" element={<Films />} />
          <Route path=":id" element={<SingleFilm />} />
        </Route>
      </Routes>
    </Router>
  </>
);

export default App;
