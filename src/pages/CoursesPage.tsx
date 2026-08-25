import React, { useState } from 'react';
import {
  Sparkles,
  Building2,
  TrendingUp,
  Calculator,
  UsersRound,
  Laptop,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Compass,
  Trophy,
  FileText,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { TECHNICAL_COURSES, SCHOOL_SERVICES, OFFICIAL_IMAGES } from '../data/schoolData';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface CoursesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string, course?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const [activeCourseId, setActiveCourseId] = useState<string>(TECHNICAL_COURSES[0].id);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'UsersRound':
        return <UsersRound className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const activeCourse = TECHNICAL_COURSES.find((c) => c.id === activeCourseId) || TECHNICAL_COURSES[0];

  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn pb-12">
      {/* 1. Hero Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src={OFFICIAL_IMAGES.technical}
            alt="Cursos Técnicos Profissionais no Basima do Saber"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Qualificação & Futuro Profissional</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Serviços Educativos & Cursos Técnicos Profissionais
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Formamos técnicos médios altamente qualificados e fornecemos serviços de apoio ao aluno que garantem alto rendimento académico e inserção de destaque no mercado angolano.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Cursos Técnicos Detalhados com Seletor Interativo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Cursos Médios Técnicos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Escolha o Seu Rumo Profissional
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Cursos com certificação oficial, formação em software específico e forte componente prática.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {TECHNICAL_COURSES.map((c) => {
            const isActive = c.id === activeCourseId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCourseId(c.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-950/20 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {getCourseIcon(c.iconName)}
                <span>{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Course Deep Dive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
                {activeCourse.badge}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Duração do Curso: {activeCourse.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {activeCourse.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeCourse.description}
            </p>

            {/* Modules Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Módulos & Disciplinas Principais:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeCourse.modules.map((mod, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Oportunidades no Mercado de Trabalho:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCourse.careerOpportunities.map((opp, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                    <span>{opp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenContactModal('Inscrição no Curso - ' + activeCourse.title, activeCourse.title)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-800 hover:to-blue-900 text-white font-bold px-6 py-3 rounded-xl shadow-md text-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Candidatar-se a este Curso</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-slate-100">
              <img
                src={OFFICIAL_IMAGES.computerLab}
                alt="Formação Prática no Basima"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
                <p className="text-xs font-bold text-amber-400">Prática com Softwares Modernos</p>
                <p className="text-xs text-slate-200">Aulas práticas aplicadas aos desafios reais das empresas.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-100 space-y-2">
              <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                Certificação & Reconhecimento
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diploma de Técnico Médio reconhecido pelo Ministério da Educação de Angola, permitindo tanto a entrada direta no mercado de trabalho como a continuidade de estudos em qualquer Universidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Serviços e Apoio ao Aluno */}
      <section className="bg-slate-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Apoio Integral
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Serviços Educativos & Complementares
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Garantimos todo o suporte que o estudante necessita para manter o foco, o bem-estar e o êxito escolar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOL_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-100">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Direct Secretary card */}
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Atendimento Especial
                </span>
                <h3 className="text-lg font-bold text-white">
                  Dúvidas sobre propinas ou horários dos cursos?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A nossa secretaria pedagógica está pronta para esclarecer todas as dúvidas sobre planos de pagamento e horários disponíveis.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenContactModal('Dúvidas de Cursos e Propinas')}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Falar no WhatsApp ({OFFICIAL_WHATSAPP_DISPLAY})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WhatsApp Course Registration Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatsAppInquiryForm
          title="Inscrição em Cursos Técnicos"
          subtitle="Preencha o formulário para receber a ementa completa do curso no WhatsApp oficial da escola."
          defaultLevelOrCourse={`Técnico: ${activeCourse.title}`}
          formType="Página de Cursos Técnicos"
        />
      </section>
    </div>
  );
};
