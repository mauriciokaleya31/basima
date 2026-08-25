import React from 'react';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Users,
  Sparkles,
  Target,
  Compass,
  CheckCircle,
  Building,
} from 'lucide-react';
import { ABOUT_PILLARS } from '../data/schoolData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      default:
        return <CheckCircle className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="quem-somos" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <span>Quem Somos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sobre o Colégio Basima do Saber
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-amber-400 mx-auto rounded-full" />

          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            O <strong className="text-blue-950 font-semibold">Complexo Escolar Basima do Saber</strong> é uma instituição de ensino dedicada à formação académica e humana dos seus alunos. Trabalhamos para proporcionar um ambiente educativo seguro, organizado e estimulante, onde cada aluno possa desenvolver os seus conhecimentos, talentos e valores.
          </p>
        </div>

        {/* 5 Highlights / Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Missão e Objectivo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Missão */}
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-800/40 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block">Propósito Institucional</span>
                <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              "Promover uma educação de qualidade, formando alunos responsáveis, preparados e capazes de contribuir positivamente para a sociedade."
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-medium">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Ética, Excelência, Responsabilidade e Cidadania</span>
            </div>
          </div>

          {/* Objectivo */}
          <div className="relative bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/90 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/60 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 border border-blue-200 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 text-blue-800" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-blue-800 tracking-wider block">Diretriz Pedagógica</span>
                <h3 className="text-2xl font-bold text-slate-900">Nosso Objectivo</h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              "Proporcionar aos nossos alunos conhecimentos, competências e valores que lhes permitam enfrentar os desafios académicos e profissionais do futuro."
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-900 font-medium">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Metodologia Ativa, Rigor e Acompanhamento Contínuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
