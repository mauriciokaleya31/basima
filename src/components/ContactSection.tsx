import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    nivelInteresse: 'Ensino Técnico-Profissional',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Auto reset after 6 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        nivelInteresse: 'Ensino Técnico-Profissional',
        mensagem: '',
      });
    }, 6000);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá! Chamo-me ${formData.nome || 'Encarregado(a)'}.\nTelefone: ${formData.telefone || 'N/A'}\nNível de Interesse: ${formData.nivelInteresse}\nMensagem: ${formData.mensagem || 'Gostaria de obter informações sobre matrículas e cursos no Basima do Saber.'}`
    );
    window.open(`https://wa.me/244958363295?text=${text}`, '_blank');
  };

  return (
    <section id="contactos" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-blue-900" />
            <span>Atendimento & Secretaria</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contactos & Localização
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-amber-400 mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Estamos de portas abertas para receber pais e encarregados de educação. Entre em contacto pelos nossos canais oficiais ou visite as nossas instalações.
          </p>
        </div>

        {/* 4 Primary Quick Action Buttons (Prompt specified: Ligar, WhatsApp, Enviar E-mail, Ver Localização) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <a
            href={`tel:${CONTACT_INFO.phones[0].raw}`}
            className="bg-blue-900 hover:bg-blue-800 text-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-200 group"
            id="quick-action-call"
          >
            <div className="w-11 h-11 rounded-full bg-blue-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-5 h-5 text-amber-400" />
            </div>
            <span className="font-bold text-sm sm:text-base">Ligar</span>
            <span className="text-[11px] text-blue-200 mt-0.5">{CONTACT_INFO.phones[0].display}</span>
          </a>

          <a
            href="https://wa.me/244958363295?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20matr%C3%ADculas%20no%20Complexo%20Escolar%20Basima%20do%20Saber."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-200 group"
            id="quick-action-whatsapp"
          >
            <div className="w-11 h-11 rounded-full bg-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-sm sm:text-base">WhatsApp</span>
            <span className="text-[11px] text-emerald-100 mt-0.5">Resposta Rápida</span>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}?subject=Informações%20sobre%20Matrículas%20-%20Basima%20do%20Saber`}
            className="bg-slate-800 hover:bg-slate-700 text-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-200 group"
            id="quick-action-email"
          >
            <div className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-amber-400" />
            </div>
            <span className="font-bold text-sm sm:text-base">Enviar E-mail</span>
            <span className="text-[11px] text-slate-300 mt-0.5 truncate max-w-full">geral@colegiobasima.com</span>
          </a>

          <a
            href="https://maps.google.com/?q=Luanda,Projecto+Nando"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-blue-950 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-200 group"
            id="quick-action-location"
          >
            <div className="w-11 h-11 rounded-full bg-amber-600 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-base">Ver Localização</span>
            <span className="text-[11px] text-blue-900 font-medium mt-0.5">Projecto Nandó</span>
          </a>
        </div>

        {/* Detailed Grid: Info Cards & Interactive Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Info List & Location Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Informações Institucionais
              </h3>

              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Telefones Oficiais
                  </span>
                  <div className="mt-1 space-y-1">
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.raw}`}
                        className="block font-semibold text-slate-900 hover:text-blue-900 transition-colors text-sm"
                      >
                        {phone.display} {idx === 0 && <span className="text-[11px] font-normal text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ml-2">WhatsApp Principal</span>}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    E-mail
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-semibold text-slate-900 hover:text-blue-900 transition-colors text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Website
                  </span>
                  <a
                    href={`http://${CONTACT_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 hover:text-blue-900 transition-colors text-sm"
                  >
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Localização
                  </span>
                  <p className="font-semibold text-slate-900 text-sm leading-snug mt-0.5">
                    {CONTACT_INFO.city}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {CONTACT_INFO.address}
                  </p>
                  <p className="text-[11px] text-amber-700 bg-amber-50 px-2 py-1 rounded-md mt-2 font-medium">
                    Ponto de Referência: {CONTACT_INFO.reference}
                  </p>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Horário da Secretaria
                  </span>
                  <p className="text-xs text-slate-700 font-medium mt-0.5">
                    {CONTACT_INFO.openingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact & Pre-Enrollment Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm relative">
              <div className="mb-6">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
                  Envie uma Mensagem
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Fale Connosco / Solicitar Informações
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Preencha o formulário abaixo para receber orientações da nossa equipa pedagógica e administrativa.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Obrigado pelo seu interesse no Complexo Escolar Basima do Saber. A nossa secretaria entrará em contacto muito em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline hover:text-emerald-950 cursor-pointer pt-2"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nome do Encarregado(a) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex.: Manuel da Silva"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                        id="contact-form-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="Ex.: 923 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                        id="contact-form-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-mail (Opcional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                        id="contact-form-email"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nível de Interesse
                      </label>
                      <select
                        value={formData.nivelInteresse}
                        onChange={(e) => setFormData({ ...formData, nivelInteresse: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                        id="contact-form-level"
                      >
                        <option value="Pré-Escolar">Pré-Escolar</option>
                        <option value="Ensino Primário (1ª à 6ª Classe)">Ensino Primário (1ª à 6ª Classe)</option>
                        <option value="I Ciclo do Ensino Secundário (7ª à 9ª Classe)">I Ciclo do Ensino Secundário (7ª à 9ª)</option>
                        <option value="II Ciclo do Ensino Secundário (10ª à 12ª/13ª Classe)">II Ciclo do Ensino Secundário (10ª à 12ª/13ª)</option>
                        <option value="Ensino Técnico: Administração e Gestão">Ensino Técnico: Administração e Gestão</option>
                        <option value="Ensino Técnico: Gestão Financeira">Ensino Técnico: Gestão Financeira</option>
                        <option value="Ensino Técnico: Contabilidade">Ensino Técnico: Contabilidade</option>
                        <option value="Ensino Técnico: Recursos Humanos">Ensino Técnico: Recursos Humanos</option>
                        <option value="Ensino Técnico: Informática de Gestão">Ensino Técnico: Informática de Gestão</option>
                        <option value="Outras Informações Gerais">Outras Informações Gerais</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mensagem ou Dúvidas
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Indique a idade do aluno, turno de preferência ou questão específica..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                      id="contact-form-message"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      id="submit-contact-form"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Enviar Mensagem</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      id="whatsapp-direct-submit"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar por WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
