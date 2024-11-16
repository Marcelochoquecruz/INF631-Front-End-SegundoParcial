import React, { useState } from 'react';
import { GraduationCap, BookOpen, Brain, Lightbulb } from 'lucide-react';

const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    {
      nivel: 'Nivel Inicial',
      descripcion: 'Educación con Valores',
      icon: GraduationCap,
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      nivel: 'Nivel Primario',
      descripcion: 'Educación en Valores',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      nivel: 'Nivel Secundario',
      descripcion: 'Educación para pensar',
      icon: Brain,
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      nivel: 'Nivel C.E.N.S',
      descripcion: 'Educación para transformar',
      icon: Lightbulb,
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section className="p-4 transition-colors duration-300 bg-slate-50/95 dark:bg-slate-900/95">
      <ul className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 transition-all duration-300">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="flex-1 relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href="#"
                className={`flex flex-col h-full items-center p-6 rounded-xl transition-all duration-500
                  bg-white/50 hover:bg-white/90 dark:bg-slate-800/50 dark:hover:bg-slate-800/90
                  text-slate-800 dark:text-white
                  backdrop-blur-md border-2 border-transparent
                  hover:border-2 hover:border-opacity-50
                  ${hoveredIndex === index ? 'scale-102' : 'scale-100'}
                  hover:shadow-2xl hover:shadow-current/10
                  transform transition-all duration-300 ease-out`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}
                  transform origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100`}
                />
                <div
                  className={`relative flex items-center justify-center w-16 h-16 mb-4 rounded-2xl 
                  bg-gradient-to-br ${item.gradient} p-0.5 transform transition-transform duration-500
                  group-hover:rotate-6 group-hover:scale-110`}
                >
                  <div className="flex items-center justify-center w-full h-full rounded-xl bg-white dark:bg-slate-900">
                    <Icon
                      size={28}
                      className={`transition-colors duration-300 ${
                        hoveredIndex === index ? 'text-current' : 'text-slate-700 dark:text-white'
                      }`}
                    />
                  </div>
                </div>
                <h1 className="text-xl font-bold text-center mb-2 text-slate-800 dark:text-white transition-colors duration-300">
                  {item.nivel}
                </h1>
                <h2 className="text-sm font-medium text-center text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  {item.descripcion}
                </h2>
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 rounded-full -mr-12 -mb-12 
                  bg-gradient-to-br ${item.gradient} opacity-10 transform transition-transform 
                  duration-500 ease-out scale-0 group-hover:scale-100`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
