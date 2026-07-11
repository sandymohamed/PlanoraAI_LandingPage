import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Planora AI — Your goals deserve a real plan',
  description:
    'Planora AI turns goals, routines, and time into a system that keeps you moving every day.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Planora AI — Your goals deserve a real plan',
    description:
      'Planora AI turns goals, routines, and time into a system that keeps you moving every day.',
    images: [
      {
        url: '/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'Planora logo',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
