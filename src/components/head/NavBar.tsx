import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const [navTop, setNavTop] = useState(24);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setNavTop(window.scrollY > 100 ? 0 : 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Principal', icon: FaHome },
    { path: '/institucional', label: 'Institucional', icon: FaUniversity },
    { path: '/fotos', label: 'Fotos', icon: FaImages },
    { path: '/inscripciones', label: 'Inscripciones 2021', icon: FaUserGraduate },
    { path: '/cuotas', label: 'Cuotas 2021', icon: FaMoneyBillWave },
    { path: '/contacto', label: 'Contacto', icon: FaEnvelope }
  ];

  const gradients = [
    'from-gray-700 to-gray-600',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-violet-500 to-purple-500',
    'from-yellow-500 to-orange-500',
    'from-teal-500 to-cyan-500'
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-${navTop} left-0 right-0 z-40
        transition-all duration-500 ease-in-out
        ${isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 shadow-lg backdrop-blur-lg'
          : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md'
        }
      `}
    >
      {/* Efecto de luces de neón en el borde superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <motion.ul className="flex flex-wrap justify-center gap-2 py-3" layout>
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              const gradient = gradients[index % gradients.length];

              return (
                <motion.li key={item.path} onHoverEnd={() => setHoveredIndex(null)} className="relative">
                  <Link
                    to={item.path}
                    className={`
                      relative overflow-hidden
                      px-4 py-2 rounded-xl
                      flex items-center gap-2
                      transition-all duration-300
                      ${isActive ? 'text-white font-semibold scale-105' : 'text-slate-700 dark:text-slate-200'}
                      hover:scale-105
                    `}
                  >
                    {/* Fondo con gradiente */}
                    <div
                      className={`
                        absolute inset-0 opacity-${isActive ? '100' : '0'}
                        bg-gradient-to-r ${gradient}
                        transition-opacity duration-300
                        ${hoveredIndex === index ? 'opacity-100' : ''}
                      `}
                    />

                    {/* Efecto de brillo */}
                    <div
                      className={`
                        absolute inset-0 opacity-0
                        bg-gradient-to-r from-white via-white/0 to-white/0
                        transition-all duration-1000
                        ${hoveredIndex === index ? 'opacity-20 translate-x-full' : ''}
                      `}
                    />

                    {/* Contenido */}
                    <div className="relative">
                      <Icon
                        className={`
                          w-5 h-5 transition-all duration-300
                          ${isActive || hoveredIndex === index ? 'text-white' : `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                        `}
                      />
                    </div>

                    <span className="relative font-medium whitespace-nowrap">{item.label}</span>

                    {/* Indicador activo */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className={`absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-full`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>

                  {/* Efecto de resplandor estático al hover */}
                  <div
                    className={`
                      absolute inset-0 -z-10
                      bg-gradient-to-r ${gradient}
                      rounded-xl blur-xl
                      transition-opacity duration-300
                      opacity-0
                      ${hoveredIndex === index ? 'opacity-30' : ''}
                    `}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>

      {/* Efecto de sombra inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
    </motion.nav>
  );
};

export default NavMenu;
