import React from 'react';
import {
  Award,
  GraduationCap,
  Home,
  HeartHandshake,
  Target,
  Sparkles,
  CheckCircle,
  Star,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/schoolData';

export const WhyChooseUs: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-indigo-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-rose-600" />;
      default:
        return <Star className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="porque-escolher" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diferenciais Pedagógicos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Porquê Escolher o Basima?
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-amber-400 mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Combinamos tradição em valores humanos e inovação pedagógica constante para formar cidadãos preparados, éticos e preparados para liderar.
          </p>
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((benefit, index) => {
            const isWide = index === 0;
            return (
              <div
                key={benefit.id}
                className={`rounded-3xl p-8 transition-all duration-300 relative border ${
                  isWide
                    ? 'bg-gradient-to-br from-blue-900 to-blue-950 text-white border-blue-800 shadow-xl md:col-span-2 lg:col-span-1'
                    : 'bg-slate-50 hover:bg-white text-slate-900 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${
                      isWide
                        ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                        : 'bg-white text-blue-900 border border-slate-200'
                    }`}
                  >
                    {getBenefitIcon(benefit.iconName)}
                  </div>
                  <span
                    className={`text-2xl font-black ${
                      isWide ? 'text-amber-400/80' : 'text-slate-300'
                    }`}
                  >
                    {benefit.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isWide ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {benefit.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    isWide ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  {benefit.description}
                </p>

                {/* Micro badge */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-semibold ${
                    isWide
                      ? 'border-white/10 text-amber-300'
                      : 'border-slate-200 text-blue-900'
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Compromisso Basima do Saber</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
