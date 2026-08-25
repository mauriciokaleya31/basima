import React, { useState } from 'react';
import {
  Building2,
  TrendingUp,
  Calculator,
  UsersRound,
  Laptop,
  Briefcase,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Sparkles,
  Info,
  Clock,
} from 'lucide-react';
import { TECHNICAL_COURSES } from '../data/schoolData';
import { TechnicalCourse } from '../types';

interface TechnicalCoursesProps {
  onOpenContactModal: (subject?: string) => void;
  onSelectCourse?: (course: TechnicalCourse) => void;
}

export const TechnicalCourses: React.FC<TechnicalCoursesProps> = ({
  onOpenContactModal,
  onSelectCourse,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<TechnicalCourse>(TECHNICAL_COURSES[0]);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-700" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-indigo-600" />;
      case 'UsersRound':
        return <UsersRound className="w-6 h-6 text-amber-600" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-sky-600" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="cursos-tecnicos" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formação Técnico-Profissional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cursos Técnicos Profissionais
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-blue-500 mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Formação sólida e reconhecida, desenhada para preparar jovens talentos com conhecimentos práticos, rigor e elevada competitividade para o mercado de trabalho angolano.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TECHNICAL_COURSES.map((course) => {
            const isSelected = selectedCourse.id === course.id;
            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-800/90 border-amber-400/80 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400'
                    : 'bg-slate-800/40 hover:bg-slate-800/70 border-slate-700 hover:border-slate-600 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                      {getCourseIcon(course.iconName)}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block">
                      Saídas Profissionais:
                    </span>
                    {course.careerOpportunities.slice(0, 2).map((opp, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{opp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Duração: {course.duration}</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenContactModal(`Informações sobre o Curso de ${course.title}`);
                    }}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Inscrever-se</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Card for Other Technical Courses Available */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-blue-900/60 to-slate-900 border border-dashed border-blue-400/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-400/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Outros Cursos Técnicos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Consulte a secretaria para conhecer todas as opções curriculares, especializações e novas turmas técnicas disponíveis para o próximo ano lectivo.
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Laboratórios equipados e aulas práticas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Estágios curriculares e apoio vocacional</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenContactModal('Consulta de Cursos e Especializações Técnicas')}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 text-blue-950 font-bold text-xs hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                id="ver-cursos-btn"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Todos os Cursos & Vagas</span>
              </button>
            </div>
          </div>
        </div>

        {/* Focus Details on Selected Course */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-700">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Plano de Curso em Destaque
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedCourse.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                {selectedCourse.description}
              </p>
            </div>

            <button
              onClick={() => onOpenContactModal(`Candidatura / Matrícula no Curso: ${selectedCourse.title}`)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-blue-950 font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md shrink-0 cursor-pointer"
              id="selected-course-enroll-btn"
            >
              <span>Solicitar Vaga Neste Curso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Saídas e Competências Profissionais</span>
              </h4>
              <div className="space-y-2">
                {selectedCourse.careerOpportunities.map((opp, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-200 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span>{opp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Módulos e Disciplinas Chave</span>
              </h4>
              <div className="space-y-2">
                {selectedCourse.modules.map((mod, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-200 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
