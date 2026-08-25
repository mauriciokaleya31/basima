import React, { useState } from 'react';
import {
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Phone,
  User,
  GraduationCap,
  Mail,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { sendToWhatsApp, OFFICIAL_WHATSAPP_DISPLAY, OFFICIAL_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface WhatsAppInquiryFormProps {
  title?: string;
  subtitle?: string;
  defaultSubject?: string;
  defaultLevelOrCourse?: string;
  formType?: string;
  compact?: boolean;
  className?: string;
}

export const WhatsAppInquiryForm: React.FC<WhatsAppInquiryFormProps> = ({
  title = 'Solicitar Informações e Vaga',
  subtitle = 'Preencha os dados abaixo para ser atendido diretamente no nosso WhatsApp oficial.',
  defaultSubject = 'Informações de Matrícula e Propinas',
  defaultLevelOrCourse = '',
  formType = 'Formulário Geral',
  compact = false,
  className = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseOrLevel, setCourseOrLevel] = useState(defaultLevelOrCourse);
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const url = sendToWhatsApp({
      name,
      phone,
      email,
      courseOrLevel,
      subject,
      message,
      formType,
    });

    setLastWhatsAppUrl(url);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
  };

  return (
    <div
      className={`bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden ${className}`}
      id="whatsapp-inquiry-form-card"
    >
      {/* Form Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white p-5 sm:p-6 relative">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atendimento Oficial Direto</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-medium text-amber-300">
          <MessageSquare className="w-3 h-3" />
          <span>Encaminhamento automático para {OFFICIAL_WHATSAPP_DISPLAY}</span>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-5 sm:p-7">
        {submitted ? (
          <div className="text-center py-8 px-4 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-slate-900">
                Informações Encaminhadas com Sucesso!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                A sua mensagem com os dados de <strong>{name}</strong> foi preparada e enviada para o WhatsApp oficial do <strong>Complexo Escolar Basima do Saber</strong> ({OFFICIAL_WHATSAPP_DISPLAY}).
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              {lastWhatsAppUrl && (
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-colors text-sm"
                  id="reopen-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Abrir Conversa no WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors cursor-pointer"
                id="reset-form-btn"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nome */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-900" />
                  <span>Nome do Encarregado(a) ou Aluno *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Manuel António"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Telefone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-900" />
                  <span>Telefone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: 958 363 295"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {!compact && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email (Opcional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-900" />
                    <span>E-mail (Opcional)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Nível ou Curso */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-900" />
                    <span>Nível de Ensino ou Curso de Interesse</span>
                  </label>
                  <select
                    value={courseOrLevel}
                    onChange={(e) => setCourseOrLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                  >
                    <option value="">Selecione uma opção...</option>
                    <option value="Pré-Escolar (Iniciação / Jardim)">Pré-Escolar (Iniciação / Jardim)</option>
                    <option value="Ensino Primário (1ª à 6ª Classe)">Ensino Primário (1ª à 6ª Classe)</option>
                    <option value="I Ciclo do Ensino Secundário (7ª à 9ª Classe)">I Ciclo do Ensino Secundário (7ª à 9ª Classe)</option>
                    <option value="II Ciclo do Ensino Secundário Geral (10ª à 12ª/13ª Classe)">II Ciclo Geral (10ª à 12ª/13ª Classe)</option>
                    <option value="Técnico: Administração e Gestão de Empresas">Técnico: Administração e Gestão</option>
                    <option value="Técnico: Gestão Financeira">Técnico: Gestão Financeira</option>
                    <option value="Técnico: Contabilidade">Técnico: Contabilidade</option>
                    <option value="Técnico: Gestão de Recursos Humanos">Técnico: Recursos Humanos</option>
                    <option value="Técnico: Informática de Gestão & Tecnologias">Técnico: Informática de Gestão</option>
                    <option value="Outro / Informações Gerais">Outro / Informações Gerais</option>
                  </select>
                </div>
              </div>
            )}

            {/* Assunto */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-900" />
                <span>Assunto Principal</span>
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ex: Solicitação de vaga para o ano lectivo"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Mensagem / Dúvidas */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Mensagem / Dúvidas Específicas
              </label>
              <textarea
                rows={compact ? 2 : 3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ex: Gostaria de saber os documentos necessários para a matrícula e horários das turmas..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                id="submit-to-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Enviar Directamente para o WhatsApp Oficial</span>
                <Send className="w-4 h-4 text-amber-300 ml-1" />
              </button>
            </div>

            {/* Helper notice */}
            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-500">
                Ao clicar em enviar, os dados preenchidos serão formatados e encaminhados de forma segura e instantânea para o WhatsApp oficial <strong>{OFFICIAL_WHATSAPP_DISPLAY}</strong>.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
