import { WaitlistForm } from '@/components/WaitlistForm';

export function Waitlist() {
  return (
    <section id="waitlist" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold">Join the early access waitlist</h2>
        <p className="mt-4 text-zinc-400">
          Planora AI is in public beta. Drop your email and we&apos;ll let you know the moment Premium and new
          features go live.
        </p>
        <div className="mt-8">
          <WaitlistForm source="landing" />
        </div>
        <p className="mt-4 text-xs text-zinc-600">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
