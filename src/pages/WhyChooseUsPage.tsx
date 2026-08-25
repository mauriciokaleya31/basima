import React from 'react';
import {
  Sparkles,
  Award,
  GraduationCap,
  Home,
  HeartHandshake,
  Target,
  CheckCircle2,
  Users,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Star,
} from 'lucide-react';
import { WHY_CHOOSE_US, OFFICIAL_IMAGES } from '../data/schoolData';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface WhyChooseUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string, course?: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn pb-12">
      {/* 1. Hero Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src={OFFICIAL_IMAGES.slide1}
            alt="Porquê Escolher o Complexo Escolar Basima do Saber"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diferenciais de Excelência</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Porquê Escolher o Complexo Escolar Basima do Saber?
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Descubra os motivos pelos quais centenas de encarregados de educação em Luanda confiam a formação dos seus filhos ao nosso projeto educativo de referência.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed 5 Core Reasons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Compromisso Educativo
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            5 Pilares que Fazem do Basima a Melhor Escolha
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Não ensinamos apenas matérias: desenvolvemos caráter, competências reais e visão de futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center shadow-inner">
                    {getBenefitIcon(benefit.iconName)}
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-amber-500 transition-colors">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Garantia de Rigor Pedagógico</span>
              </div>
            </div>
          ))}

          {/* Special Enrollment Action Card */}
          <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Star className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Vagas Limitadas
              </span>
              <h3 className="text-xl font-bold text-white">
                Garanta a Matrícula para o Próximo Ano Lectivo
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                As turmas possuem número controlado de alunos para assegurar a atenção individualizada de cada professor.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenContactModal('Reserva de Vaga - Porquê o Basima')}
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar no WhatsApp ({OFFICIAL_WHATSAPP_DISPLAY})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Strategic Photo Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Comunidade Educativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Uma Parceria Estreita entre Escola e Família
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No Basima do Saber, acreditamos que o sucesso de um estudante depende da comunicação constante com os encarregados de educação. Fornecemos relatórios periódicos de aproveitamento e reuniões regulares de acompanhamento.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('contactos')}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                <span>Falar com a Nossa Equipa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
              <img
                src={OFFICIAL_IMAGES.primary}
                alt="Alunos no Complexo Escolar Basima do Saber"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WhatsApp Direct Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatsAppInquiryForm
          title="Fale Connosco e Tire Todas as Dúvidas"
          subtitle="A nossa coordenação pedagógica responde rapidamente pelo WhatsApp oficial."
          defaultSubject="Informações sobre Porquê Escolher o Basima"
          formType="Página Porquê o Basima"
        />
      </section>
    </div>
  );
};
