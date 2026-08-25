import React from 'react';
import {
  DoorOpen,
  BookMarked,
  FlaskConical,
  Trophy,
  Monitor,
  Music,
  CheckCircle,
  Building,
  Sparkles,
} from 'lucide-react';
import { FACILITIES } from '../data/schoolData';

export const InfrastructureSection: React.FC = () => {
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'DoorOpen':
        return <DoorOpen className="w-7 h-7 text-blue-900" />;
      case 'BookMarked':
        return <BookMarked className="w-7 h-7 text-indigo-700" />;
      case 'FlaskConical':
        return <FlaskConical className="w-7 h-7 text-emerald-700" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-amber-600" />;
      case 'Monitor':
        return <Monitor className="w-7 h-7 text-sky-700" />;
      case 'Music':
        return <Music className="w-7 h-7 text-purple-700" />;
      default:
        return <Building className="w-7 h-7 text-blue-900" />;
    }
  };

  return (
    <section id="estrutura" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-blue-900" />
            <span>Estrutura Física</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Infraestrutura Moderna & Acolhedora
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-amber-400 mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ambientes planeados e dimensionados para proporcionar segurança, conforto térmico, estímulo criativo e as melhores condições para o desenvolvimento integral dos nossos educandos.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Capacity Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-200 shadow-inner">
                    {getFacilityIcon(fac.iconName)}
                  </div>
                  {fac.capacity && (
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {fac.capacity}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-950 transition-colors">
                  {fac.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {fac.description}
                </p>
              </div>

              {/* Features List */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {fac.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Facility Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-blue-200/70 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 hidden sm:flex font-bold">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Deseja agendar uma visita guiada às nossas instalações?
              </h4>
              <p className="text-xs text-slate-500">
                Conheça de perto as 22 salas de aula, laboratórios, biblioteca e campo desportivo.
              </p>
            </div>
          </div>

          <a
            href="#contactos"
            className="px-6 py-2.5 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold shadow transition-colors shrink-0"
          >
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
};
