import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  MessageSquare,
  Building,
  Navigation,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Calendar,
  ShieldCheck,
  FileText,
  UserCheck,
  HelpCircle,
  ArrowRight,
  School,
  Share2,
} from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_IMAGES, TECHNICAL_COURSES } from '../data/schoolData';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY, OFFICIAL_WHATSAPP_NUMBER, sendToWhatsApp } from '../utils/whatsapp';

interface ContactPageProps {
  onNavigate?: (page: PageId) => void;
  onOpenContactModal?: (subject?: string, course?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyAddress = () => {
    const fullText = `${CONTACT_INFO.address}, ${CONTACT_INFO.reference}, ${CONTACT_INFO.city}`;
    navigator.clipboard.writeText(fullText);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleQuickWhatsAppQuery = (department: string, defaultMsg: string) => {
    const url = sendToWhatsApp({
      name: 'Encarregado(a) de Educação',
      phone: 'Contacto via Web',
      subject: department,
      message: defaultMsg,
      formType: 'Atalho de Contacto Rápido',
    });
  };

  const faqItems = [
    {
      question: 'Quais são os documentos necessários para a matrícula inicial?',
      answer:
        'Para novos alunos são necessários: Cópia do Bilhete de Identidade ou Cédula Pessoal do aluno e dos encarregados, Certificado de Habilitações com notas discriminadas (da escola anterior), Atestado Médico com Grupo Sanguíneo, 4 Fotografias tipo passe recentes e Ficha de Matrícula preenchida na secretaria.',
    },
    {
      question: 'Quais são os Cursos Técnicos Profissionais ministrados no Basima?',
      answer:
        'O Complexo Escolar Basima do Saber ministra 4 cursos técnicos oficiais de nível médio: 1) Administração e Gestão de Empresas, 2) Gestão Financeira e Contabilidade, 3) Gestão de Hotelaria e Turismo, e 4) Gestão de Recursos Humanos.',
    },
    {
      question: 'Como posso obter a tabela oficial de propinas e emolumentos?',
      answer:
        'A tabela de propinas é disponibilizada imediatamente pela secretaria presencial ou através do nosso WhatsApp Oficial (+244 958 363 295). Enviamos o documento em formato PDF com os valores por classe e prazos de pagamento.',
    },
    {
      question: 'É possível agendar uma visita guiada às instalações do colégio?',
      answer:
        'Sim! Recomendamos que os encarregados visitem o nosso campus para conhecer as nossas 22 salas de aula climatizadas, os laboratórios de ciências e informática, a biblioteca e o campo polidesportivo. As visitas ocorrem de Segunda a Sexta (08h00 às 16h30) e aos Sábados (08h30 às 12h00).',
    },
    {
      question: 'Qual é o ponto de referência exato da escola no Projecto Nandó?',
      answer:
        'O colégio está localizado no Projecto Nandó, tendo como principais marcos de referência os arredores do Banco BIC e da conhecida Casa das Merendas, com acesso facilitado e rua asfaltada.',
    },
    {
      question: 'Qual é o horário de funcionamento da Secretaria Escolar?',
      answer:
        'A secretaria está aberta de Segunda a Sexta-feira das 07h00 às 17h30 (em horário contínuo para maior comodidade dos pais) e aos Sábados das 08h00 às 12h30.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn pb-12">
      {/* 1. Hero Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src={OFFICIAL_IMAGES.campus}
            alt="Campus e Instalações do Complexo Escolar Basima do Saber"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Secretaria em Funcionamento • Atendimento Ágil</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Contactos, Horários & Localização Oficial
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Estamos disponíveis para atendê-lo com toda a atenção e rigor na nossa secretaria no Projecto Nandó ou através do WhatsApp oficial para matrículas, informações pedagógicas e agendamento de visitas.
            </p>

            {/* Quick action navigation chips */}
            <div className="pt-3 flex flex-wrap gap-2 text-xs">
              <a
                href="#whatsapp-direct"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/15 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Oficial</span>
              </a>
              <a
                href="#linhas-telefonicas"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/15 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Linhas Telefónicas</span>
              </a>
              <a
                href="#como-chegar"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/15 transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Como Chegar</span>
              </a>
              <a
                href="#formulario"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/15 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Formulário de Mensagem</span>
              </a>
              <a
                href="#perguntas-frequentes"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/15 transition-colors flex items-center gap-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
                <span>Dúvidas Frequentes</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Primary WhatsApp Spotlight Card with 1-Click Department Shortcuts */}
      <section id="whatsapp-direct" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-700/50 space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-emerald-800/60">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <MessageSquare className="w-4 h-4" />
                <span>Canal Principal de Atendimento Directo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                WhatsApp Oficial: {OFFICIAL_WHATSAPP_DISPLAY}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
                Tire dúvidas em tempo real, receba a tabela de propinas em PDF, esclareça requisitos de matrícula e fale diretamente com os responsáveis da secretaria.
              </p>
            </div>

            <a
              href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20matr%C3%ADculas%20no%20Complexo%20Escolar%20Basima%20do%20Saber.`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 text-sm sm:text-base cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Abrir Conversa no WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick-Action WhatsApp Department Buttons */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Atalhos de Atendimento Rápido (Selecione o assunto pretendido):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <button
                onClick={() =>
                  handleQuickWhatsAppQuery(
                    'Informações de Matrículas e Vagas',
                    'Olá! Gostaria de receber informações sobre vagas disponíveis, propinas e documentos necessários para matrícula.'
                  )
                }
                className="text-left p-3.5 rounded-2xl bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-600/40 hover:border-emerald-400 transition-all text-xs text-slate-200 hover:text-white cursor-pointer group"
              >
                <span className="block font-bold text-emerald-300 mb-1 group-hover:text-emerald-200">
                  📋 Matrículas & Propinas
                </span>
                <span className="text-[11px] text-emerald-100/80">
                  Pedir tabela de propinas e requisitos de inscrição
                </span>
              </button>

              <button
                onClick={() =>
                  handleQuickWhatsAppQuery(
                    'Cursos Técnicos Profissionais',
                    'Olá! Gostaria de obter detalhes curriculares e inscrições para os Cursos Médios Técnicos Profissionais.'
                  )
                }
                className="text-left p-3.5 rounded-2xl bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-600/40 hover:border-emerald-400 transition-all text-xs text-slate-200 hover:text-white cursor-pointer group"
              >
                <span className="block font-bold text-emerald-300 mb-1 group-hover:text-emerald-200">
                  📚 Cursos Técnicos
                </span>
                <span className="text-[11px] text-emerald-100/80">
                  Administração, Gestão Financeira, Hotelaria e RH
                </span>
              </button>

              <button
                onClick={() =>
                  handleQuickWhatsAppQuery(
                    'Agendamento de Visita às Instalações',
                    'Olá! Gostaria de agendar uma visita guiada às instalações do Complexo Escolar Basima do Saber.'
                  )
                }
                className="text-left p-3.5 rounded-2xl bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-600/40 hover:border-emerald-400 transition-all text-xs text-slate-200 hover:text-white cursor-pointer group"
              >
                <span className="block font-bold text-emerald-300 mb-1 group-hover:text-emerald-200">
                  🏫 Visita ao Campus
                </span>
                <span className="text-[11px] text-emerald-100/80">
                  Conhecer as 22 salas climatizadas e laboratórios
                </span>
              </button>

              <button
                onClick={() =>
                  handleQuickWhatsAppQuery(
                    'Secretaria Geral e Declarações',
                    'Olá! Gostaria de contactar a secretaria geral para tratar de documentação e declarações escolares.'
                  )
                }
                className="text-left p-3.5 rounded-2xl bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-600/40 hover:border-emerald-400 transition-all text-xs text-slate-200 hover:text-white cursor-pointer group"
              >
                <span className="block font-bold text-emerald-300 mb-1 group-hover:text-emerald-200">
                  🗂️ Secretaria Geral
                </span>
                <span className="text-[11px] text-emerald-100/80">
                  Emissão de certificados, notas e transferências
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Contact Cards & Department Grid */}
      <section id="linhas-telefonicas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Canais de Contacto Directo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Linhas Telefónicas, Email e Atendimento
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Escolha o canal mais conveniente para a sua necessidade. A nossa equipa de apoio está pronta para responder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Secretaria Principal */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-100">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  Secretaria & Matrículas
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  Linha Principal / WhatsApp
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Atendimento de matrículas e propinas
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-slate-900">958 363 295</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+244958363295"
                      className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 font-bold text-xs hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      Ligar
                    </a>
                    <a
                      href={`https://wa.me/244958363295?text=Ol%C3%A1%2C%20contacto%20atrav%C3%A9s%20do%20website%20do%20Basima.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                      title="WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-50">
              Canal prioritário para novos estudantes
            </p>
          </div>

          {/* Card 2: Linhas de Apoio e Coordenação */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                <School className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                  Apoio & Coordenação
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  Linhas Alternativas
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Atendimento geral e pedagógico
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">951 256 898</span>
                  <a
                    href="tel:+244951256898"
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    Ligar
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">933 132 975</span>
                  <a
                    href="tel:+244933132975"
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    Ligar
                  </a>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-50">
              Apoio aos pais e encarregados actuais
            </p>
          </div>

          {/* Card 3: Email e Portal */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                  Comunicação Institucional
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  Email & Website
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Correspondência formal e parcerias
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div>
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">Email Geral:</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-bold text-blue-900 hover:underline break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="pt-1">
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">Website:</span>
                  <span className="font-semibold text-slate-800">{CONTACT_INFO.website}</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-50">
              Resposta em até 24 horas úteis
            </p>
          </div>

          {/* Card 4: Horário da Secretaria */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  Horário de Expediente
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  Atendimento Presencial
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Secretaria no Projecto Nandó
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Segunda a Sexta:</span>
                  <span className="font-bold text-slate-900">07:00 - 17:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Sábados:</span>
                  <span className="font-bold text-slate-900">08:00 - 12:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Domingos:</span>
                  <span className="font-bold text-rose-600">Encerrado</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-emerald-700 font-semibold pt-2 border-t border-slate-50 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Sem interrupção no almoço</span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Form & Location Interactive Guide */}
      <section id="formulario" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <WhatsAppInquiryForm
              title="Envie a sua Mensagem para a Secretaria"
              subtitle="Preencha os dados abaixo. Ao clicar no botão, a sua solicitação será automaticamente organizada e aberta no nosso WhatsApp oficial."
              formType="Página de Contactos"
            />
          </div>

          {/* Location & Guidelines Guide */}
          <div id="como-chegar" className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Navigation className="w-4 h-4" />
                  <span>Como Chegar ao Basima</span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  title="Copiar Endereço"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Localização Exata no Projecto Nandó
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  O colégio está situado estrategicamente no <strong>Projecto Nandó</strong>. A principal referência é a proximidade imediata com o <strong>Banco BIC</strong> e o conhecido estabelecimento <strong>Casa das Merendas</strong>.
                </p>
              </div>

              {/* Step by step points */}
              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-extrabold flex items-center justify-center shrink-0 text-xs">
                    1
                  </div>
                  <div>
                    <strong className="text-white block">Ponto de Entrada:</strong>
                    <span>Acesso através da via principal asfaltada do Projecto Nandó.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-extrabold flex items-center justify-center shrink-0 text-xs">
                    2
                  </div>
                  <div>
                    <strong className="text-white block">Ponto de Referência:</strong>
                    <span>Arredores do Banco BIC / Casa das Merendas.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-extrabold flex items-center justify-center shrink-0 text-xs">
                    3
                  </div>
                  <div>
                    <strong className="text-white block">Segurança e Recepção:</strong>
                    <span>Portaria com segurança 24/7 e estacionamento reservado para pais.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://maps.google.com/?q=Projecto+Nando+Luanda+Banco+BIC`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20estou%20a%20caminho%20do%20col%C3%A9gio%20e%20gostaria%20de%20ajuda%20para%20chegar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Pedir Localização GPS</span>
                </a>
              </div>
            </div>

            {/* Campus Photo Preview Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={OFFICIAL_IMAGES.slide3}
                alt="Fachada e Campus do Complexo Escolar Basima do Saber"
                referrerPolicy="no-referrer"
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-amber-400 uppercase">Visitas Abertas</span>
                <p className="text-sm font-bold mt-1">Conheça o nosso ambiente seguro e as 22 salas modernas.</p>
                <p className="text-xs text-slate-300 mt-1">Secretaria disponível de Segunda a Sábado para acolhimento de novos alunos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (FAQ) Accordion */}
      <section id="perguntas-frequentes" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Tire as suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes sobre Matrículas & Atendimento
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Respostas claras para as questões mais comuns dos encarregados de educação.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-900 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-2">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-blue-900 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Campus Visit Invitation Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-2xl border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visita Guiada sem Compromisso</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Venha Conhecer as Instalações do Basima do Saber
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Traga o seu educando para visitar as nossas 22 salas de aula climatizadas, o laboratório prático, a sala de informática, o campo polidesportivo e a biblioteca.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20guiada%20ao%20Complexo%20Escolar%20Basima%20do%20Saber.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all hover:scale-105 text-xs sm:text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita no WhatsApp</span>
            </a>

            <a
              href="tel:+244958363295"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-2xl backdrop-blur-sm border border-white/20 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Ligar para a Secretaria</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
