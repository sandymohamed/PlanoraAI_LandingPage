import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — Planora AI',
  description: 'Contact Planora AI support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="text-sm text-violet-400 hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-8 text-3xl font-bold text-white">Contact &amp; Support</h1>
        <p className="mt-4 text-zinc-300">
          Questions about your account, alarms, billing, or data requests? Send us a message and we&apos;ll get back to
          you, usually within 2 business days.
        </p>

        <ContactForm />

        <p className="mt-8 text-sm text-zinc-500">
          Prefer email? Reach us at{' '}
          <a href="mailto:planora0ai@gmail.com" className="text-violet-400 hover:underline">
            planora0ai@gmail.com
          </a>
          . For account deletion or data export, you can also use in-app Settings.
        </p>
      </div>
      <Footer />
    </main>
  );
}
