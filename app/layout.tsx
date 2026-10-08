import './globals.css';
import type { Metadata } from 'next';
import { brand } from '@/lib/data';

export const metadata: Metadata = {
  title: brand.name,
  description: brand.tagline,
  keywords: ['ItsTomiTV', 'gaming', 'streaming', 'esports', 'caster'],
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
