import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service — Planora AI',
  description: 'Terms governing use of Planora AI.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-violet-400 hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-8 text-3xl font-bold text-white">Terms of Service</h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: May 31, 2026</p>

        <section className="mt-10 space-y-6 text-zinc-300">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of Planora AI (&quot;Planora&quot;,
            &quot;we&quot;, &quot;us&quot;). By creating an account or using the app you agree to these Terms. If you do
            not agree, do not use the service.
          </p>

          <h2 className="text-xl font-semibold text-white">1. Service usage</h2>
          <p>
            Planora provides personal productivity tools including tasks, goals, routines, calendar, alarms, and
            AI-assisted planning. We grant you a personal, non-exclusive, non-transferable license to use the app for
            its intended purpose. You may not misuse the service, attempt to disrupt it, reverse engineer it, or use it
            to violate any law. Features may change, and we strive to provide reasonable notice of material changes.
          </p>

          <h2 className="text-xl font-semibold text-white">2. User responsibilities</h2>
          <p>
            You are responsible for your account credentials and all activity under your account. You must provide
            accurate information, keep your credentials secure, and comply with applicable laws. You are responsible for
            the content you create and must have the rights to any information you submit. Notify us promptly of any
            unauthorized use.
          </p>

          <h2 className="text-xl font-semibold text-white">3. AI-generated content disclaimer</h2>
          <p>
            Planora&apos;s AI features generate plans, milestones, and suggestions automatically. AI output may be
            inaccurate, incomplete, or unsuitable for your situation. It is provided for assistance only and is not
            professional advice (medical, legal, financial, or otherwise). You are responsible for reviewing and
            deciding how to use any AI-generated content. We do not guarantee any particular result.
          </p>

          <h2 className="text-xl font-semibold text-white">4. Subscriptions &amp; billing</h2>
          <p>
            Planora is currently offered free during public beta, with monthly limits on certain features (such as AI
            plans). Premium plans are not yet available for purchase. When paid plans launch, they will be billed
            through the applicable app store, subject to that store&apos;s pricing, renewal, and refund policies. Joining
            the waitlist does not create any payment obligation. We will present clear terms before any charge.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Limitation of liability</h2>
          <p>
            Planora is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. To the
            maximum extent permitted by law, we are not liable for indirect, incidental, special, or consequential
            damages, or for loss of data or profits. Alarm, reminder, and notification delivery depends on your device,
            operating system, and permissions; we do not guarantee delivery in all conditions. Our total liability is
            limited to the amount you paid us in the 12 months before the claim (which may be zero during the free
            beta).
          </p>

          <h2 className="text-xl font-semibold text-white">6. Account termination</h2>
          <p>
            You may stop using Planora and delete your account at any time from <em>Settings → Delete account</em>. We
            may suspend or terminate accounts that violate these Terms, create security or legal risk, or abuse the
            service. We may also discontinue the service with reasonable notice. Upon termination, your right to use the
            app ends; data handling follows our{' '}
            <Link href="/privacy" className="text-violet-400">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-white">7. Changes to these Terms</h2>
          <p>
            We may update these Terms as the product evolves. Continued use after changes take effect constitutes
            acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-semibold text-white">8. Contact</h2>
          <p>
            Questions about these Terms:{' '}
            <a href="mailto:planora0ai@gmail.com" className="text-violet-400">
              planora0ai@gmail.com
            </a>{' '}
            — or use our{' '}
            <Link href="/contact" className="text-violet-400">
              contact form
            </Link>
            .
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
