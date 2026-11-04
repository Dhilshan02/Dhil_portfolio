import emailjs from '@emailjs/browser';

export interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Replace these placeholders with your actual EmailJS credentials or set them in .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export const sendContactEmail = async (params: EmailParams) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: params.name,
      from_email: params.email,
      subject: params.subject,
      message: params.message,
      to_name: 'Dhilshan Mohamed',
    },
    PUBLIC_KEY
  );
};
