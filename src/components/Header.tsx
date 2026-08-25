import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Clock,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { LOGO_URL, CONTACT_INFO } from '../data/schoolData';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY, OFFICIAL_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string, course?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'ensino', label: 'Ensino' },
    { id: 'cursos', label: 'Serviços & Cursos' },
    { id: 'estrutura', label: 'Estrutura' },
    { id: 'porque-escolher', label: 'Porquê o Basima?' },
    { id: 'contactos', label: 'Contactos' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Contacts & Quick Info */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <a
              href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 text-emerald-400 font-semibold transition-colors"
              id="topbar-whatsapp-link"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Oficial: {OFFICIAL_WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phones[0].raw}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.phones[0].display} / {CONTACT_INFO.phones[1].display}</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Luanda, Projecto Nandó (arredores Banco BIC)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Seg - Sex: 07h00 - 17h30</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100'
            : 'bg-white py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            id="header-logo-btn"
          >
            {!logoError ? (
              <img
                src={LOGO_URL}
                alt="Complexo Escolar Basima do Saber"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="h-11 md:h-14 w-auto object-contain max-w-[200px] transition-transform duration-200 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 font-bold text-xl shadow-inner border border-amber-400/40">
                  B
                </div>
                <div>
                  <span className="block font-bold text-blue-950 text-base leading-tight tracking-tight">
                    BASIMA DO SABER
                  </span>
                  <span className="text-[11px] font-medium text-amber-600 tracking-wider uppercase">
                    Complexo Escolar
                  </span>
                </div>
              </div>
            )}
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100/80'
                  }`}
                  id={`nav-item-${link.id}`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContactModal('Atendimento Geral e Matrículas')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 text-white hover:from-blue-800 hover:to-blue-900 text-sm font-semibold px-4.5 py-2.5 rounded-full shadow-md shadow-blue-950/15 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 border border-blue-700/40 cursor-pointer"
              id="header-contact-btn"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Fale Connosco</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
              aria-label="Abrir menu de navegação"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl transition-all">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left block px-3.5 py-2.5 text-base font-semibold rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-blue-50/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal('Atendimento Geral e Matrículas');
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-blue-950 text-white font-semibold py-3 px-4 rounded-xl shadow hover:bg-blue-800 transition-colors cursor-pointer"
                id="mobile-fale-connosco-btn"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Fale Connosco</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="bg-slate-50 p-3.5 rounded-xl text-xs text-slate-600 space-y-2 border border-slate-200/80">
                <a
                  href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {OFFICIAL_WHATSAPP_DISPLAY}</span>
                </a>
                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>{CONTACT_INFO.phones[0].display} / {CONTACT_INFO.phones[1].display}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>{CONTACT_INFO.email}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Projecto Nandó, Luanda</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

