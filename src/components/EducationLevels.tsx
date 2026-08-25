import React, { useState } from 'react';
import {
  Baby,
  BookOpen,
  Library,
  Compass,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { EDUCATION_LEVELS } from '../data/schoolData';
import { EducationLevel } from '../types';

interface EducationLevelsProps {
  onOpenContactModal: (subject?: string) => void;
}

export const EducationLevels: React.FC<EducationLevelsProps> = ({ onOpenContactModal }) => {
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel | null>(null);

  const getLevelIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-7 h-7" />;
      case 'BookOpen':
        return <BookOpen className="w-7 h-7" />;
      case 'Library':
        return <Library className="w-7 h-7" />;
      case 'Compass':
        return <Compass className="w-7 h-7" />;
      case 'Briefcase':
        return <Briefcase className="w-7 h-7" />;
      default:
        return <BookOpen className="w-7 h-7" />;
    }
  };

  return (
    <section id="ensino" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>Percurso Académico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Níveis de Ensino
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-blue-700 mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Uma estrutura pedagógica contínua e completa, preparada para acompanhar o desenvolvimento intelectual, emocional e profissional em cada fase do seu filho.
          </p>
        </div>

        {/* Education Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EDUCATION_LEVELS.map((level, idx) => {
            const isHighlight = level.id === 'ensino-tecnico';
            return (
              <div
                key={level.id}
                className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-gradient-to-b from-blue-950 to-slate-900 text-white shadow-xl border border-amber-400/40 md:col-span-2 lg:col-span-1 ring-2 ring-amber-400/20'
                    : 'bg-slate-50 hover:bg-white text-slate-900 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-blue-300'
                }`}
              >
                {/* Top Badge for special highlighted item */}
                {isHighlight && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-blue-950 text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Destaque Profissional</span>
                  </div>
                )}

                <div>
                  {/* Icon & Age Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${
                        isHighlight
                          ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                          : 'bg-blue-100/80 text-blue-900 border border-blue-200/60'
                      }`}
                    >
                      {getLevelIcon(level.iconName)}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isHighlight
                          ? 'bg-white/10 text-slate-200 border border-white/15'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      {level.ageGroup}
                    </span>
                  </div>

                  {/* Level Titles */}
                  <div className="mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                        isHighlight ? 'text-amber-400' : 'text-blue-700'
                      }`}
                    >
                      {level.grades}
                    </span>
                    <h3
                      className={`text-2xl font-bold ${
                        isHighlight ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {level.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 font-medium ${
                        isHighlight ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {level.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isHighlight ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {level.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    {level.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlight ? 'text-amber-400' : 'text-blue-600'
                          }`}
                        />
                        <span
                          className={
                            isHighlight ? 'text-slate-200' : 'text-slate-700 font-medium'
                          }
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-slate-200/40">
                  <button
                    onClick={() =>
                      onOpenContactModal(`Informações sobre ${level.title} (${level.grades})`)
                    }
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isHighlight
                        ? 'bg-amber-400 text-blue-950 hover:bg-amber-300 shadow-md hover:shadow-amber-400/20'
                        : 'bg-white hover:bg-blue-900 text-blue-900 hover:text-white border border-blue-900/30 hover:border-blue-900 shadow-sm'
                    }`}
                  >
                    <span>Solicitar Informações de Matrícula</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
