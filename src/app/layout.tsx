import '@/styles/globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'Generated by create next app, configured by Bernardo Meirelles.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}