import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Head = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`
      relative overflow-hidden
      bg-white/80 dark:bg-gray-800/80
      backdrop-blur-sm
      transition-colors duration-500 ease-in-out
      ${isLoaded ? 'opacity-100' : 'opacity-0'}
      border-b border-gray-200 dark:border-gray-700
    `}>
      <div className="mx-auto max-w-7xl w-full px-4">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo y títulos */}
          <div className="flex items-center space-x-8 group w-3/4">
            <img
              src="src/assets/escudo.png"
              alt="Escudo del colegio"
              className="w-20 h-20 transition-transform duration-300 
                       group-hover:scale-105
                       drop-shadow-[4px_4px_8px_rgba(59,130,246,0.5)]"
            />
            
            <div className="space-y-2 flex-grow">
              <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 
                           tracking-tight drop-shadow-md w-full">
                COLEGIO ALTERNATIVO
              </h1>
              <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-300 
                           tracking-wide drop-shadow-md">
                Educación con Valores
              </h2>
            </div>
          </div>

          {/* Botón de tema */}
          <button
            onClick={toggleTheme}
            className={`
              p-3 rounded-full
              bg-gray-100 dark:bg-gray-700
              hover:bg-gray-200 dark:hover:bg-gray-600
              transform transition-all duration-300
              hover:scale-110 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-blue-300
              shadow-md
            `}
            aria-label="Cambiar tema"
          >
            {isDarkMode ? (
              <FaSun className="w-6 h-6 text-yellow-400 animate-spin-slow" />
            ) : (
              <FaMoon className="w-6 h-6 text-gray-600 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Head;