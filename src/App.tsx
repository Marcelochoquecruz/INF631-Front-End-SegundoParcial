import React from 'react';
import Head from './components/head/Head';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Head />
      <main className="p-10">
        <p>Aquí es donde empieza tu majestuosa aplicación...</p>
      </main>
    </div>
  );
};

export default App;
