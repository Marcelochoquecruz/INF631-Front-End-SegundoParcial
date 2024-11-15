import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Head = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      sticky top-0 z-50
      transition-all duration-300 ease-in-out
      ${isScrolled
        ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg'
        : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2"> {/* Menor espacio vertical */}
          
          {/* Logo y títulos */}
          <div className="flex items-center space-x-8 group w-3/4">
            <img
              src="src/assets/escudo.png"
              alt="Escudo del colegio"
              className="w-20 h-20 transition-transform duration-300 
                       group-hover:scale-105
                       drop-shadow-[4px_4px_8px_rgba(59,130,246,0.6)]"
            />
            
            <div className="space-y-1 flex-grow"> {/* Menor espacio entre títulos */}
              <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 
                           tracking-tight drop-shadow-[2px_2px_4px_rgba(59,130,246,0.6)]">
                COLEGIO ALTERNATIVO
              </h1>
              <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-300 
                           tracking-wide drop-shadow-[2px_2px_4px_rgba(59,130,246,0.6)]">
                Educación con Valores
              </h2>
            </div>
          </div>

          {/* Botón de tema */}
          <button
            onClick={toggleTheme}
            className={`
              p-1 rounded-full
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
              <FaSun className="w-4 h-4 text-yellow-400 animate-spin-slow" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-600 animate-pulse" />
            )}
          </button>
        </div>
      </div>

      {/* Sombra gradient superior cuando se hace scroll */}
      <div className={`
        absolute inset-x-0 -top-4 h-4 {/* Más pequeño también */}
        bg-gradient-to-b from-transparent to-white/50 dark:to-gray-800/50
        pointer-events-none
        transition-opacity duration-300
        ${isScrolled ? 'opacity-100' : 'opacity-0'}
      `} />
    </header>
  );
};

export default Head;
