import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastProvider } from '@/context/ToastContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AHPC | Association of Happiness of the Palestinian Child',
  description:
    'Supporting orphan children with education, healthcare, and shelter in Palestine.',
  metadataBase: new URL('https://www.isaadtefelfalastini.com'),
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: 'AHPC | Association of Happiness of the Palestinian Child',
    description:
      'Supporting orphan children with education, healthcare, and shelter in Palestine.',
    url: 'https://www.isaadtefelfalastini.com',
    siteName: 'AHPC',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'AHPC - Association of Happiness of the Palestinian Child'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
