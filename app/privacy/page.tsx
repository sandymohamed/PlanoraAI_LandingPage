import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — Planora AI',
  description: 'Learn how Planora AI collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-violet-400 hover:underline">
          ← Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: July 5, 2026
        </p>

        <section className="prose prose-invert mt-10 space-y-6 text-zinc-300">

          <p>
            Welcome to Planora AI ("Planora", "we", "our", or "us").
            Your privacy is important to us. This Privacy Policy explains
            what information we collect, how we use it, how we protect it,
            and the choices you have regarding your personal information
            when using the Planora AI mobile application and website.
          </p>

          <h2 className="text-xl font-semibold text-white">
            1. Information We Collect
          </h2>

          <p>We collect information that helps us provide and improve our services, including:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Account information such as your email address, display name, and preferences.</li>
            <li>Productivity data you create, including tasks, goals, milestones, routines, reminders, alarms, notes, and calendar events.</li>
            <li>Device information required to provide notifications and maintain account security.</li>
            <li>Diagnostic and usage information that helps us improve reliability and performance.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">
            2. How We Use Your Information
          </h2>

          <p>We use your information to:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Create and manage your account.</li>
            <li>Synchronize your productivity data across your devices.</li>
            <li>Deliver reminders and notifications you choose to receive.</li>
            <li>Provide AI-powered planning features.</li>
            <li>Improve app performance, reliability, and user experience.</li>
            <li>Protect our services against fraud, abuse, and unauthorized access.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">
            3. AI Features
          </h2>

          <p>
            When you use AI-powered planning features, the information necessary
            to generate your requested plan may be securely shared with trusted
            third-party AI service providers. We only share the information
            required to provide the requested functionality and never share
            your password or authentication credentials.
          </p>

          <h2 className="text-xl font-semibold text-white">
            4. Notifications
          </h2>

          <p>
            If you enable notifications, we may send reminders,
            alarms, and other important updates related to your account.
            You can disable notifications at any time through your
            device settings or within the application.
          </p>

          <h2 className="text-xl font-semibold text-white">
            5. Analytics and Diagnostics
          </h2>

          <p>
            We may collect anonymous or limited diagnostic information
            to help identify crashes, improve stability, measure feature
            usage, and enhance the overall quality of the application.
            This information is used only to improve Planora AI and is
            never sold to advertisers.
          </p>

          <h2 className="text-xl font-semibold text-white">
            6. Data Security
          </h2>

          <p>
            We use reasonable administrative, technical, and organizational
            safeguards to protect your information against unauthorized access,
            disclosure, alteration, or destruction. While no system can be
            guaranteed to be completely secure, we continuously work to keep
            your information protected.
          </p>

          <h2 className="text-xl font-semibold text-white">
            7. Data Retention
          </h2>

          <p>
            We retain your information for as long as your account remains
            active or as necessary to provide our services and comply with
            applicable legal obligations. When you delete your account,
            we will take reasonable steps to remove your personal information
            from our active systems.
          </p>

          <h2 className="text-xl font-semibold text-white">
            8. Data Export and Account Deletion
          </h2>

          <p>
            You may export your data or permanently delete your account
            through the application settings where available.
            If you need assistance, you may also contact us directly.
          </p>

          <h2 className="text-xl font-semibold text-white">
            9. Your Rights
          </h2>

          <p>
            Depending on your location and applicable laws,
            you may have the right to access, update,
            correct, export, or delete your personal information.
            You may also object to or restrict certain processing activities.
            We will respond to legitimate requests within a reasonable timeframe.
          </p>

          <h2 className="text-xl font-semibold text-white">
            10. Children's Privacy
          </h2>

          <p>
            Planora AI is not intended for children under the age of 13,
            and we do not knowingly collect personal information from children.
            If we become aware that such information has been collected,
            we will take appropriate steps to remove it.
          </p>

          <h2 className="text-xl font-semibold text-white">
            11. Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time.
            When significant changes are made, we will update the
            "Last updated" date on this page. Continued use of the
            service after changes become effective constitutes acceptance
            of the updated Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold text-white">
            12. Contact Us
          </h2>

          <p>
            If you have any questions, concerns, or requests regarding
            this Privacy Policy or your personal information,
            please contact us at{' '}
            <a
              href="mailto:planora0ai@gmail.com"
              className="text-violet-400"
            >
              planora0ai@gmail.com
            </a>{' '}
            or through our{' '}
            <Link href="/contact" className="text-violet-400">
              Contact page
            </Link>.
          </p>

        </section>
      </div>

      <Footer />
    </main>
  );
}
