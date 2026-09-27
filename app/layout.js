import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/PageTransition';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'P2B Infotech — Cloud, Software & Digital Platforms',
  description:
    'P2B Infotech builds IaaS, PaaS, SaaS and e-commerce platforms for fintech, edtech and healthcare businesses — from infrastructure to launch.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
