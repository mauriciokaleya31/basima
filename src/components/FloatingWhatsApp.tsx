import React from 'react';
import { MessageSquare } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de informações sobre as matrículas e cursos no Complexo Escolar Basima do Saber.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale connosco pelo WhatsApp"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-950/30 hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105 border border-emerald-400/30"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-5 h-5 text-white" />
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight hidden sm:inline-block">WhatsApp Secretaria</span>
          <span className="text-[10px] text-emerald-100 hidden sm:inline-block font-medium">{OFFICIAL_WHATSAPP_DISPLAY}</span>
        </div>
      </a>
    </div>
  );
};

