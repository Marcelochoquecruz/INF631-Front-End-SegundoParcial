import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Head from './components/head/Head';
import NavBar from './components/head/NavBar';
import './App.css';
import Carrousel from './components/slider';
import Menu from './components/menu';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Head />
          <NavBar />
        </div>
        <Carrousel />
        <Menu />
      </Router>
    </ThemeProvider>
  );
};

export default App;
