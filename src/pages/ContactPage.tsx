import React from 'react';
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
} from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_IMAGES } from '../data/schoolData';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageId } from '../types';
import { OFFICIAL_WHATSAPP_DISPLAY, OFFICIAL_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface ContactPageProps {
  onNavigate?: (page: PageId) => void;
  onOpenContactModal?: (subject?: string, course?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn pb-12">
      {/* 1. Hero Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src={OFFICIAL_IMAGES.campus}
            alt="Localização do Complexo Escolar Basima do Saber"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Canais de Atendimento</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Contactos, Horários & Localização Oficial
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Estamos disponíveis para atendê-lo presencialmente na nossa secretaria no Projecto Nandó ou através do WhatsApp oficial para matrículas, informações pedagógicas e agendamentos.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Primary WhatsApp Spotlight Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <MessageSquare className="w-4 h-4" />
              <span>Canal Directo & Prioritário</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              WhatsApp Oficial: {OFFICIAL_WHATSAPP_DISPLAY}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
              Tire dúvidas em tempo real, receba tabelas de propinas em PDF, esclareça requisitos de matrícula e agende visitas diretamente com a nossa equipa.
            </p>
          </div>

          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20matr%C3%ADculas%20no%20Complexo%20Escolar%20Basima%20do%20Saber.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105 text-sm cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Iniciar Conversa no WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 3. Detailed Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Telefones */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Linhas Telefónicas</h3>
              <p className="text-xs text-slate-500 mt-1">Chamadas de voz directas</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              {CONTACT_INFO.phones.map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="font-semibold">{p.display}</span>
                  <a
                    href={`tel:${p.raw}`}
                    className="text-blue-900 font-bold hover:underline"
                  >
                    Ligar
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Email & Web */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Email & Website</h3>
              <p className="text-xs text-slate-500 mt-1">Comunicação formal</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="space-y-0.5">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Email Geral:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-semibold text-blue-900 hover:underline break-all">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="space-y-0.5 pt-1">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Portal:</span>
                <span className="font-semibold text-slate-800">{CONTACT_INFO.website}</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Horário da Secretaria</h3>
              <p className="text-xs text-slate-500 mt-1">Atendimento presencial</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="space-y-0.5">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Dias Úteis:</span>
                <span className="font-semibold text-slate-900">07h00 às 17h30</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Sábados:</span>
                <span className="font-semibold text-slate-900">08h00 às 12h30</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Domingos:</span>
                <span className="font-semibold text-slate-400">Encerrado</span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Endereço</h3>
              <p className="text-xs text-slate-500 mt-1">Ponto de referência</p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">{CONTACT_INFO.address}</p>
              <p className="text-slate-500">{CONTACT_INFO.reference}</p>
              <p className="text-slate-500 font-medium">{CONTACT_INFO.city}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Form & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <WhatsAppInquiryForm
              title="Envie uma Mensagem Direta para o WhatsApp"
              subtitle="Preencha os campos abaixo. Ao clicar em Enviar, as suas informações serão organizadas e abertas diretamente no nosso WhatsApp oficial."
              formType="Página de Contactos"
            />
          </div>

          {/* Location & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Como Chegar</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Como Localizar o Complexo Escolar
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estamos localizados no coração do <strong>Projecto Nandó</strong>. Como referência principal, situamo-nos nos arredores do <strong>Banco BIC</strong> e da conhecida <strong>Casa das Merendas</strong>.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Acesso fácil por via principal asfaltada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Estacionamento seguro para encarregados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Portaria e segurança escolar permanente</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={OFFICIAL_IMAGES.slide3}
                alt="Fachada do Complexo Escolar Basima do Saber"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-amber-400 uppercase">Visitas Presenciais</span>
                <p className="text-sm font-bold">Aguardamos a sua visita durante o horário de expediente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
