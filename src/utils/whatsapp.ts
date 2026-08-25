/**
 * WhatsApp Forwarding and Formatting Utility
 * Complexo Escolar Basima do Saber
 * Official WhatsApp: +244 958 363 295
 */

export const OFFICIAL_WHATSAPP_NUMBER = '244958363295';
export const OFFICIAL_WHATSAPP_DISPLAY = '+244 958 363 295';

export interface FormSubmissionData {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  courseOrLevel?: string;
  message?: string;
  formType?: string;
}

/**
 * Formats user input and immediately forwards to the official school WhatsApp number (+244 958 363 295)
 */
export function sendToWhatsApp(data: FormSubmissionData): string {
  let text = `*COMPLEXO ESCOLAR BASIMA DO SABER*\n`;
  text += `🏛️ *Solicitação via Website Oficial*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `👤 *Nome:* ${data.name.trim() || 'Encarregado(a)'}\n`;
  text += `📱 *Telefone/WhatsApp:* ${data.phone.trim() || 'Não indicado'}\n`;

  if (data.email && data.email.trim()) {
    text += `📧 *E-mail:* ${data.email.trim()}\n`;
  }

  if (data.courseOrLevel && data.courseOrLevel.trim()) {
    text += `📚 *Nível / Curso de Interesse:* ${data.courseOrLevel.trim()}\n`;
  }

  if (data.subject && data.subject.trim()) {
    text += `🏷️ *Assunto:* ${data.subject.trim()}\n`;
  }

  if (data.message && data.message.trim()) {
    text += `💬 *Mensagem / Questão:*\n${data.message.trim()}\n`;
  }

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `📅 *Data:* ${new Date().toLocaleDateString('pt-PT')} | *Hora:* ${new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}\n`;
  text += `Agradecemos o vosso contacto!`;

  const encoded = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encoded}`;

  // Automatically trigger WhatsApp in a new tab/window
  if (typeof window !== 'undefined') {
    const win = window.open(whatsappUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      // If popup was blocked, fallback to direct location
      window.location.href = whatsappUrl;
    }
  }

  return whatsappUrl;
}
