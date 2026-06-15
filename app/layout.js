import './globals.css';
import { Bricolage_Grotesque, Hanken_Grotesk, Tiro_Devanagari_Sanskrit } from 'next/font/google';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const devanagari = Tiro_Devanagari_Sanskrit({
  subsets: ['devanagari', 'latin'],
  weight: '400',
  variable: '--font-dev',
  display: 'swap',
});

export const metadata = {
  title: 'BodhaAI — Awakened Intelligence',
  description:
    'BodhaAI builds intelligent AI systems that help organizations automate operations, enhance decision-making, and unlock growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${devanagari.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
