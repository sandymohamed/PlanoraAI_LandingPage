import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Delete Account — Planora AI",
  description:
    "Learn how to delete your Planora AI account or remove your account data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-violet-400 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-white">
          Delete Your Account or Account Data
        </h1>

        <p className="mt-4 text-zinc-400">
          Planora AI gives you full control over your personal information. You
          can either permanently delete your entire account or delete your
          account data while keeping your account active.
        </p>

        <section className="mt-10 space-y-10 text-zinc-300">
          {/* Delete Account */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Permanently Delete Your Account
            </h2>

            <p className="mt-3">
              Deleting your account permanently removes your Planora AI account
              and associated personal data.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-white">Steps</h3>

            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                Open the <strong>Planora AI</strong> app.
              </li>
              <li>Sign in to your account.</li>
              <li>
                Navigate to <strong>Account</strong>.
              </li>
              <li>
                Open <strong>Account &amp; Settings</strong>.
              </li>
              <li>
                Tap <strong>Delete Account</strong>.
              </li>
              <li>Confirm the deletion.</li>
            </ol>

            <p className="mt-4">
              This action is permanent and cannot be undone.
            </p>
          </div>

          {/* Delete Data */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Delete Account Data Only
            </h2>

            <p className="mt-3">
              If you would like to keep your account but remove your stored
              productivity data, you can delete your account data without
              deleting your account.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-white">Steps</h3>

            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                Open the <strong>Planora AI</strong> app.
              </li>
              <li>
                Navigate to <strong>Account</strong>.
              </li>
              <li>
                Open <strong>Account &amp; Settings</strong>.
              </li>
              <li>
                Tap <strong>Delete Data</strong>.
              </li>
              <li>Confirm the deletion.</li>
            </ol>
          </div>

          {/* Deleted data */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Data That May Be Deleted
            </h2>

            <p className="mt-3">
              Depending on the option you choose, Planora AI may remove the
              following information associated with your account:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Profile information</li>
              <li>Tasks</li>
              <li>Goals</li>
              <li>Milestones</li>
              <li>Routines</li>
              <li>Alarms</li>
              <li>Calendar events</li>
              <li>AI-generated plans and AI history</li>
              <li>Notifications</li>
              <li>Push notification device tokens</li>
              <li>Application preferences associated with your account</li>
            </ul>
          </div>

          {/* Retention */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Data Retention
            </h2>

            <p className="mt-3">
              After a deletion request is completed, your personal data is
              permanently removed from our systems. We may retain limited
              technical or legal records only when required to comply with
              applicable laws, resolve disputes, prevent fraud, or enforce our
              legal obligations.
            </p>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-2xl font-semibold text-white">Need Help?</h2>

            <p className="mt-3">
              If you cannot access your account but would like to request its
              deletion, please contact us and include the email address
              associated with your Planora AI account.
            </p>

            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:planora0ai@gmail.com"
                className="text-violet-400 hover:underline"
              >
                planora0ai@gmail.com
              </a>
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Last updated: July 2026</p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
