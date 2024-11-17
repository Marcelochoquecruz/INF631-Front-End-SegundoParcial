import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

const Head = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          
          {/* Logo y títulos */}
          <div className="flex items-center space-x-8 group w-3/4">
            <img
              src="src/assets/escudo.png"
              alt="Escudo del colegio"
              className="w-20 h-20 transition-transform duration-300 
                       group-hover:scale-105
                       drop-shadow-[4px_4px_8px_rgba(59,130,246,0.6)]"
            />
            
            <div className="space-y-1 flex-grow">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 
                           tracking-tight drop-shadow-[2px_2px_4px_rgba(59,130,246,0.6)]
                           select-none">
                COLEGIO ALTERNATIVO
              </h1>
              <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 
                           tracking-wide drop-shadow-[2px_2px_4px_rgba(59,130,246,0.6)]
                           select-none">
                Educación con Valores
              </h2>
            </div>
          </div>

          {/* Botón de tema */}
          <button
            onClick={themeContext?.toggleTheme}
            className="p-1 rounded-full
                     bg-white/80 dark:bg-gray-800/80
                     hover:bg-white dark:hover:bg-gray-700
                     transform transition-all duration-300
                     hover:scale-110 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-blue-300
                     shadow-md backdrop-blur-sm"
            aria-label="Cambiar tema"
          >
            {themeContext?.theme === 'dark' ? (
              <FaSun className="w-4 h-4 text-yellow-400 animate-spin-slow" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-600 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Head;