import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Award,
  DoorOpen,
  Monitor,
  FlaskConical,
  Trophy,
  CheckCircle2,
} from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { EDUCATION_LEVELS, TECHNICAL_COURSES, OFFICIAL_IMAGES } from '../data/schoolData';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string, course?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn">
      {/* 1. Hero Slider with 3 official slides */}
      <HeroSlider
        onOpenContactModal={(subject) => onOpenContactModal(subject)}
      />

      {/* 2. Welcome & Institutional Mission Highlights with Strategic Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Bem-vindo ao Complexo Escolar Basima do Saber</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Excelência pedagógica, valores e disciplina para o futuro do seu educando
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              O <strong>Complexo Escolar Basima do Saber</strong>, situado no Projecto Nandó (Luanda), é uma instituição de ensino de referência vocacionada para a formação integral. Combinamos rigor académico, corpo docente altamente qualificado e instalações modernas para proporcionar uma experiência de aprendizagem transformadora do Pré-Escolar aos Cursos Médios Técnicos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-900">22</span>
                <span className="text-xs font-semibold text-slate-600">Salas Climatizadas</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-600">5+</span>
                <span className="text-xs font-semibold text-slate-600">Cursos Técnicos</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</span>
                <span className="text-xs font-semibold text-slate-600">Foco no Aluno</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('quem-somos')}
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer text-sm"
              >
                <span>Conhecer a Nossa História</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={() => onNavigate('ensino')}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl transition-colors cursor-pointer text-sm"
              >
                <span>Ver Níveis de Ensino</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={OFFICIAL_IMAGES.slide1}
                alt="Complexo Escolar Basima do Saber - Educar para Transformar"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Educar para Transformar
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Formamos hoje os líderes que irão transformar Angola
                </h3>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Educação com Valores</p>
                <p className="text-[11px] text-slate-500">Disciplina, Ética e Rigor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Níveis de Ensino Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Percurso Completo
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Níveis de Ensino Disponíveis
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Do Pré-Escolar aos Cursos Médios Técnicos, estruturamos uma formação progressiva adaptada a cada fase do desenvolvimento.
            </p>
          </div>
          <button
            onClick={() => onNavigate('ensino')}
            className="inline-flex items-center gap-2 text-blue-900 font-bold text-sm hover:text-blue-700 cursor-pointer self-start md:self-auto"
          >
            <span>Ver todos os detalhes pedagógicos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATION_LEVELS.slice(0, 3).map((level) => (
            <div
              key={level.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                    {level.grades}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{level.ageGroup}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {level.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {level.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {level.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('ensino')}
                  className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Saber Mais</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenContactModal('Matrícula - ' + level.title)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors cursor-pointer"
                >
                  Solicitar Vaga
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Strategic Photo Banner - Slide 2 Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950">
          <img
            src={OFFICIAL_IMAGES.slide2}
            alt="Complexo Escolar Basima do Saber - Um ensino de qualidade"
            referrerPolicy="no-referrer"
            className="w-full h-72 sm:h-96 object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/70 to-transparent flex items-center p-6 sm:p-12 lg:p-16">
            <div className="max-w-xl text-white space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Formação Técnica de Alto Nível</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Um Ensino de Qualidade para um Futuro de Sucesso
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Preparamos os nossos estudantes com competências técnicas sólidas em Administração e Gestão de Empresas, Gestão Financeira e Contabilidade, Gestão de Hotelaria e Turismo, e Gestão de Recursos Humanos.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('cursos')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer text-sm flex items-center gap-2"
                >
                  <span>Explorar Cursos Técnicos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenContactModal('Informações Cursos Técnicos')}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition-colors cursor-pointer text-sm"
                >
                  <span>Pedir Programa Curricular</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cursos Técnicos Grid Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Qualificação Profissional
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Cursos Médios Técnicos em Destaque
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Metodologias práticas e estágios alinhados com o mercado de trabalho angolano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    {course.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{course.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">{course.description}</p>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Saídas Profissionais:</span>
                  {course.careerOpportunities.slice(0, 2).map((opp, i) => (
                    <p key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                      <span>{opp}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('cursos')}
                  className="text-xs font-bold text-blue-900 hover:text-blue-700 cursor-pointer"
                >
                  Ver Disciplinas
                </button>
                <button
                  onClick={() => onOpenContactModal('Inscrição no Curso - ' + course.title, course.title)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Candidatar-se
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Infraestrutura Showcase & Stats */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Campus Moderno & Seguro
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Instalações preparadas para o máximo rendimento escolar
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contamos com 22 salas de aula totalmente climatizadas, laboratórios práticos de ciências e informática, biblioteca escolar, campo polidesportivo e sala de dança e música.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <DoorOpen className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white text-sm">22 Salas Climatizadas</h4>
                  <p className="text-xs text-slate-400">Ambiente térmico ideal para concentração.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Monitor className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white text-sm">Sala de Informática</h4>
                  <p className="text-xs text-slate-400">Computadores modernos e internet.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <FlaskConical className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white text-sm">Laboratório de Ciências</h4>
                  <p className="text-xs text-slate-400">Física e Química com segurança.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Trophy className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white text-sm">Campo Polidesportivo</h4>
                  <p className="text-xs text-slate-400">Futebol, basquete e desporto.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('estrutura')}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-colors cursor-pointer text-sm"
                >
                  <span>Conhecer Toda a Infraestrutura</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
                <img
                  src={OFFICIAL_IMAGES.slide3}
                  alt="Infraestrutura do Complexo Escolar Basima do Saber"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-amber-400 uppercase">Projecto Nandó</span>
                  <h4 className="text-lg font-bold text-white">
                    Espaço Amplo, Seguro e Climatizado para o Seu Educando
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
