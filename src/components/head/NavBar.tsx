import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUniversity,
  FaImages,
  FaUserGraduate,
  FaMoneyBillWave,
  FaEnvelope
} from 'react-icons/fa';

const NavMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array de items del menú
  const menuItems = [
    { path: '/', label: 'Principal', icon: FaHome },
    { path: '/institucional', label: 'Institucional', icon: FaUniversity },
    { path: '/fotos', label: 'Fotos', icon: FaImages },
    { path: '/inscripciones', label: 'Inscripciones 2021', icon: FaUserGraduate },
    { path: '/cuotas', label: 'Cuotas 2021', icon: FaMoneyBillWave },
    { path: '/contacto', label: 'Contacto', icon: FaEnvelope }
  ];

  // Array de colores para los íconos
  const iconColors = [
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'text-orange-500'
  ];

  return (
    <nav className={`
      sticky top-0 z-50
      transition-all duration-300 ease-in-out
      ${isScrolled
        ? 'bg-[#f7fbfd] dark:bg-[#293f3d] backdrop-blur-md shadow-lg'
        : 'bg-[#f7fbfd]/90 dark:bg-[#293f3d]/90 backdrop-blur-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-3 py-2">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              const iconColor = iconColors[index % iconColors.length]; // Distribuye colores en un ciclo

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      relative px-4 py-2 rounded-lg
                      flex items-center space-x-2
                      transition-all duration-300
                      hover:bg-[#b0d2d1] dark:hover:bg-[#45706d]
                      ${isActive
                        ? 'text-[#5c6c6c] dark:text-[#84b0a0]'
                        : 'text-[#545454] dark:text-[#c1d7d5]'
                      }
                    `}
                  >
                    <Icon className={`
                      w-5 h-5 transition-transform duration-300 ${iconColor}
                      ${isActive ? 'scale-110' : 'scale-100'}
                    `} />
                    <span className="font-medium whitespace-nowrap">
                      {item.label}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#5c6c6c] dark:bg-[#84b0a0]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Sombra gradient superior cuando se hace scroll */}
      <div className={`
        absolute inset-x-0 -top-6 h-6
        bg-gradient-to-b from-transparent to-[#f7fbfd] dark:to-[#293f3d]
        pointer-events-none
        transition-opacity duration-300
        ${isScrolled ? 'opacity-100' : 'opacity-0'}
      `} />
    </nav>
  );
};

export default NavMenu;
