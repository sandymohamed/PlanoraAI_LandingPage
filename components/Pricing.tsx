export function Pricing() {
  return (
    <section id="pricing" className="border-t border-zinc-800/60 py-24">
  <div className="mx-auto max-w-6xl px-6 text-center">
    <h2 className="text-3xl font-bold">Plans for every stage</h2>

    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
      Start free today. More powerful plans are coming as Planora grows.
      Join the waitlist to be the first to know when they're available.
    </p>

    <div className="mt-12 grid gap-8 lg:grid-cols-3">

      {/* FREE */}

      <div className="glass rounded-2xl p-8 text-left">
        <h3 className="text-xl font-semibold">Free</h3>

        <p className="mt-2 text-sm text-zinc-500">
          Available today
        </p>

        <ul className="mt-6 space-y-3 text-sm text-zinc-400">
          <li>✓ Up to 3 active goals</li>
          <li>✓ 5 AI plans every month</li>
          <li>✓ Goals, tasks & milestones</li>
          <li>✓ Daily routines & reminders</li>
          <li>✓ Calendar & productivity tools</li>
        </ul>
      </div>

      {/* PRO */}

      <div className="rounded-2xl border border-zinc-700 bg-planora-surface p-8 text-left">
        <div className="inline-flex rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
          Coming Soon
        </div>

        <h3 className="mt-4 text-xl font-semibold">
          Pro
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          Built for productivity enthusiasts.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-zinc-300">
          <li>✓ More AI planning</li>
          <li>✓ More active goals</li>
          <li>✓ Advanced routines</li>
          <li>✓ Smart productivity insights</li>
          <li>✓ Early access to new features</li>
        </ul>
      </div>

      {/* PREMIUM */}

      <div className="rounded-2xl border border-planora-primary bg-planora-surface p-8 text-left">
        <div className="inline-flex rounded-full bg-planora-primary/20 px-3 py-1 text-xs font-semibold text-planora-primary">
          Future Vision
        </div>

        <h3 className="mt-4 text-xl font-semibold text-planora-primary">
          Premium
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          The complete Planora experience.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-zinc-300">
          <li>✓ Unlimited AI planning</li>
          <li>✓ Advanced analytics</li>
          <li>✓ AI productivity coach</li>
          <li>✓ Priority support</li>
          <li>✓ Exclusive premium features</li>
        </ul>
      </div>

    </div>
  </div>
</section>
  );
}
