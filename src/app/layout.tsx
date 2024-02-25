import '@/styles/globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'bernardomrl',
  description:
    'A chatbot developed with gpt-3.5-turbo, based on my features and personality.'
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
