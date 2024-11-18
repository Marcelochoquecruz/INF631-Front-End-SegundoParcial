import { useState, useContext } from 'react';
import { GraduationCap, BookOpen, Brain, Lightbulb } from 'lucide-react';
import { ThemeContext } from './ThemeContext';

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

const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const themeContext = useContext(ThemeContext);


  const iconColor = (index: number) => hoveredIndex === index
    ? 'text-current'
    : themeContext?.theme === 'dark' ? 'text-white' : 'text-slate-700';

  return (
    <section >
  
      <ul className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 transition-all duration-300">
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
                className={`flex flex-col h-full items-center p-6 rounded-xl transition-transform duration-300 
                  
                  backdrop-blur-md border-2 border-transparent hover:scale-105 hover:border-opacity-50 
                  hover:shadow-2xl hover:shadow-current/10 transform`}
              >
                {/* Gradient line animation */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}
                  transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`} />
                
                {/* Icon container with gradient background */}
                <div className={`relative flex items-center justify-center w-16 h-16 mb-4 rounded-2xl 
                  bg-gradient-to-br ${item.gradient} p-0.5 transition-transform duration-300 group-hover:scale-110`}>
                  <div className={`flex items-center justify-center w-full h-full rounded-xl ${
                    themeContext?.theme === 'dark' ? 'bg-slate-800' : 'bg-white/60'
                  }`}>
                    <Icon size={28} className={`transition-colors duration-300 ${iconColor(index)}`} />
                  </div>
                </div>

                <h1 className="text-xl font-bold text-center mb-2 transition-colors duration-300">
                  {item.nivel}
                </h1>
                <h2 className="text-sm font-medium text-center transition-colors duration-300">
                  {item.descripcion}
                </h2>

                {/* Decorative corner gradient */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-full -mr-12 -mb-12 
                  bg-gradient-to-br ${item.gradient} opacity-16 transform transition-transform 
                  duration-300 scale-0 group-hover:scale-100`} />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
