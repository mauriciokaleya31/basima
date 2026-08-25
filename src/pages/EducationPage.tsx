import React, { useState } from 'react';
import {
  Sparkles,
  Baby,
  BookOpen,
  Library,
  Compass,
  Briefcase,
  CheckCircle2,
  Calendar,
  FileCheck,
  ArrowRight,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import { EDUCATION_LEVELS, OFFICIAL_IMAGES } from '../data/schoolData';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface EducationPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string, course?: string) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('todos');

  const levelPhotos: Record<string, string> = {
    'pre-escolar': OFFICIAL_IMAGES.preschool,
    'ensino-primario': OFFICIAL_IMAGES.primary,
    'primeiro-ciclo': OFFICIAL_IMAGES.secondary,
    'segundo-ciclo': OFFICIAL_IMAGES.secondary,
    'ensino-tecnico': OFFICIAL_IMAGES.technical,
  };

  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn pb-12">
      {/* 1. Hero Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src={OFFICIAL_IMAGES.slide2}
            alt="Níveis de Ensino no Basima do Saber"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Oferta Pedagógica Completa</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Níveis de Ensino: Do Pré-Escolar aos Cursos Técnicos
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Estruturamos programas pedagógicos rigorosos, alinhados com o Ministério da Educação de Angola, que acompanham a evolução cognitiva, emocional e técnica de cada faixa etária.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Educational Levels with Contextual Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Estrutura Curricular
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Explore Cada Etapa da Aprendizagem
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Metodologias adaptadas para despertar o gosto pelo estudo e consolidar o saber.
          </p>
        </div>

        <div className="space-y-10">
          {EDUCATION_LEVELS.map((level, index) => {
            const isEven = index % 2 === 0;
            const photoUrl = levelPhotos[level.id] || OFFICIAL_IMAGES.primary;

            return (
              <div
                key={level.id}
                id={level.id}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Photo Col */}
                <div
                  className={`lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={photoUrl}
                    alt={level.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-sm text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-400/30">
                    {level.grades}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {level.ageGroup}
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                      {level.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {level.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {level.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Destaques do Programa:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {level.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenContactModal('Matrícula - ' + level.title, level.title)}
                      className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl shadow text-xs transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                      <span>Solicitar Informações de Matrícula</span>
                    </button>

                    {level.id === 'ensino-tecnico' && (
                      <button
                        onClick={() => onNavigate('cursos')}
                        className="inline-flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-bold text-xs p-2.5 cursor-pointer"
                      >
                        <span>Ver todos os Cursos Técnicos</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Requisitos e Processo de Matrícula */}
      <section className="bg-slate-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Inscrições
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Documentos Necessários para Matrícula
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Organize a documentação para garantir a vaga do seu educando no Complexo Escolar Basima do Saber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-base font-bold text-slate-900">Pré-Escolar & Primário</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Cédula Pessoal ou Certidão de Nascimento</li>
                <li>• Cartão de Vacinas atualizado</li>
                <li>• 4 Fotografias tipo passe</li>
                <li>• Cópia do B.I. dos encarregados de educação</li>
                <li>• Atestado Médico de aptidão física</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-base font-bold text-slate-900">I & II Ciclo Geral</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Certificado ou Declaração com Notas da classe anterior</li>
                <li>• Cópia do Bilhete de Identidade (B.I.) do aluno</li>
                <li>• Cópia do B.I. dos encarregados de educação</li>
                <li>• 4 Fotografias tipo passe recentes</li>
                <li>• Ficha de transferência (caso venha de outra escola)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-base font-bold text-slate-900">Cursos Médios Técnicos</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Certificado de conclusão da 9ª Classe (Original e Cópia)</li>
                <li>• Cópia autenticada do Bilhete de Identidade</li>
                <li>• 4 Fotografias tipo passe</li>
                <li>• Atestado Médico atualizado</li>
                <li>• Preenchimento do formulário de opção de curso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WhatsApp Direct Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatsAppInquiryForm
          title="Pré-Inscrição de Matrícula"
          subtitle="Preencha os dados e escolha o nível de ensino. O formulário será encaminhado para o WhatsApp oficial da escola."
          formType="Página de Ensino - Matrícula"
        />
      </section>
    </div>
  );
};
