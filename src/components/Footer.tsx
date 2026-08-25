import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUp,
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MessageSquare,
} from 'lucide-react';
import { LOGO_URL, CONTACT_INFO } from '../data/schoolData';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY, OFFICIAL_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Institution Summary & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('inicio')}
              className="inline-flex items-center p-2 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-left cursor-pointer focus:outline-none border border-slate-200"
              id="footer-logo-btn"
            >
              {!logoError ? (
                <img
                  src={LOGO_URL}
                  alt="Complexo Escolar Basima do Saber"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-12 w-auto object-contain max-w-[200px]"
                />
              ) : (
                <div className="flex items-center gap-2.5 px-2 py-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 font-bold text-lg border border-amber-400/40">
                    B
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 text-sm">
                      BASIMA DO SABER
                    </span>
                    <span className="text-[10px] font-semibold text-blue-900 tracking-wider uppercase">
                      Complexo Escolar
                    </span>
                  </div>
                </div>
              )}
            </button>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              O Complexo Escolar Basima do Saber é uma instituição de ensino de referência em Luanda, comprometida com a formação humana, científica e técnica de excelência, do Pré-Escolar ao Ensino Técnico-Profissional.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 text-xs font-semibold border border-emerald-800/60 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {OFFICIAL_WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Menu de Páginas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('inicio')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quem-somos')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ensino')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Níveis de Ensino
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cursos')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Serviços & Cursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('estrutura')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Estrutura & Salas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('porque-escolher')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Porquê o Basima?
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contactos')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Contactos & Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Levels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Oferta Formativa
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('ensino')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  • Pré-Escolar (Iniciação e Jardim)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ensino')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  • Ensino Primário (1ª à 6ª Classe)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ensino')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  • I Ciclo do Ensino Secundário (7ª à 9ª)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ensino')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  • II Ciclo do Ensino Secundário Geral
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cursos')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  • Cursos Técnicos-Profissionais
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Secretaria & Contacto
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Luanda, Projecto Nandó, arredores do Banco BIC (Casa das Merendas)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-bold"
                >
                  {OFFICIAL_WHATSAPP_DISPLAY} (WhatsApp Oficial)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>951 256 898 / 933 132 975</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CONTACT_INFO.website}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 Complexo Escolar Basima do Saber. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors p-2 rounded-lg hover:bg-slate-900 cursor-pointer"
            id="scroll-to-top-btn"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

