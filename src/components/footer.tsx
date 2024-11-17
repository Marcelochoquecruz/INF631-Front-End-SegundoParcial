import React from 'react';
import { MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-auto relative">
    
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Columna de informacion */}
          <div className="md:col-span-2 space-y-3 bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/40 transition-all duration-300">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Información
            </h3>
            <div className="space-y-2 text-sm">
              <div className="space-y-1 group">
                <p className="text-gray-100 font-medium">Nivel Inicial</p>
                <p className="text-gray-300 text-xs group-hover:text-white transition-colors">Sala 3, 4 y 5 - Turno Mañana</p>
                <p className="text-gray-300 text-xs group-hover:text-white transition-colors">Sala 4 y 5 - Turno Tarde</p>
              </div>
              <div className="space-y-1 group pt-2">
                <p className="text-gray-100 font-medium">Nivel Primario</p>
                <p className="text-gray-300 text-xs group-hover:text-white transition-colors">1° a 2° - Turno Mañana</p>
              </div>
              <div className="space-y-1 group pt-2">
                <p className="text-gray-100 font-medium">Nivel Secundario y CENS</p>
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                  <MapPin className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                  <p className="text-xs">Av. España 22 - Ciudad de Potosí</p>
                </div>
                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                  <Phone className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                  <p className="text-xs">Tel: (591) 622-4845</p>
                </div>
                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                  <Phone className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                  <p className="text-xs">Cel: (591) 753-3346</p>
                </div>
                <p className="text-xs text-gray-400 italic">Personería: 512/88</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="md:col-span-8 space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              Nuestra Ubicación
            </h3>
            <div className="h-[400px] w-[800px] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.888349078661!2d-65.75387482584543!3d-19.589344982158394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f94e733a7c7f3f%3A0x58961e56c0f44c1d!2sAv.%20Espa%C3%B1a%2C%20Potos%C3%AD%2C%20Bolivia!5e0!3m2!1ses!2ses!4v1700179047037!5m2!1ses!2ses"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        {/* Columna del menu */}
          <div className="md:col-span-2 bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/40 transition-all duration-300">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              MENÚ
            </h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                Página Principal
              </a>
              <a href="/institucional" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                Institucional
              </a>
              <a href="/propositos" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 pl-3 text-xs">
                • Propósitos
              </a>
              <a href="/objetivos" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 pl-3 text-xs">
                • Objetivos Institucionales
              </a>
              <a href="/historia" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 pl-3 text-xs">
                • Reseña Histórica
              </a>
              <a href="/galeria" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                Galería de Fotos
              </a>
              <a href="/inscripciones" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                Inscripciones 2021
              </a>
              <a href="/cuotas" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                Cuotas 2021
              </a>
              <a href="/contacto" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800/50 mt-8 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <img 
                src="/src/assets/ies.png" 
                alt="IES Logo" 
                className="h-14 w-18 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105"
              />
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 transform">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 transform">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110 transform">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
              © {new Date().getFullYear()} IES. Univ. Marcelo Choque Cruz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;