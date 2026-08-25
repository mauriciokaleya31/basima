import React from 'react';
import {
  Sparkles,
  DoorOpen,
  Monitor,
  FlaskConical,
  Trophy,
  BookMarked,
  Music,
  CheckCircle2,
  ShieldCheck,
  Wind,
  Eye,
  Calendar,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { FACILITIES, OFFICIAL_IMAGES } from '../data/schoolData';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface InfrastructurePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string, course?: string) => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const facilityImages: Record<string, string> = {
    'salas-aula': OFFICIAL_IMAGES.classroom22,
    'biblioteca': OFFICIAL_IMAGES.library,
    'laboratorio-ciencias': OFFICIAL_IMAGES.scienceLab,
    'campo-desportivo': OFFICIAL_IMAGES.sports,
    'sala-informatica': OFFICIAL_IMAGES.computerLab,
    'sala-musica-danca': OFFICIAL_IMAGES.musicDance,
  };

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'DoorOpen':
        return <DoorOpen className="w-5 h-5" />;
      case 'BookMarked':
        return <BookMarked className="w-5 h-5" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn pb-12">
      {/* 1. Hero Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src={OFFICIAL_IMAGES.slide3}
            alt="Infraestrutura do Complexo Escolar Basima do Saber"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campus & Instalações</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Infraestrutura Moderna, Ampla e Segura
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              O ambiente onde o aluno estuda faz toda a diferença no seu rendimento. Conheça as 22 salas de aula climatizadas, os laboratórios práticos e os espaços desportivos do Complexo Escolar Basima do Saber em Luanda.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Highlights Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <Wind className="w-8 h-8 text-blue-900 mx-auto mb-2" />
            <span className="block text-3xl font-extrabold text-blue-950">22</span>
            <span className="text-xs font-bold text-slate-600">Salas Climatizadas</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <FlaskConical className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <span className="block text-3xl font-extrabold text-amber-600">100%</span>
            <span className="text-xs font-bold text-slate-600">Laboratórios Equipados</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <Trophy className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <span className="block text-3xl font-extrabold text-emerald-600">Polidesportivo</span>
            <span className="text-xs font-bold text-slate-600">Desporto & Saúde</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <ShieldCheck className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <span className="block text-3xl font-extrabold text-indigo-600">24/7</span>
            <span className="text-xs font-bold text-slate-600">Segurança & Controlo</span>
          </div>
        </div>
      </section>

      {/* 3. Detailed Facilities with Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Espaços Pedagógicos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Nossos Ambientes de Aprendizagem
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Cada espaço foi planeado para incentivar a concentração, a pesquisa científica e o convívio saudável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => {
            const photo = facilityImages[facility.id] || OFFICIAL_IMAGES.classroom22;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={photo}
                      alt={facility.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-blue-950/80 backdrop-blur-sm text-amber-400 p-2 rounded-xl">
                      {getFacilityIcon(facility.iconName)}
                    </div>
                    {facility.capacity && (
                      <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                        {facility.capacity}
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {facility.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenContactModal('Visita às Instalações - ' + facility.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-950 text-xs font-bold border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Agendar Visita a Este Espaço</span>
                    <ArrowRight className="w-3 h-3 text-amber-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Segurança e Higiene */}
      <section className="bg-slate-900 text-white py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Tranquilidade dos Pais
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Segurança, Conforto e Higiene em Primeiro Lugar
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              O complexo escolar dispõe de portaria vigiada, controlo rigoroso de entradas e saídas de estudantes, manutenção e limpeza constante de sanitários, bebedouros e áreas comuns para garantir um ambiente saudável.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Controlo de Acessos</h4>
                <p className="text-xs text-slate-400">Nenhum aluno sai sem autorização do encarregado.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                <Wind className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Climatização Contínua</h4>
                <p className="text-xs text-slate-400">Conforto térmico mesmo nos dias mais quentes de Luanda.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
              <img
                src={OFFICIAL_IMAGES.campus}
                alt="Ambiente escolar seguro"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 p-6 flex flex-col justify-end">
                <p className="text-xs font-bold text-amber-400">Localização Privilegiada</p>
                <p className="text-sm font-semibold text-white">Projecto Nandó, arredores do Banco BIC (Casa das Merendas)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WhatsApp Visit Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatsAppInquiryForm
          title="Agendar Visita Guiada ao Complexo"
          subtitle="Venha conhecer as 22 salas, os laboratórios e a biblioteca com a nossa equipa de coordenação."
          defaultSubject="Agendamento de Visita às Instalações"
          formType="Página de Infraestrutura - Agendamento"
        />
      </section>
    </div>
  );
};
