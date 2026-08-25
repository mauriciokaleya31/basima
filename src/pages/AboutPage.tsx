import React from 'react';
import {
  Sparkles,
  Award,
  GraduationCap,
  ShieldCheck,
  Users,
  Target,
  HeartHandshake,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { ABOUT_PILLARS, OFFICIAL_IMAGES } from '../data/schoolData';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string, course?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn pb-12">
      {/* 1. Hero Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={OFFICIAL_IMAGES.slide1}
            alt="Complexo Escolar Basima do Saber"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Institucional</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Quem Somos: Educar para Transformar o Futuro
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Conheça a história, a missão pedagógica e os valores humanos que guiam o Complexo Escolar Basima do Saber na formação de cidadãos íntegros, competentes e preparados para os desafios do mundo moderno.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Institutional Overview & Strategic Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Nossa Identidade
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Uma Instituição de Ensino Comprometida com o Sucesso dos Alunos
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              O <strong>Complexo Escolar Basima do Saber</strong> é uma instituição de ensino privada angolana, localizada no Projecto Nandó, arredores do Banco BIC (Casa das Merendas), em Luanda.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nascemos da convicção de que a educação de qualidade é o alicerce fundamental para a transformação de vidas e para o desenvolvimento sustentável da nossa sociedade. Da iniciação ao ensino técnico profissional, proporcionamos um percurso escolar sólido com rigor pedagógico, disciplina consciente e apoio individualizado.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="block text-2xl font-extrabold text-blue-950">22</span>
                <span className="text-xs font-semibold text-slate-700">Salas de Aula Climatizadas</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                <span className="block text-2xl font-extrabold text-amber-700">100%</span>
                <span className="text-xs font-semibold text-slate-700">Corpo Docente Especializado</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={OFFICIAL_IMAGES.teachers}
                alt="Professores e equipa do Basima do Saber"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase">Corpo Docente Dedicado</span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Professores apaixonados por ensinar e orientar cada educando
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Missão, Visão e Valores */}
      <section className="bg-slate-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Fundamentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Missão, Visão e Valores
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A bússola moral e estratégica que orienta cada aula, projeto e decisão no Basima do Saber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Missão */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Nossa Missão</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Proporcionar um ensino de excelência, fundamentado no desenvolvimento de competências científicas, técnicas e humanas, promovendo a disciplina, a cidadania responsável e o espírito de liderança em cada aluno.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Educar para a Vida</span>
              </div>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Nossa Visão</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ser reconhecido como um dos complexos escolares de maior prestígio e qualidade em Luanda, distinguindo-se pelo rigor pedagógico, pela modernidade das suas instalações e pelo elevado índice de aprovação e inserção no mercado e ensino superior.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Referência Educacional</span>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Nossos Valores</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                    <span><strong>Rigor e Excelência:</strong> Superação contínua.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                    <span><strong>Ética e Respeito:</strong> Convivência harmoniosa.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                    <span><strong>Disciplina:</strong> Hábito do estudo e responsabilidade.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                    <span><strong>Inovação:</strong> Integração tecnológica na aprendizagem.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Princípios Inegociáveis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Os 5 Pilares Pedagógicos com Fotos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Metodologia
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Os Pilares Pedagógicos do Basima
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Como garantimos que cada estudante atinja o seu potencial máximo intelectual e humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold border border-blue-100">
                  <span className="text-xs">{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}

          {/* Call card */}
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Visita Institucional
              </span>
              <h3 className="text-lg font-bold text-white">
                Venha conhecer o nosso campus pessoalmente
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Agende uma visita guiada às salas de aula, laboratórios e biblioteca escolar.
              </p>
            </div>
            <button
              onClick={() => onOpenContactModal('Agendamento de Visita às Instalações')}
              className="mt-6 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors cursor-pointer self-start"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Agendar no WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Direct WhatsApp Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatsAppInquiryForm
          title="Fale com a Direcção Pedagógica"
          subtitle="Tire dúvidas sobre o nosso projeto pedagógico diretamente via WhatsApp oficial."
          formType="Página Quem Somos"
        />
      </section>
    </div>
  );
};
