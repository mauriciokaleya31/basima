import React from 'react';
import { Sparkles, ArrowRight, PhoneCall, ShieldCheck, Heart } from 'lucide-react';

interface EnrollmentCTAProps {
  onOpenContactModal: (subject?: string) => void;
}

export const EnrollmentCTA: React.FC<EnrollmentCTAProps> = ({ onOpenContactModal }) => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-950 text-white">
      {/* Visual accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-blue-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md">
            <Sparkles className="w-4 h-4 fill-blue-950" />
            <span>Ano Lectivo 2026 / 2027</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Prepare o Futuro do Seu Filho
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            "Faça parte da família <span className="font-semibold text-amber-300">Basima do Saber</span> e garanta uma educação de excelência, valores humanos e qualificação profissional."
          </p>

          {/* Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContactModal('Pedido de Vaga e Matrícula 2026/2027')}
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              id="cta-solicitar-info-btn"
            >
              <span>Solicitar Informações</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contactos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Ver Contactos da Secretaria</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Instituição Homologada</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>Ambiente Seguro & Familiar</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
