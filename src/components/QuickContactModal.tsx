import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/schoolData';
import { sendToWhatsApp, OFFICIAL_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialCourse?: string;
}

export const QuickContactModal: React.FC<QuickContactModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'Informações Gerais e Matrículas',
  initialCourse = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [courseOrLevel, setCourseOrLevel] = useState(initialCourse);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastUrl, setLastUrl] = useState('');

  useEffect(() => {
    setSubject(initialSubject);
    if (initialCourse) setCourseOrLevel(initialCourse);
  }, [initialSubject, initialCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const url = sendToWhatsApp({
      name,
      phone,
      subject,
      courseOrLevel,
      message,
      formType: 'Janela Rápida de Atendimento',
    });

    setLastUrl(url);
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const url = sendToWhatsApp({
      name: name || 'Encarregado(a)',
      phone: phone || 'Contacto Directo',
      subject: subject || 'Atendimento Directo',
      courseOrLevel,
      message: message || 'Gostaria de solicitar informações de matrícula no Complexo Escolar Basima do Saber.',
      formType: 'Clique Rápido WhatsApp',
    });
    setLastUrl(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fechar"
            id="close-contact-modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complexo Escolar Basima do Saber</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Fale com a Secretaria
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Preencha os dados e encaminhe automaticamente para o WhatsApp oficial <strong>{OFFICIAL_WHATSAPP_DISPLAY}</strong>.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Informações Encaminhadas com Sucesso!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                A sua mensagem foi transmitida para o WhatsApp oficial <strong>{OFFICIAL_WHATSAPP_DISPLAY}</strong>.
              </p>
              {lastUrl && (
                <div className="pt-2">
                  <a
                    href={lastUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Reabrir WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-blue-900 font-bold hover:underline"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome do Encarregado(a) ou Aluno *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: 958 363 295"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nível / Curso de Interesse
                </label>
                <input
                  type="text"
                  value={courseOrLevel}
                  onChange={(e) => setCourseOrLevel(e.target.value)}
                  placeholder="Ex: Ensino Primário, Cursos Técnicos, etc."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Observações ou Dúvidas
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Idade do aluno, ano lectivo pretendido..."
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  id="modal-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar para o WhatsApp ({OFFICIAL_WHATSAPP_DISPLAY})</span>
                </button>
              </div>

              {/* Direct Phones Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Ou ligue diretamente:</span>
                <span className="font-bold text-blue-900">
                  {CONTACT_INFO.phones[0].display} / {CONTACT_INFO.phones[1].display}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
